import React from 'react';
import { string, bool, number } from 'prop-types';
import Link from 'next/link';
import moment from 'moment';

import {
  Container,
  Thumbnail,
  Content,
  Description,
  Joined,
} from './CourseResumeCard.styles';
import Text from '../../elements/Text';
import Rating from '../../features/Rating/Rating';

function CourseResumeCard({
  id,
  joined,
  name,
  instructorName,
  category,
  keyWords,
  updated_at,
  created_at,
  thumbnail,
  rating,
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
              {/* {name} */}
            </Text.Paragraph>
          </Description>

          <p>
            <Text.Small>
              Categoria:
              {' '}
              {category}
              {
                keyWords && ` | Palavras-chave: ${keyWords}`
              }
            </Text.Small>
          </p>

          <Text.Small margin="0 0 10px">
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
          <Rating.Stars rate={3} rating={rating} />
        </Content>
        {
          joined && (
            <Joined>
              <Text.Small>
                Inscrito
              </Text.Small>
            </Joined>
          )
        }
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
  joined: null,
  rating: null,
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
  joined: bool,
  rating: number,
};

export default CourseResumeCard;
