import React, { Component } from 'react'; 
import {Button, Form} from 'semantic-ui-react';

export default class CommentBox extends Component { 
  render() { 
    return(
      <div>
        <Form>
          <Form.TextArea />
          <Button>Submit Comment</Button>
        </Form>
      </div>
    )
  }
}