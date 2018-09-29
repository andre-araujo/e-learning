import { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import uuidv1 from 'uuid/v1';

import { actions } from '../../../../lib';
import { TextInput, Button, Text } from '../../../elements';
import { deepSelect } from '../../../../lib/utils';

class EditActivity extends Component {
  state = {
    name: this.props.name || '', // eslint-disable-line
    moduleName: this.props.moduleName || '', // eslint-disable-line
    questions: this.props.questions || [], // eslint-disable-line
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const formData = { ...this.state };

    formData.questions = formData.questions.map(question => ({
      answers: question.answers.map(answer => ({
        value: answer.value,
        correct: answer.correct,
      })),
      value: question.value,
    }));

    const {
      onSubmit,
      createActivity,
      getCourseDetail,
      authentication,
      submitUserActivity,
      courseId,
      activityId,
    } = this.props;

    const isAdmin = deepSelect(authentication, 'getUser.account.admin');

    const requestFunction = isAdmin ? createActivity : submitUserActivity;

    const resp = await requestFunction({
      ...formData,
      courseId,
      activityId,
    });

    if (resp.status >= 400) return;

    await getCourseDetail(courseId);

    if (onSubmit) onSubmit();
  }

  handleQuestionInput = (index, value) => {
    this.setState((state) => {
      const questions = [...state.questions];
      questions[index].value = value;
      return { questions };
    });
  }

  handleAnswerInput = (questionIndex, index, value = null, correct) => {
    this.setState((state) => {
      const questions = [...state.questions];
      const answer = questions[questionIndex].answers[index];

      if (value !== null) {
        answer.value = value;
      }

      if (correct) {
        questions[questionIndex].answers = questions[questionIndex].answers.map((data, i) => ({
          ...data,
          correct: i === index,
        }));
      }

      return { questions };
    });
  }

  addQuestion = () => {
    const { questions } = this.state;

    const answers = ['1', '2', '3', '4'].map(answerId => ({
      id: answerId,
      value: `Resposta ${answerId}`,
      correct: answerId === '1',
    }));

    this.setState({
      questions: [...questions, {
        id: uuidv1(),
        value: 'Exemplo de pergunta',
        answers,
      }],
    });
  }

  render() {
    const { questions, moduleName, name } = this.state;
    const {
      authentication,
    } = this.props;

    const isAdmin = deepSelect(authentication, 'getUser.account.admin');

    return (
      <div>
        {
          isAdmin && (
            <Fragment>
              <button type="button" onClick={this.addQuestion}>
                <Text.Paragraph margin="30px 0">
                  <FaPlus />
                  {' Adicionar pergunta'}
                </Text.Paragraph>
              </button>
              <TextInput
                required
                label="Nome da atividade"
                onChange={e => this.setState({ name: e.target.value })}
                name="moduleName"
                value={name}
              />
              <TextInput
                required
                label="Nome do módulo"
                onChange={e => this.setState({ moduleName: e.target.value })}
                name="moduleName"
                value={moduleName}
              />

            </Fragment>
          )
        }

        <form
          name="edit-lesson"
          onSubmit={this.onSubmit}
        >
          {questions.map((question, index) => (
            <div key={question.id}>
              <Text.Subtitle margin="15px 0">
                {`Questão ${index + 1}: `}
              </Text.Subtitle>

              {
                isAdmin && (
                  <TextInput
                    required
                    onChange={e => this.handleQuestionInput(index, e.target.value)}
                    name={question.id}
                    value={question.value}
                  />
                )
              }
              {
                !isAdmin && (
                  <Text.Subtitle margin="15px 0">
                    {question.value}
                  </Text.Subtitle>
                )
              }
              {question.answers.map((answer, answerIndex) => (
                <div key={answer.id} style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>

                  <input
                    required
                    type="radio"
                    onChange={() => this.handleAnswerInput(index, answerIndex, null, true)}
                    name={question.id}
                    value={question.id}
                    checked={answer.correct}
                  />
                  {
                    isAdmin && (
                      <TextInput
                        name={answer.id}
                        onChange={e => this.handleAnswerInput(index, answerIndex, e.target.value)}
                        value={answer.value}
                      />
                    )
                  }

                  {
                    !isAdmin && (
                      <Text.Paragraph>
                        {answer.value}
                      </Text.Paragraph>
                    )
                  }
                </div>
              ))}
            </div>
          ))}

          <Button secondary full>
            Feito
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
});

const mapDispatchToProps = dispatch => ({
  createActivity: data => dispatch(actions.createActivity(data)),
  submitUserActivity: data => dispatch(actions.submitUserActivity(data)),
  getCourseDetail: id => dispatch(actions.getCourseDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditActivity);
