import React from "react";
import Slider from "react-slick";
import ExerciseCard from "./ExerciseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimilarExercises({ similarExercises }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} size="3x" color="#ED1C24" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} size="3x" color="#ED1C24" />
      </div>
    );
  }

  return (
    <div style={{ position: "relative", padding: "0 20px" }}>
      <h2 style={{ textAlign: "center", color: "#c4161c" }}>
        Related Body Part Exercises
      </h2>
      <Slider {...settings}>
        {similarExercises.map((exercise) => (
          <div key={exercise.id} style={{ padding: "10px" }}>
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimilarExercises;
