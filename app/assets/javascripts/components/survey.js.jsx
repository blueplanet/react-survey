var Survey = React.createClass({

  render: function() {
    return (
      <ReactBootstrap.Panel header={this.props.name}>
        {this.props.description}
      </ReactBootstrap.Panel>
    );
  }
});
