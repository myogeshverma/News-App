import React, { Component } from "react";
import UpdateNews from "../UpdateNews";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import {
  newsFetchData,
  newsAdd,
  newsStatus,
  newsDelete
} from "../../actions/news";
import news from "../../data";
import { Row, Col, Card, Input, Button } from "react-materialize";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        id: "",
        title: "",
        urlToImage: "",
        description: "",
        publishedAt: new Date().toString(),
        status: 1
      },
      allNews: this.props.news
    };

    this.statusNews = this.statusNews.bind(this);
    this.deleteNews = this.deleteNews.bind(this);
    this.formHandle = this.formHandle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ allNews: nextProps.news });
  }
  componentDidMount() {
    this.props.fetchData(news);
    this.setState({ allNews: this.props.news });
  }

  statusNews(index) {
    newsStatus(index, this.props.news);
    this.setState({ allNews: this.props.news });
  }

  deleteNews(index, data) {
    newsDelete(index, this.props.news);
    this.setState({ allNews: this.props.news });
  }

  formHandle(e) {
    var tmp_state = this.state.formData;
    tmp_state[e.target.name] = e.target.value;
    this.setState({
      formData: tmp_state
    });
  }
  onSubmit() {
    var tmp_state = this.state.formData;
    tmp_state.id = Math.floor(Math.random() * 10000 + 1);
    newsAdd(tmp_state, this.props.news);
    this.setState({ allNews: this.props.news });
    alert("New News Added");
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={10} offset={"s1"}>
            <Card
              className="grey lighten-4"
              textClassName="black-text"
              title="Add News"
            >
              <Row>
                <Input
                  name="title"
                  value={this.state.title}
                  type="text"
                  s={12}
                  label="News Title"
                  onChange={this.formHandle}
                />
                <Input
                  name="urlToImage"
                  value={this.state.urlToImage}
                  type="text"
                  s={12}
                  label="News Image Url"
                  onChange={this.formHandle}
                />
                <Input
                  name="description"
                  value={this.state.description}
                  type="textarea"
                  s={12}
                  label="News Description"
                  onChange={this.formHandle}
                />
                <Button waves="light" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Row>
            </Card>
          </Col>
        </Row>
        <UpdateNews
          newsData={this.state.allNews}
          statusNews={this.statusNews}
          deleteNews={this.deleteNews}
        />
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
  fetchData: data => dispatch(newsFetchData(data)),
  newsAdd: (newsData, data) => dispatch(newsAdd(newsData, data)),
  newsStatus: (id, data) => dispatch(newsAdd(id, data)),
  newsDelete: (id, data) => dispatch(newsDelete(id, data))
});

export default connect(state, mapDispatchToProps)(Dashboard);
