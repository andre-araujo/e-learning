import React, { Component } from 'react';
import { Flex } from 'grid-styled';

import {
  Text,
} from '../../elements';

import { deepSelect } from '../../../lib/utils';

import {
  Container,
  Star,
  StarContainer,
} from './Rating.styles';

class Rating extends Component {
  static Stars = ({
    rating,
    onSubmit,
    editable,
  }) => (
    <StarContainer
      editable={editable}
    >
      {
        [...Array(5).keys()].map(key => (
          <Star
            key={key}
            active={rating >= key + 1}
            onClick={onSubmit ? (() => onSubmit(key + 1)) : null}
          />
        ))
      }
    </StarContainer>
  )

  onSubmit = (rating) => {
    const {
      courseId,
      submitRating,
    } = this.props;

    submitRating({ courseId, rating });
  }

  render() {
    const {
      isAdmin,
      userSubscription,
    } = this.props;

    const rating = deepSelect(userSubscription, 'payload.rating', null);

    return isAdmin ? null : (
      <Container>
        <hr />
        <Flex alignItems="center">
          <Rating.Stars editable rating={rating} onSubmit={this.onSubmit} />
          {
            !rating && (
              <Text.Small color="white" margin="0 10px 0">
                Avalie este curso
              </Text.Small>
            )
          }
        </Flex>
      </Container>
    );
  }
}

export default Rating;
