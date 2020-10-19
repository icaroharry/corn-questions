import React from 'react';
import { createQuestion } from '../services/api';
import { Redirect } from 'react-router-dom';

class NewQuestionPage extends React.Component {
  constructor() {
    super();

    this.state = {
      question: '',
      user: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  async handleSubmit(ev) {
    const { user, question } = this.state;
    ev.preventDefault();
    await createQuestion({ user, question, archive: false });
    this.props.history.push('/');
  }

  render() {
    const { question, user } = this.state;
    return (
      <section className="question-section">
        <h2>Faça uma pergunta</h2>

        <form onSubmit={this.handleSubmit}> 
          <label htmlFor="question">
            Digite a sua pergunta:
            <textarea onChange={this.handleChange} value={question} name="question" placeholder="Escreva aqui sua pergunta" id="question" cols="30" rows="10" />
          </label>
          <label htmlFor="user">
            Digite o seu nome:
            <input onChange={this.handleChange} value={user} type="text" name="user" placeholder="Maria" id="user"/>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </section>
    )
  }
}

export default NewQuestionPage;
