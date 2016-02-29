require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('Header React Component', function() {
  it('renders component', function() {
    var React = require('react');
    var TestUtils = require('react/lib/ReactTestUtils');
    var Header = require('../../js/components/Header.react.js');
    var header = TestUtils.renderIntoDocument(React.createElement('Header'));
    var div = TestUtils.findRenderedDOMComponentWithTag(header, 'div');
    expect(div.getDOMNode().textContent).toBe('');
  });
});