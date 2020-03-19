import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { ToastsStore } from 'react-toasts';

class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  constructor() {
    super();

    this.state = {
      files: '',
      disabled: false,
      error: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ files: e.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ error: {}, disabled: true })
    if (this.state.files) {
      let formData = new FormData();
      formData.append('file', this.state.files);

      fetch('http://localhost:3001/import-csv', {
        method: 'POST',
        body: formData,
      }).then(res => {
        ToastsStore.success(res.data.message);
        this.props.history.push('/users');
      }).catch(err => {
        console.log(err);
        this.setState({ error: {}, disabled: false })
      })
    } else {
      this.setState({ error: {file: 'File is required.'}, disabled: false })
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>Import CSV File</CardHeader>
          <CardBody>
            <Form encType="multipart/form-data" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input className="is-invalid" type="file" name="file" accept=".csv" onChange={(e) => this.handleChange(e)} />
                <span className="invalid-feedback">{this.state.error.file || ''}</span>
              </FormGroup>
              <FormGroup>
                <Button type="submit" disabled={this.state.disabled}>Submit</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Dashboard;
