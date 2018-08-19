import { TextInput, Wrapper, Button } from '../../elements';
import { Form } from '../../modules';

function CourseCreation({
  authentication,
  requestCreateCourse,
}) {
  if (!authentication.getUser.account) return null;

  return (
    <Wrapper>
      <Form name="create-course" onSubmit={requestCreateCourse}>
        <Form.Field
          name="name"
          label="Nome do curso"
          render={TextInput}
        />
        <Form.Field
          name="instructorName"
          label="Nome do instrutor"
          initialValue={authentication.getUser.account && authentication.getUser.account.name}
          render={TextInput}
        />
        <Form.Field
          name="category"
          label="Categoria"
          render={TextInput}
        />
        <Form.Field
          name="keyWords"
          label="Palavras-chave"
          render={TextInput}
        />
        <Button type="submit">
          Criar curso
        </Button>
      </Form>
    </Wrapper>
  );
}

export default CourseCreation;
