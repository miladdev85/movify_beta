import React, { Component } from "react";
import Loading from "./Loading";
import InputField from "./InputField";
import SearchListMenu from "./SearchListMenu";
import SearchListItem from "./SearchListItem";
import SadFace from "./SadFace";
import { searchHelper } from "./Network";
import queryString from "query-string";
import axios from "axios";

export class Search extends Component {
  state = {
    items: [],
    searchText: "",
    isDownloading: false,
    filterBy: "all",
    error: false
  };

  componentDidMount() {
    if (this.props.location.search) {
      const parsedQuery = queryString.parse(this.props.location.search);
      this.setState({ isDownloading: true }, () => this.getSearch(parsedQuery.query));
    }
  }

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

    return (
      <div className="container">
        <div className="col-12 col-lg-6 offset-lg-3">
          <InputField btnName="Go!" placeholder="Search for a movie, tv show, person..." />
        </div>
        {error && <SadFace />}
        {isDownloading && <Loading />}
        {!error && !isDownloading && (
          <>
            <SearchListMenu handleChange={this.handleFilter} filterBy={filterBy} />
            <div className="row p-3">
              {this.displayResults().map(item => {
                return <SearchListItem key={item.id + item.media_type} item={item} />;
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Search;
