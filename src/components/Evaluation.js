import React from "react";

const arrayOfStars = n => {
  let count = 0;
  let stars = [];
  while (count < 5) {
    if (count < Math.floor(n)) stars.push(1);
    else if (n % 1 === 0.5 && count === Math.floor(n)) stars.push(0.5);
    else stars.push(0);
    count++;
  }
  return stars;
};

const Evaluation = ({ number }) => (
  <>
    {arrayOfStars(number).map((x, i) => {
      if (x === 1) return <i key={i} className="fa fa-star" />;
      else if (x === 0.5) return <i key={i} className="fas fa-star-half-alt" />;
      else return <i key={i} className="far fa-star" />;
    })}
  </>
);

export default Evaluation;
