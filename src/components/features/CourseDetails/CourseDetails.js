import React, { Component, Fragment } from 'react';
import { Flex, Box } from 'grid-styled';
import { string } from 'prop-types';
import moment from 'moment';

import Hero from '../../modules/Hero';
import {
  Text, Button, Wrapper,
} from '../../elements';
import { ModalProvider } from '../../modules';

import { Actions } from './CourseDetails.styles';

import EditCourse from './EditCourse';
import EditLesson from './EditLesson';
import EditActivity from './EditActivity';
import CourseModules from './CourseModules';
import EditCourseImage from './EditCourseImage';

import CourseFiles from '../CourseFiles';
import Certificate from '../Certificate';
import Rating from '../Rating';

import { deepSelect } from '../../../lib/utils';

class CourseDetails extends Component {
  componentDidMount() {
    const { id, getCourseDetail, getUserSubscription } = this.props;

    getCourseDetail(id);
    getUserSubscription(id);
  }

  createLesson = async (formData) => {
    const { getCourseDetail, createLesson, id } = this.props;
    await createLesson({
      courseId: id,
      ...formData,
    });

    await getCourseDetail(id);
  }

  render() {
    const {
      courseDetail, authentication, joinCourse,
    } = this.props;
    const data = courseDetail.payload || {};

    if (!data.id || !authentication.token) return null;

    const isAdmin = deepSelect(authentication, 'getUser.account.admin');
    const userCourses = deepSelect(authentication, 'getUser.account.subscriptions', []);
    const alreadyJoin = isAdmin || userCourses
      .find(subscription => data.id === subscription.courseId);

    return (
      <div>
        <Hero
          imageUrl={data.imageURL}
          minHeight="100px"
          title={(
            <Fragment>
              {
                isAdmin && (
                  <EditCourseImage
                    courseId={data.id}
                    initialValue={data.imageURL}
                  />
                )
              }
              <Text.Title color="white" margin="0 0 30px">
                {data.name}
              </Text.Title>
              <Text.Paragraph color="white" margin="0 0 5px">
                {'Instrutor: '}
                {data.instructorName}
              </Text.Paragraph>
              <Text.Paragraph color="white">
                {'Última atualização: '}
                {moment(data.updated_at).format('DD/MM/YYYY')}
              </Text.Paragraph>
              <div>
                <Rating
                  isAdmin={isAdmin}
                  courseId={data.id}
                />
              </div>
            </Fragment>
          )}
        >
          <Actions>
            {
              !isAdmin && !alreadyJoin && (
                <Button secondary onClick={() => joinCourse(data.id)}>
                Inscrever
                </Button>
              )
            }
            {
              isAdmin && (
                <Fragment>
                  <ModalProvider.Toggle
                    title="Editar curso"
                    render={({ toggleModal }) => (
                      <EditCourse
                        courseId={data.id}
                        name={data.name}
                        instructorName={data.instructorName}
                        category={data.category}
                        keyWords={data.keyWords}
                        onSubmit={toggleModal}
                      />
                    )}
                  >
                    <Button secondary>
                    Editar curso
                    </Button>
                  </ModalProvider.Toggle>
                  <ModalProvider.Toggle
                    title="Informações da aula"
                    render={({ toggleModal }) => (
                      <EditLesson
                        courseId={data.id}
                        onSubmit={toggleModal}
                      />
                    )}
                  >
                    <Button secondary margin="0 15px">
                    Criar aula
                    </Button>
                  </ModalProvider.Toggle>
                  <ModalProvider.Toggle
                    title="Criar Atividade"
                    fullScreen
                    render={({ toggleModal }) => (
                      <EditActivity
                        courseId={data.id}
                        onSubmit={toggleModal}
                      />
                    )}
                  >
                    <Button secondary>
                    Criar Atividade
                    </Button>
                  </ModalProvider.Toggle>
                </Fragment>
              )
            }
          </Actions>
        </Hero>

        <Wrapper margin="40px auto">
          <Flex flexDirection={['column', 'row']}>
            <Box width={[1, 3 / 4]} mr={[0, 4]}>
              <CourseModules
                lessons={data.lessons}
                activities={data.activities}
                courseId={data.id}
                alreadyJoin={alreadyJoin}
                isAdmin={isAdmin}
              />
            </Box>
            {
              (isAdmin || alreadyJoin) && (
                <Box width={[1, 1 / 4]}>
                  <CourseFiles
                    courseId={data.id}
                    alreadyJoin={alreadyJoin}
                    isAdmin={isAdmin}
                  />
                  <Certificate
                    courseId={data.id}
                    alreadyJoin={alreadyJoin}
                    isAdmin={isAdmin}
                  />
                </Box>
              )
            }
          </Flex>
        </Wrapper>
      </div>
    );
  }
}

CourseDetails.defaultProps = {
  id: '',
};

CourseDetails.propTypes = {
  id: string,
};

export default CourseDetails;
