import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(){

  }

  componentWillUnmount(){
    console.log("Counter - unmount")
  }
  

  render() {
    console.log("Counter - rendered");
    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please add some tags!"}
        {this.renderTags()} */}
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
         
        
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
