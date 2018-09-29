import { connect } from 'react-redux';
import { FaImage } from 'react-icons/fa';

import { actions } from '../../../../lib';
import { TextInput, Button, Text } from '../../../elements';
import { Form, ModalProvider } from '../../../modules';

const EditCourseImage = ({
  courseId,
  editCourseImage,
  onSubmit,
  initialValue,
}) => (
  <ModalProvider.Toggle
    title="Editar imagem"
    render={({ toggleModal }) => (
      <Form
        name="edit-course-image"
        onSubmit={formData => editCourseImage({ ...formData, courseId })
          .then(onSubmit)
          .then(toggleModal)
        }
      >
        <Form.Field
          name="imageURL"
          label="Url da imagem"
          render={TextInput}
          initialValue={initialValue}
        />
        <Button secondary full>
        Feito
        </Button>
      </Form>
    )}
  >
    <Text.Paragraph color="white" margin="15px 0">
      <FaImage />
      {' '}
      Editar Imagem
    </Text.Paragraph>
  </ModalProvider.Toggle>
);

const mapDispatchToProps = dispatch => ({
  editCourseImage: data => dispatch(actions.editCourseImage(data)),
});

export default connect(null, mapDispatchToProps)(EditCourseImage);
