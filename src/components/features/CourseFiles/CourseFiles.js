import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';
import moment from 'moment';

import Hero from '../../modules/Hero';
import {
  FileInput, Text, Button, Wrapper, InternalLink,
} from '../../elements';
import { ModalProvider } from '../../modules';


import { deepSelect } from '../../../lib/utils';

class CourseFiles extends Component {
  state = {
    file: null,
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      courseId,
      fileUpload,
    } = this.props;
    const {
      file,
    } = this.state;

    fileUpload({
      courseId,
      file,
    });
  }

  render() {
    const {
      isAdmin,
      courseDetail,
    } = this.props;
    const {
      file,
    } = this.state;

    const courseFiles = deepSelect(courseDetail, 'payload.files', []);

    return (
      <div>
        <Text.Subtitle tag="h1" margin="0 0 10px">
          Arquivos:
        </Text.Subtitle>

        <hr />

        {
          isAdmin && (
            <form onSubmit={this.onSubmit}>
              <FileInput name="coursemedia" onChange={inputFile => this.setState({ file: inputFile })} />
              <Button full disabled={!file}>
                Adicionar Mídia
              </Button>
            </form>
          )
        }

        <ol>
          {
            courseFiles.map((courseFile, index) => (
              <li key={courseFile._id}>
                <a href={courseFile.url} target="_blank" rel="noopener noreferrer">
                  <Text.Small margin="20px 0" style={{ display: 'block' }}>
                    {`${`${index}`} - ${courseFile.name}`}
                  </Text.Small>
                </a>

              </li>
            ))
          }
          {
            !courseFiles.length && (
              <li>
                <Text.Small margin="20px 0" style={{ display: 'block' }}>
                  Ainda não existem arquivos para este curso
                </Text.Small>
              </li>
            )
          }
        </ol>
      </div>
    );
  }
}

export default CourseFiles;
