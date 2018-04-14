import { renderComponent, expect } from '../test_helper'; 
import CommentBox from '../../src/components/CommentBox'; 

// use 'describe' to group together similar test 

// use 
describe ('CommentBox', () => {

it ('has a text area', () => {
  const component = renderComponent(CommentBox);
  expect(component.find('textarea')).to.exist;  
  })

it ('has a button', () => {
  const component = renderComponent(CommentBox);
  expect(component.find('button')).to.exist; 

  })

}) 