import React, { useRef } from "react";
import "./StudentReview.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Frame 37 (2).png";

const StudentReviews = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      rating: 5,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 4,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 3,
      name: "Jane Doe",
      rating: 5,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 4,
      name: "Jane Doe",
      rating: 4,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 5,
      name: "Jane Doe",
      rating: 4,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 6,
      name: "Jane Doe",
      rating: 5,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
    {
      id: 7,
      name: "Jane Doe",
      rating: 5,
      comment:
        "Become Certified Upon the completion of your learning with us, you get awarded a ln industry relevant certificate that is accredited)",
      image: "./Frame 37 (2).png",
      course: "ui/ux designer",
    },
  ];

  return (
    <div className="review-section">
      <div className="reviews" ref={scrollContainer}>
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="profile">
              <img
                src={review.image}
                alt={`${review.name}'s profile`}
                className="profile-pic"
              />
              <div className="rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
                <p className="comment">{review.comment}</p>
                <p className="namec">{review.name}</p>
                <p className="courser">{review.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="scroll-button" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="dots">
          {reviews.map((review, index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
        <button className="scroll-button" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default StudentReviews;
