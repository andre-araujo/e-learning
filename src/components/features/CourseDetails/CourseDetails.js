import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import { FaYoutube, FaEdit, FaBook } from 'react-icons/fa';
import moment from 'moment';

import Hero from '../../modules/Hero';
import {
  Text, Button, Wrapper, InternalLink,
} from '../../elements';
import { ModalProvider } from '../../modules';

import EditCourse from './EditCourse';
import EditLesson from './EditLesson';
import EditActivity from './EditActivity';

import {
  CourseModule,
  LessonList,
  LessonItem,
  EditButton,
} from './CourseDetails.styles';
import { deepSelect } from '../../../lib/utils';

class CourseDetails extends Component {
  componentDidMount() {
    const { id, getCourseDetail } = this.props;

    getCourseDetail(id);
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
      courseDetail, authentication, joinCourse, createActivity, getCourseDetail,
    } = this.props;
    const data = courseDetail.payload || {};

    if (!data.id) return null;

    const courseModules = data.lessons.concat(data.activities).reduce((acc, courseContent) => {
      if (!acc[courseContent.moduleName]) acc[courseContent.moduleName] = [];

      acc[courseContent.moduleName].push(courseContent);

      return acc;
    }, {});

    if (!authentication.token) return null;

    const isAdmin = deepSelect(authentication, 'getUser.account.admin');
    const userCourses = deepSelect(authentication, 'getUser.account.subscriptions', []);
    const alreadyJoin = isAdmin || userCourses
      .find(subscription => data.id === subscription.courseId);

    return (
      <div>
        <Hero
          minHeight="100px"
          title={(
            <Fragment>
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
            </Fragment>
          )}
        >
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
                      onSubmit={() => getCourseDetail(data.id).then(toggleModal)}
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
                      onSubmit={formData => this.createLesson(formData).then(toggleModal)}
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
                      onSubmit={formData => createActivity({ ...formData, courseId: data.id })
                        .then(() => getCourseDetail(data.id))
                        .then(toggleModal)}
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
        </Hero>

        <Wrapper margin="40px auto">
          {
            !alreadyJoin && (
              <Text.Title>
                Inscreva-se e libere as aulas deste curso!
              </Text.Title>
            )
          }
          {
            alreadyJoin && !Object.keys(courseModules).length && (
              <Text.Title>
                Ainda não existem aulas para este curso.
              </Text.Title>
            )
          }
          {
            alreadyJoin && Object.keys(courseModules)
              .map((courseModuleName, index) => (
                <CourseModule key={courseModuleName}>
                  <Text.Subtitle>
                    {'Módulo '}
                    {index + 1}
                    {': '}
                    {courseModuleName}
                  </Text.Subtitle>
                  <LessonList>
                    {courseModules[courseModuleName].map(lesson => (
                      <LessonItem key={lesson.id}>
                        {
                          lesson.questions && (
                            <Fragment>
                              <FaBook />
                              <ModalProvider.Toggle
                                title={lesson.name}
                                fullScreen
                                render={({ toggleModal }) => (
                                  <EditActivity
                                    name={lesson.name}
                                    questions={lesson.questions}
                                    moduleName={lesson.moduleName}
                                    onSubmit={formData => createActivity({
                                      ...formData,
                                      courseId: data.id,
                                      activityId: lesson.id,
                                    })
                                      .then(() => getCourseDetail(data.id))
                                      .then(toggleModal)}
                                  />
                                )}
                              >
                                <InternalLink>
                                  {`Atividade: ${lesson.name}`}
                                </InternalLink>
                                {
                                  isAdmin && (
                                    <EditButton>
                                      <FaEdit />
                                    </EditButton>
                                  )
                                }
                              </ModalProvider.Toggle>
                            </Fragment>
                          )
                        }
                        {
                          lesson.youtubeVideoId && (
                            <Fragment>
                              <FaYoutube />
                              <ModalProvider.Toggle
                                title={lesson.name}
                                render={() => (
                                  <div>
                                    <iframe
                                      style={{
                                        width: 'calc(100vw - 80px)',
                                        minHeight: 'calc(70vh - 80px)',
                                      }}
                                      title="lesson"
                                      id="ytplayer"
                                      type="text/html"
                                      frameBorder="0"
                                      webkitallowfullscreen
                                      mozallowfullscreen
                                      allowFullScreen
                                      src={`http://www.youtube.com/embed/${lesson.youtubeVideoId}?autoplay=1`}
                                    />
                                  </div>
                                )}
                              >
                                <InternalLink>
                                  {lesson.name}
                                </InternalLink>
                              </ModalProvider.Toggle>
                              {
                                isAdmin && (
                                  <ModalProvider.Toggle
                                    title={lesson.name}
                                    render={({ toggleModal }) => (
                                      <EditLesson
                                        onSubmit={(formData) => {
                                          this.createLesson({ lessonId: lesson.id, ...formData })
                                            .then(toggleModal);
                                        }}
                                        name={lesson.name}
                                        youtubeVideoId={lesson.youtubeVideoId}
                                        moduleName={lesson.moduleName}
                                      />
                                    )}
                                  >
                                    <EditButton>
                                      <FaEdit />
                                    </EditButton>
                                  </ModalProvider.Toggle>
                                )
                              }
                            </Fragment>
                          )
                        }
                      </LessonItem>
                    ))}
                  </LessonList>
                </CourseModule>
              ))
          }
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
