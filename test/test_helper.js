import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
// Set up testing environment to run like a browser in the command line 
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView; 
const $ = _$(global.window);
//build 'renderComponent' helper that should render a given react clsas
function renderComponent(ComponentClass){ 
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

  return $ (ReactDOM.findDOMNode(componentInstance));
}
// build helper for simulating events 

// set up chai-jquery

export { renderComponent, expect }