import React, { Fragment } from 'react';
import { FaYoutube, FaEdit, FaBook } from 'react-icons/fa';
import {
  Text, InternalLink,
} from '../../../elements';
import { ModalProvider } from '../../../modules';

import {
  CourseModule,
  LessonList,
  LessonItem,
  EditButton,
} from '../CourseDetails.styles';

import EditLesson from '../EditLesson';
import EditActivity from '../EditActivity';

const CourseModulesList = ({
  courseId,
  alreadyJoin,
  isAdmin,
  lessons,
  activities,
}) => {
  const courseModules = lessons.concat(activities).reduce((acc, courseContent) => {
    if (!acc[courseContent.moduleName]) acc[courseContent.moduleName] = [];

    acc[courseContent.moduleName].push(courseContent);

    return acc;
  }, {});

  return (
    <div>
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
                                courseId={courseId}
                                activityId={lesson.id}
                                name={lesson.name}
                                questions={lesson.questions}
                                moduleName={lesson.moduleName}
                                onSubmit={toggleModal}
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
                                    courseId={courseId}
                                    lessonId={lesson.id}
                                    onSubmit={toggleModal}
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
    </div>
  );
};

CourseModulesList.defaultProps = {
  lessons: [],
  activities: [],
};

export default CourseModulesList;
