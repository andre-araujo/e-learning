import { connect } from 'react-redux';

import { actions } from '../../../../lib';
import { TextInput, Button } from '../../../elements';
import { Form } from '../../../modules';

const EditLesson = ({
  onSubmit,
  name,
  createLesson,
  lessonId,
  courseId,
  getCourseDetail,
  youtubeVideoId,
  moduleName,
}) => (
  <div>
    <Form
      name="edit-lesson"
      onSubmit={formData => createLesson({ ...formData, courseId, lessonId })
        .then(() => getCourseDetail(courseId))
        .then(onSubmit)
      }
    >
      <Form.Field
        name="name"
        label="Nome da aula"
        render={TextInput}
        initialValue={name}
      />
      <Form.Field
        name="youtubeVideoId"
        label="ID vídeo do Youtube"
        render={TextInput}
        initialValue={youtubeVideoId}
      />
      <Form.Field
        name="moduleName"
        label="Nome do módulo"
        render={TextInput}
        initialValue={moduleName}
      />
      <Button secondary full>
        Feito
      </Button>
    </Form>
  </div>
);

const mapDispatchToProps = dispatch => ({
  createLesson: data => dispatch(actions.createLesson(data)),
  getCourseDetail: id => dispatch(actions.getCourseDetail(id)),
});

export default connect(null, mapDispatchToProps)(EditLesson);
