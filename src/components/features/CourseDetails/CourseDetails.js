import React, { Component } from 'react';
import { string } from 'prop-types';
import { FaYoutube, FaEdit } from 'react-icons/fa';

import Hero from '../../modules/Hero';
import {
  Text, Button, Wrapper, InternalLink,
} from '../../elements';
import { ModalProvider } from '../../modules';
import EditLesson from './EditLesson';

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
    const { courseDetail, authentication } = this.props;
    const data = courseDetail.payload || {};

    if (!data.id) return null;

    const courseModules = data.lessons.reduce((acc, courseContent) => {
      if (!acc[courseContent.moduleName]) acc[courseContent.moduleName] = [];

      acc[courseContent.moduleName].push(courseContent);

      return acc;
    }, {});

    if (!authentication.token) return null;
    const isAdmin = deepSelect(authentication, 'getUser.account.admin');

    return (
      <div>
        <Hero title={data.name} minHeight="100px">
          {
            isAdmin && (
              <ModalProvider.Toggle
                title="Informações da aula"
                render={({ toggleModal }) => (
                  <EditLesson
                    onSubmit={formData => this.createLesson(formData).then(toggleModal)}
                  />
                )}
              >
                <Button secondary>
                  Criar aula
                </Button>
              </ModalProvider.Toggle>
            )
          }
        </Hero>

        <Wrapper margin="40px auto">
          {
            !Object.keys(courseModules).length && (
              <Text.Title>
              Ainda não existem aulas para este curso.
              </Text.Title>
            )
          }
          {
            Object.keys(courseModules)
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
