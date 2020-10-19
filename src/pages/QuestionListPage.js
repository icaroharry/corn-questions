import React from 'react';

import { getQuestions } from "../services/api";
import QuestionList from '../components/QuestionList';


class QuestionListPage extends React.Component {

  // passo 1 -> quando a página for carregada, buscar lista de perguntas existentes. Enquanto estiver buscando, exibir um "loader"
  // passo 2 -> salvar a lista de perguntas no meu state
  // passo 3 -> renderizar a lista do meu state
  constructor() {
    super();

    this.state = {
      questions: [],
    }
  }

  async componentDidMount() {
    const questions = await getQuestions();
    this.setState({
      questions,
    });
  }

  render() {
    const { questions } = this.state;
    return (
      <QuestionList questions={questions} />
    );
  }
}
// comparar o Virtual DOM com o DOM real

export default QuestionListPage;
