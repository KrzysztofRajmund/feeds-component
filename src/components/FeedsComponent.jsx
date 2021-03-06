import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFeeds } from "../actions/fetchAction";

//assets
import ArrowIcon from "../assets/arrowicon.png";

const FeedsComponent = ({ getFeeds, feeds }) => {
  console.log(feeds, "feeds");

  useEffect(() => {
    getFeeds();
  }, []);

  const dateHandler = (d) => {
    console.log(d.getDay(), "d");
    let months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Pażdziernik",
      "Listopad",
      "Grudzień"
    ];
    let days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota"
    ];

    let dayOfWeek = days[d.getDay()];
    let day = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${dayOfWeek}, ${day} ${month} ${year}`;
  };

  const mappedFeeds = feeds.map((feed, index) => (
    <Col key={index} className="col-12 col-md-6  text-center">
      <Card>
        <Card.Text className="cardTitle">{feed.title}</Card.Text>
        <Card.Img src={feed.thumb} alt="img" width="100%" height="auto" />
        <Card.ImgOverlay className="col-12">
          <Col className="cardOverlay col-12 text-center">
            <p className="cardTitleTwo">{feed.excerpt}</p>
            <a href={feed.url} target="_blank">
              <button className="cardButton">
                Sprawdź
                <img
                  src={ArrowIcon}
                  alt="arrow img"
                  height="25px"
                  width="auto"
                />
              </button>
            </a>

            <Card.Text className="textDate">
              <small> {dateHandler(new Date(feed.date))}</small>
            </Card.Text>
          </Col>
        </Card.ImgOverlay>
      </Card>
    </Col>
  ));

  return (
    // <div className="feedsContainer">
      <Container>
        <Row className="mainRowFeeds col-12">
          <Col className="col-12">
            <div className="titlePosts">Posts</div>
          </Col>
          {mappedFeeds}
        </Row>
      </Container>
    // </div>
  );
};

FeedsComponent.propTypes = {
  getFeeds: PropTypes.func.isRequired,
  feeds: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  feeds: state.fetchReducer.feeds,
});

export default connect(mapStateToProps, { getFeeds })(FeedsComponent);
