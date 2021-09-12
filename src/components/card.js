import { useState, useEffect } from "react";
import "./stylesheets/card.css";
import blackHeart from "./images/blackHeart.png";
import redHeart from "./images/redHeart.png";

const ImageCard = (props) => {
  let [image, setImage] = useState(props.image);
  let [title, setTitle] = useState(props.title);
  let [description, setDescription] = useState(props.description);

  let [date, setDate] = useState(props.date);
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false);
  if (like === false) {
    return (
      <div id="cardContainer">
        <h1>{title}</h1>
        <div id="imageHolder">
          <img src={image} alt={title} id="cardImage" />
        </div>
        <div id="detailsHolder">
          <h3 id="date">{date}</h3>

          <p id="description">{description}</p>
        </div>
        <div id="userActionHolder">
          <ul id="cardListActions">
            <li
              className="userAction"
              id="NotlikedButton"
              onClick={() => setLike((like = true))}
            >
              {" "}
              <img className="likeImage" src={blackHeart} alt="Like" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (like === true) {
    return (
      <div id="cardContainer">
        <h1>{title}</h1>
        <div id="imageHolder">
          <img src={image} alt={title} id="cardImage" />
        </div>
        <div id="detailsHolder">
          <h3 id="date">{date}</h3>

          <p id="description">{description}</p>
        </div>
        <div id="userActionHolder">
          <ul id="cardListActions">
            <li
              className="userAction"
              id="likedButton"
              onClick={() => setLike((like = false))}
            >
              {" "}
              <img className="likeImage" src={redHeart} alt="Liked Icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
export { ImageCard };
