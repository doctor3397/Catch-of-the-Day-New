import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  // handleClick() { alert("Hey!!") }
  goToStore = (event) => { // Set as property not as a function
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.value.value;
    // 3. Change the page from / to /store/whaterver-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render(){
    return (
      <form onSubmit={this.goToStore} className="store-selector">
        <h2>Please Enter A Store</h2>
        {/* <button onClick={this.handleClick}>Click Me!</button> */}
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
