import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";
import { connect } from "react-redux";
class NewsDetail extends Component {
  render() {
    var that = this;
    var isLoading = this.props.news.newsIsLoading;
    var newsfilter = null;
    if (isLoading) {
      newsfilter = this.props.news.news.filter(function(item) {
        return item.id == that.props.match.params.id;
      });
    }
    return (
      <div>
        <Row>
          <Col s={10} offset={"s1"}>
            {newsfilter &&
              newsfilter.map(function(item, index) {
                return (
                  <div key={index}>
                    <Card header={<CardTitle image={item.urlToImage} />}>
                      <h2>{item.title}</h2>
                      <h6>
                        <i>Published on:- {item.publishedAt}</i>
                      </h6>
                      <br />
                      <p>{item.description}</p>
                    </Card>
                  </div>
                );
              })}
          </Col>
        </Row>
      </div>
    );
  }
}

const state = (state, ownProps = {}) => {
  return {
    news: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(state, mapDispatchToProps)(NewsDetail);
