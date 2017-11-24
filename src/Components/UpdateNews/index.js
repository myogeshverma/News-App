import React, { Component } from "react";
import { Row, Col, Card, Button, Table, Icon } from "react-materialize";

class UpdateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ news: nextProps });
  }
  render() {
    var that = this;
    return (
      <div>
        <Row>
          <Col s={10} offset={"s1"}>
            <Card
              className="grey lighten-4"
              textClassName="black-text"
              title="Update News"
            >
              <Table>
                <thead>
                  <tr>
                    <th data-field="id">Title</th>
                    <th data-field="name">Edit</th>
                    <th data-field="price">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.news &&
                    this.state.news.newsData.map(function(item, index) {
                      return (
                        <tr key={index}>
                          <td>{item.title}</td>
                          <td>
                            <Button
                              className="blue darken-3"
                              waves="light"
                              onClick={id => that.props.statusNews(index)}
                            >
                              {item.status == "0" ? "Publish" : "Unpublish"}
                              <Icon left>remove_red_eye</Icon>
                            </Button>
                          </td>
                          <td>
                            <Button
                              className="red darken-3"
                              waves="light"
                              onClick={id => that.props.deleteNews(index)}
                            >
                              Delete<Icon left>delete</Icon>
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateNews;
