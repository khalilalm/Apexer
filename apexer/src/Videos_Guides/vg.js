import React, { Component } from "react";

class vg extends Component {
  state = {};
  render() {
    return (
      <div class="p-8 ">
        <h1 class="bg-red-700 border-red-600 border-b p-4 m-4 rounded">
          {" "}
          Videos & Guides
        </h1>
        <div class="p-8 ">
          <img
            class="w-50 h-100 rounded-md"
            src="https://placeimg.com/840/480/any"
          />
        </div>
        <div class="flex">
          <img src="https://placeimg.com/840/480/any" />
          <img src="https://placeimg.com/840/480/any" />
          <img src="https://placeimg.com/840/480/any" />
        </div>
      </div>
    );
  }
}

export default vg;
