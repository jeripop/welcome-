import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleThoseChanges = (event) => {
    let formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({ formData });
  };

  handleThoseSubmissions = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  resetThatThang = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you {this.state.formData.firstName}, for submitting the form!
          </p>
          <button onClick={this.resetThatThang}>Reset</button>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form onSubmit={this.handleThoseSubmissions}>
          <div>
            <label htmlFor="firstName"></label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.formData.firstName}
              onChange={this.handleThoseChanges}
            ></input>
          </div>

          <div>
            <label htmlFor="lastName"></label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.formData.lastName}
              onChange={this.handleThoseChanges}
            ></input>
          </div>

          <button>Submit</button>
        </form>

        <div>
          {this.state.formData.firstName}
          <br />
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
