var Survey = React.createClass({
  render: function() {
    return (
      <ReactBootstrap.Panel header={this.props.survey.name}>
        <b>{this.props.survey.description}</b>
        <QuestionList questions={this.props.survey.questions} />
      </ReactBootstrap.Panel>
    );
  }
});

var QuestionList = React.createClass({
  render: function() {
    var questions = this.props.questions.map(function(question) {
      return (
        <Question caption={question.caption} choices={question.choices} />
      )
    });
    return (
      <div className='questionList'>
        questionList
        {questions}
      </div>
    );
  }
});

var Question = React.createClass({
  render: function() {
    return (
      <div className='question'>
        <b>{this.props.caption}</b>
        <ChoiceList choices={this.props.choices}/>
      </div>
    );
  }
});

var ChoiceList = React.createClass({
  render: function() {
    var choices = this.props.choices.map(function(choice) {
      return (
        <div className='choice'>{choice.caption}</div>
      )
    });
    return (
      <div className='choiceList'>
        {choices}
      </div>
    )
  }
});
