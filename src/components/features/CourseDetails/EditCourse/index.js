import { connect } from 'react-redux';

import { actions } from '../../../../lib';
import { TextInput, Button } from '../../../elements';
import { Form } from '../../../modules';

const EditCourse = ({
  onSubmit,
  name,
  instructorName,
  category,
  keyWords,
  courseId,
  requestCreateCourse,
}) => (
  <div>
    <Form
      name="edit-course"
      onSubmit={(data) => {
        requestCreateCourse({ ...data, courseId }).then(onSubmit);
      }}
    >
      <Form.Field
        name="name"
        label="Nome do curso"
        initialValue={name}
        render={TextInput}
      />
      <Form.Field
        name="instructorName"
        label="Nome do instrutor"
        initialValue={instructorName}
        render={TextInput}
      />
      <Form.Field
        name="category"
        label="Categoria"
        initialValue={category}
        render={TextInput}
      />
      <Form.Field
        name="keyWords"
        label="Palavras-chave"
        initialValue={keyWords}
        render={TextInput}
      />
      <Button secondary full>
        Feito
      </Button>
    </Form>
  </div>
);

const mapDispatchToProps = dispatch => ({
  requestCreateCourse: data => dispatch(actions.requestCreateCourse(data)),
});

export default connect(null, mapDispatchToProps)(EditCourse);
