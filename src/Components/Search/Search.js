import React, { Component } from "react";
import Loading from "../Shared/Loading";
import InputField from "./InputField";
import SearchListMenu from "./SearchListMenu";
import SearchList from "./SearchList";
import SadFace from "../Shared/SadFace";
import { searchHelper } from "../../Utils/Network";
import queryString from "query-string";
import axios from "axios";
import "./Search.css";

export class Search extends Component {
  state = {
    items: [],
    searchText: "",
    isDownloading: false,
    filterBy: "all",
    error: false
  };

  // If URL has any search query, start downloading items

  componentDidMount() {
    if (this.props.location.search) {
      const parsedQuery = queryString.parse(this.props.location.search);
      this.setState({ isDownloading: true }, () => this.getSearch(parsedQuery.query));
    }
  }

  // Based on URL search query changes, we download new items
  // Search query is changed and submitted from child component InputField

  componentDidUpdate(prevProps) {
    let oldQuery = prevProps.location.search;
    let newQuery = this.props.location.search;

    const parsedQuery = queryString.parse(newQuery);
    if (newQuery !== oldQuery) {
      this.setState({ isDownloading: true }, () => this.getSearch(parsedQuery.query));
    }
  }

  getSearch = async query => {
    try {
      const response = await axios.get(searchHelper.searchUrl(query));
      this.setState({ isDownloading: false, items: response.data.results });
    } catch (error) {
      this.setState({ isDownloading: false, error: true });
    }
  };

  handleFilter = e => {
    this.setState({ filterBy: e.target.value });
  };

  displayResults = () => {
    const { items, filterBy } = this.state;
    if (filterBy === "all") {
      return items;
    } else {
      return items.filter(res => res.media_type === filterBy);
    }
  };

  render() {
    const { filterBy, isDownloading, error } = this.state;
    const resultList = this.displayResults();

    return (
      <div className="container">
        <div className="col-12 col-lg-6 offset-lg-3">
          <InputField buttonText="Go!" placeholder="Search for a movie, tv show, person..." />
        </div>
        {error && <SadFace />}
        {isDownloading && <Loading />}
        {!error && !isDownloading && (
          <>
            <SearchListMenu handleChange={this.handleFilter} filterBy={filterBy} />
            <div className="row p-3">
              <SearchList list={resultList} />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Search;
