import {
  Text,
} from '../../../elements';

import {
  Section,
  Card,
  CardItem,
} from './styles';

const ReportItem = ({
  name,
  email,
  courses = [],
}) => (
  <Section>
    <Text.Subtitle margin="0 0 10px">
      Usuário:
    </Text.Subtitle>
    <Text.Paragraph margin="0 0 10px">
      {`Nome: ${name}`}
    </Text.Paragraph>
    <Text.Paragraph margin="0 0 30px">
      {`Email: ${email}`}
    </Text.Paragraph>

    <Text.Subtitle margin="10px 0">
      Cursos Inscrito:
    </Text.Subtitle>

    <ul>
      {
        courses.map(course => (
          <li>
            <Card>
              <Text.Subtitle margin="0 0 15px">
                {course.name}
              </Text.Subtitle>
              <CardItem>
                <Text.Small>
                  {`Vídeos assistidos: ${isNaN(course.completion) ? 0 : course.completion}`}
                </Text.Small>
              </CardItem>
              {
                course.finishedActivities.map(activity => (
                  <CardItem>
                    <Text.Small>
                      {`Aproveitamento na atividade "${activity.name}": ${activity.grade}`}
                    </Text.Small>
                  </CardItem>
                ))
              }
              <CardItem>
                <Text.Small>
                  {`Certificado: ${course.certified ? 'Sim' : 'Não'}`}
                </Text.Small>
              </CardItem>
            </Card>
          </li>
        ))
      }
    </ul>
  </Section>
);

export default ReportItem;
