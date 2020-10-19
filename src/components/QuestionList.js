import React from 'react';

class QuestionList extends React.Component {
  
  
  render() {
    const { questions } = this.props;
    return (
      <ul>
        {
          questions.map(question => <li><b>{question.user}</b> quer saber: {question.question}</li>)
        }
      </ul>
    );
  }
}

export default QuestionList;
