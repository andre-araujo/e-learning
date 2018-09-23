import React, { Component } from 'react';

import {
  Text, Wrapper,
} from '../../elements';
import ReportItem from './ReportItem';

class UsersReport extends Component {
  componentDidMount() {
    const {
      getUsersReport,
    } = this.props;

    getUsersReport();
  }

  parseReports = (usersReportData) => {
    const reports = Array.isArray(usersReportData) ? usersReportData : [];
    const reportList = {};

    for (const report of reports) {
      if (!reportList[report.accountId.id]) {
        reportList[report.accountId.id] = {
          name: report.accountId.name,
          email: report.accountId.email,
          courses: [],
        };
      }

      reportList[report.accountId.id].courses.push({
        name: report.courseId.name,
        completion: `${parseInt(report.finishedLessons.length / report.courseId.lessons.length * 100, 10)}%`,
        finishedActivities: report.finishedActivities.map(finishedActivity => ({
          grade: `${parseInt(
            finishedActivity.correctAnswers
            / finishedActivity.activityId.questions.length * 100, 10,
          )}%`,
          name: finishedActivity.activityId.name,
        })),
        certified: report.certified,
      });
    }

    return Object.keys(reportList).map(key => reportList[key]);
  }

  render() {
    const {
      usersReport,
    } = this.props;

    const reports = this.parseReports(usersReport.payload);
    return (
      <Wrapper>
        <Text.Title margin="40px 0">
          Relatório de usuários
        </Text.Title>

        <ul>
          {
            reports.map(report => (
              <li>
                <ReportItem
                  name={report.name}
                  email={report.email}
                  courses={report.courses}
                />
              </li>
            ))
          }
        </ul>
      </Wrapper>
    );
  }
}

export default UsersReport;
