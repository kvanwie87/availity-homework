import React, { Component } from 'react';
import Input from '../common/Input';
import style from './registration.scss';

class Registration extends Component {
  static updateSomething(event) {
    // eslint-disable-next-line no-console
    console.log(event.target.value);
  }

  render() {
    return (
      <div className={style.mainSection}>
        <h1>Provider Registration</h1>
        <form>
          <div className={style.sectionWrapper}>
            <div className={style.sectionTitle}>Personal Information</div>
            <div className={style.sectionDescription}>Section Description</div>
            <Input fieldName="fname" labelText="First Name" />
            <Input fieldName="lname" labelText="Last Name" />
            <Input fieldName="npi-number" labelText="NPI number" />
          </div>
          <div className={style.sectionWrapperLast}>
            <div className={style.sectionTitle}>Contact Information</div>
            <div className={style.sectionDescription}>Section Description</div>
            <Input fieldName="bus-addr" labelText="Business Address" />
            <label htmlFor="tel-num">
              Telephone Number
              <input
                type="tel"
                name="tel-num"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </label>
            <label htmlFor="email-addr">
              Email address
              <input type="email" name="email-addr" />
            </label>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
