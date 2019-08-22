import React, { Component } from 'react';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="fname">
            First Name
            <input type="text" id="fname" name="fname" />
          </label>
          <label htmlFor="fname">
            Last Name
            <input type="text" name="fname" />
          </label>
          <label htmlFor="npi-number">
            NPI number
            <input type="text" name="npi-number" />
          </label>
          <label htmlFor="bus-addr">
            Business Address
            <input type="text" name="bus-addr" />
          </label>
          <label htmlFor="tel-num">
            Telephone Number
            <input type="text" name="tel-num" />
          </label>
          <label htmlFor="email-addr">
            Email address
            <input type="email" name="email-addr" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Registration;
