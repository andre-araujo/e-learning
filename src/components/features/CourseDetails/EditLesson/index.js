import { TextInput, Button } from '../../../elements';
import { Form } from '../../../modules';

const EditLesson = ({
  onSubmit,
  name,
  youtubeVideoId,
  moduleName,
}) => (
  <div>
    <Form name="create-course" onSubmit={onSubmit}>
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

export default EditLesson;
