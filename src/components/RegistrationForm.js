import React, { Component } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

const emailRegex = RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

const formValid = ({formErrors, ...rest}) => {
    let valid = true;
    
    // validate form Errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate if form is filled out
    Object.values(rest).forEach(val => {
        val == null && (valid = false);
    });

    return valid;
};

class RegistrationForm extends Component {
  constructor (props) {
    super (props);
    this.state = {
        email: null,
        password: null,
        names: null,
        education: null,
        degree: null,
        job: null,
        formErrors: {
            email: "",
            password: "",
            names: "",
            education: "",
            degree: "",
            job: ""
        }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          Email: ${this.state.email}
          Password: ${this.state.password}
          Name: ${this.state.names}
          Education: ${this.state.education}
          Degree: ${this.state.degree}
          Job: ${this.state.job}
      `);

      this.props.history.push('/Authorization');
    }
    else {
        console.errror('Invalid form');
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
        case "email":
          formErrors.email = 
            emailRegex.test(value) && value.length > 0
              ? ''
              : 'Invalid email';
          break;
        case "password":
          formErrors.password =
            value.length < 6 && value.length > 0
              ? 'Minimum 6 characters required'
              : '';
          break;
        case "names":
          formErrors.names =
            value.length < 6 && value.length > 0
              ? 'Minimum 6 characters required'
              : '';
          break;
        case "education":
          formErrors.education =
            value.length < 6 && value.length > 0
              ? 'Minimum 6 characters required'
              : '';
          break;
        case "degree":
          formErrors.degree =
            value.length < 6 && value.length > 0
              ? 'Minimum 6 characters required'
              : '';
          break;
        case "job":
          formErrors.job =
            value.length < 6 && value.length > 0
              ? 'Minimum 4 characters required'
              : '';
          break;
        default:
          break;
    }

    this.setState({ formErrors, [name]: value}, () => console.log(this.state) );
  };

  render() {
    const { formErrors } = this.state;
    return (
      <>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "80vh"}}>
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <Card>
              <Card.Body>
                <h2 className="text-center mb-2">Registration</h2>
                <Form onSubmit={this.handleSubmit} noValidate>
                  <div class="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input 
                      type="email" name="email" 
                      class="form-control" 
                      placeholder="Enter email" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.email}</div>
                  </div>

                  <div class="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                      type="password" name="password" 
                      class="form-control" 
                      placeholder="Enter password" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.password}</div>
                  </div>

                  <div class="form-group">
                    <label htmlFor="names">Full name:</label>
                    <input 
                      type="text" name="names" 
                      class="form-control" 
                      placeholder="Enter your name" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.names}</div>
                  </div>

                  <div class="form-group">
                    <label htmlFor="education">Education:</label>
                    <input 
                      type="text" name="education" 
                      class="form-control" 
                      placeholder="Enter your education" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.education}</div>
                  </div>

                  <div class="form-group">
                    <label htmlFor="degree">Degree:</label>
                    <input 
                      type="text" 
                      name="degree" 
                      class="form-control" 
                      placeholder="Enter your degree" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.degree}</div>
                  </div>

                  <div class="form-group">
                    <label fohtmlFor="job">Job/Position:</label>
                    <input 
                      type="text" 
                      name="job" 
                      class="form-control" 
                      placeholder="Enter job/position" 
                      noValidate 
                      onChange={this.handleChange} 
                    />
                          
                    <div className="text-danger">{formErrors.job}</div>
                  </div>

                  <div class="info">&nbsp;</div>

                  <div>
                    <Button 
                      className='w-100' 
                      type= "submit"
                      value= "Submit"
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
          </div>
        </Container>
      </>
    );
  }
}
export default withRouter(RegistrationForm);