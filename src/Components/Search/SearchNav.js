import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";

const SearchInputField = posed.form({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: { type: "spring", stiffness: 500, damping: 100 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { duration: 250 }
  }
});

const Shade = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: { y: { stiffness: 1000, damping: 1000, duration: 250 } }
  }
});

export class SearchNav extends Component {
  state = {
    inputText: "",
    showSearchInput: false
  };
  searchRef = React.createRef();
  inputRef = React.createRef();

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showSearchInput !== nextState.showSearchInput;
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleClick = e => {
    if (
      this.searchRef.current.contains(e.target) &&
      e.target.className.includes("nav-link") === false
    ) {
      this.setState({ showSearchInput: true });
    } else if (e.target.className.includes("nav-link") === false) {
      this.setState({ showSearchInput: false, inputText: "" });
    }
  };

  handleSubmit = e => {
    const { inputText } = this.state;
    e.preventDefault();
    if (inputText.length > 2) {
      this.props.history.push({
        pathname: "/search",
        search: `?query=${inputText}`
      });
      this.setState({ showSearchInput: false, inputText: "" });
    }
  };

  style = { color: "#7c7c7d", cursor: "pointer" };

  render() {
    const { showSearchInput } = this.state;
    return (
      <div ref={this.searchRef}>
        <PoseGroup>
          {showSearchInput && (
            <SearchInputField
              key="SearchInputField"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-search" />
                  </span>
                </div>
                <input
                  ref={this.inputRef}
                  type="text"
                  value={this.inputText}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </SearchInputField>
          )}
        </PoseGroup>
        <PoseGroup onRest={() => this.inputRef.current.focus()}>
          {!showSearchInput && (
            <Shade
              key="Shade"
              style={this.style}
              className=" d-none d-lg-inline-block"
              onClick={this.handleClick}
            >
              <i className="fas fa-search" />
            </Shade>
          )}
        </PoseGroup>
      </div>
    );
  }
}

export default withRouter(SearchNav);
