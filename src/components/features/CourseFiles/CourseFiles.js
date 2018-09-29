import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

import {
  FileInput, Text, Button,
} from '../../elements';

import { deepSelect } from '../../../lib/utils';

import { FileItem, Container } from './CourseFiles.styles';

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

    this.setState({
      file: null,
    });

    fileUpload({
      courseId,
      file,
    });
  }

  onDelete = ({
    courseId,
    fileId,
  }) => {
    const {
      fileDelete,
    } = this.props;

    fileDelete({
      courseId,
      fileId,
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
    const courseId = deepSelect(courseDetail, 'payload.id');

    return (
      <Container>
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
              <FileItem key={courseFile._id}>
                {
                  isAdmin && (
                    <button
                      type="button"
                      onClick={() => this.onDelete({
                        courseId,
                        fileId: courseFile._id,
                      })}
                    >
                      <FaTimes />
                    </button>
                  )
                }
                <a href={courseFile.url} target="_blank" rel="noopener noreferrer">
                  <Text.Small style={{ display: 'block' }}>
                    {`${`${index}`} - ${courseFile.name}`}
                  </Text.Small>
                </a>

              </FileItem>
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
      </Container>
    );
  }
}

export default CourseFiles;
