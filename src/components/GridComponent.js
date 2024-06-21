import React from "react";
import "./GridComponentStyles.css";
import image_1 from "../assets/images/image_1.png";
import image_2 from "../assets/images/image_2.png";
import image_3 from "../assets/images/pellets.png";
import image_4 from "../assets/images/image_3.png";

const GridComponent = () => {
  return (
    <div className="row">
      <div className="box box--left">
        <div className="box__inner skeuomorphic-card-green">
          <a href="#">
            <img src={image_3} alt="" />
          </a>
        </div>
      </div>

      <div className="box box--right">
        <div className="box__inner skeuomorphic-card-green">
          <a href="#">
            <img src={image_1} alt="" />
          </a>
        </div>
      </div>

      <div className="box box--left box--small">
        <div className="box__inner skeuomorphic-card-green">
          <a href="#">
            <img src={image_2} alt="" />
          </a>
        </div>
      </div>

      <div className="box box--right box--small">
        <div className="box__inner skeuomorphic-card-green">
          <a href="#">
            <img src={image_4} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;


const skeuomorphicCardCSS = `
.skeuomorphic-card-green {
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to right, #d2e1d6, #bbc5c3, #9baea9);
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  transition: transform 0.2s, background 0.3s;
  color: #404040;
}

.skeuomorphic-card-green:hover {
  background: linear-gradient(to right, #bbc5c2, #9baea7, #d2e1d2);
  transform: scale(1.05);
}

.skeuomorphic-card-green:active {
  box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2), inset -3px -3px 8px rgba(255, 255, 255, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
}
`;

// Inject CSS styles for the green button
const styleSheetCardGreen = document.createElement("style");
styleSheetCardGreen.type = "text/css";
styleSheetCardGreen.innerText = skeuomorphicCardCSS;
document.head.appendChild(styleSheetCardGreen);
