import React, { Fragment } from 'react';
import {
  FaYoutube, FaEdit, FaBook, FaCheck,
} from 'react-icons/fa';
import { connect } from 'react-redux';

import { actions } from '../../../../lib';

import {
  Text, InternalLink,
} from '../../../elements';
import { ModalProvider } from '../../../modules';

import {
  CourseModule,
  LessonList,
  LessonItem,
  RightIcon,
} from '../CourseDetails.styles';

import EditLesson from '../EditLesson';
import EditActivity from '../EditActivity';
import { deepSelect } from '../../../../lib/utils';

const getUserGrade = (
  userActivities = [],
  activity = {
    questions: [],
  },
) => {
  const userActivityData = userActivities
    .find(userActivity => userActivity.activityId === activity.id);

  if (!userActivityData) return '--';

  const percentage = userActivityData.correctAnswers / activity.questions.length * 100;
  return `Acertos: ${parseInt(percentage, 10)}%`;
};

const CourseModulesList = ({
  courseId,
  alreadyJoin,
  isAdmin,
  lessons,
  activities,
  userSubscription,
  submitUserLesson,
}) => {
  const userLessons = deepSelect(userSubscription, 'payload.finishedLessons', []);
  const userActivities = deepSelect(userSubscription, 'payload.finishedActivities', []);

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
                                <RightIcon>
                                  <FaEdit />
                                </RightIcon>
                              )
                            }
                          </ModalProvider.Toggle>
                          {
                            !isAdmin && (
                              <RightIcon>
                                <b>
                                  {getUserGrade(userActivities, lesson)}
                                </b>
                              </RightIcon>
                            )
                          }
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
                                  src={`//www.youtube.com/embed/${lesson.youtubeVideoId}?autoplay=1`}
                                />
                              </div>
                            )}
                          >
                            <InternalLink
                              onClick={() => submitUserLesson({
                                lessonId: lesson.id,
                                courseId,
                              })}
                            >
                              {lesson.name}
                            </InternalLink>
                          </ModalProvider.Toggle>
                          {
                            !isAdmin
                            && userLessons.find(userLesson => userLesson.lessonId === lesson.id)
                            && (
                              <RightIcon color="lawngreen">
                                <FaCheck />
                              </RightIcon>
                            )
                          }
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
                                <RightIcon>
                                  <FaEdit />
                                </RightIcon>
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


const mapStateToProps = ({ userSubscription }) => ({
  userSubscription,
});

const mapDispatchToProps = dispatch => ({
  submitUserLesson: data => dispatch(actions.submitUserLesson(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseModulesList);
