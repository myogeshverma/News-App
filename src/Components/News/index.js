import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { newsFetchData } from "../../actions/news";
import news from "../../data";
class NewsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchData(news);
  }

  render() {
    var that = this;
    if (this.props.isLoading == false) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <Row>
          <Col s={10} offset={"s1"}>
            <div>
              {this.props.news.map(function(item, index) {
                if (item.status == 1) {
                  return (
                    <div key={index}>
                      <Col s={4} key={index} style={{ minHeight: 431 }}>
                        <Card
                          key={index}
                          header={
                            <CardTitle image={item.urlToImage} key={index}>
                              {item.title.substring(0, 40)}
                            </CardTitle>
                          }
                          actions={[
                            <a
                              to="/"
                              onClick={that.props.navigateTo.bind(
                                that,
                                "/newsdetail/" + item.id
                              )}
                              key={index}
                            >
                              View More Details
                            </a>
                          ]}
                        >
                          <p key={index}>
                            {item.description.substring(0, 150)}
                          </p>
                        </Card>
                      </Col>
                    </div>
                  );
                }
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
    news: state.news,
    isLoading: state.newsIsLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: location => {
    dispatch(push(location));
  },
  fetchData: data => dispatch(newsFetchData(data))
});

export default connect(state, mapDispatchToProps)(NewsList);
