require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('Footer React Component', function() {
  it('renders component', function() {
    var React = require('react');
    var TestUtils = require('react/lib/ReactTestUtils');
    var Footer = require('../../js/components/Footer.react.js');
    var footer = TestUtils.renderIntoDocument(React.createElement('Footer'));
    var hr = TestUtils.findRenderedDOMComponentWithTag(footer, 'hr');
    expect(hr.getDOMNode().getAttribute('class')).toInclude('footer');
    expect(hr.getDOMNode().nextSibling.firstChild.textContent).toInclude('Products');
  });
});