import React from 'react';
import { string } from 'prop-types';
import Link from 'next/link';
import moment from 'moment';

import {
  Container,
  Thumbnail,
  Content,
  Description,
} from './CourseResumeCard.styles';
import Text from '../../elements/Text';

function CourseResumeCard({
  id,
  name,
  instructorName,
  category,
  keyWords,
  updated_at,
  created_at,
  thumbnail,
}) {
  const formatedCreatedAt = moment(created_at).format('DD/MM/YYYY');
  const formatedUpdatedAt = moment(updated_at).format('DD/MM/YYYY');
  return (
    <Link href={{
      pathname: '/courses',
      query: { id },
    }}
    >
      <Container>
        <Thumbnail src={thumbnail} />
        <Content>
          <Text.Subtitle tag="h1" margin="0 0 0.5em 0">
            {name}
          </Text.Subtitle>

          <Description>
            <Text.Paragraph margin="0 0 0.5em 0">
              sdadsaads
            </Text.Paragraph>
          </Description>

          <p>
            <Text.Small>
              Categoria:
              {' '}
              {category}
              {' | '}
              Palavras-chave:
              {' '}
              {keyWords}
            </Text.Small>
          </p>

          <Text.Small>
          Instrutor:
            {' '}
            {instructorName}
            {' '}
            -
            {' '}
            {formatedCreatedAt}
            {
              formatedCreatedAt !== formatedUpdatedAt
            && ` - última atualização: ${formatedUpdatedAt}`
            }
          </Text.Small>
        </Content>
      </Container>
    </Link>
  );
}

CourseResumeCard.defaultProps = {
  id: null,
  name: null,
  instructorName: null,
  category: null,
  keyWords: null,
  updated_at: null,
  created_at: null,
  thumbnail: null,
};

CourseResumeCard.propTypes = {
  id: string,
  name: string,
  instructorName: string,
  category: string,
  keyWords: string,
  updated_at: string,
  created_at: string,
  thumbnail: string,
};

export default CourseResumeCard;
