import React, { Component } from 'react';
import { Input, Form } from 'semantic-ui-react'
import StageForm from '../components/StageForm'

const formDef = {
  firstName: {
    placeholder: "First Name",
    label: "What is your first name?"
  },
  lastName: {
    placeholder: "Last Name",
    label: "What is your last name?"
  },
  email: {
    placeholder: "me@example.com",
    label: "What is your email address?"
  },
  phone: {
    placeholder: "555-555-5555",
    label: "What is your phone number?"
  }
}

export default class Welcome extends Component {
  render() {
    return <StageForm
      form={formDef}
      {...this.props}
    />
  }
}