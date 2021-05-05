import React from "react";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shoes from "../../Assets/Images/User/shoes1.png";
import shoes3 from "../../Assets/Images/User/shoes3.png";

// const setting = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
// };

const changeImageSrc = (img) => {
  document.querySelector(".product__img").src = img;
};

const Detail = () => {
  return (
    <>
      {/* <Header /> */}
      <div
        className="product-container"
        // style={{ backgroundImage: `url(../Images/User/bg.jpg)` }}
      >
        <div className="grid">
          <div className="grid__row">
            <div className="col-column-2">
              <div className="product">
                <ul className="product__thumbnail">
                  <li
                    className="thumbnail-item"
                    onMouseOver={() => {
                      changeImageSrc(shoes);
                    }}
                  >
                    <img
                      src={shoes}
                      alt="abc"
                      className="thumbnail-item__img"
                    />
                  </li>
                  <li
                    className="thumbnail-item"
                    onMouseOver={() => {
                      changeImageSrc(shoes3);
                    }}
                  >
                    <img
                      src={shoes3}
                      alt="abc"
                      className="thumbnail-item__img"
                    />
                  </li>
                </ul>
                {/* <div className="product__thumbnail">
                  <Slider {...setting}>
                    <div
                      className="thumbnail-item"
                      onMouseOver={() => {
                        changeImageSrc(shoes3);
                      }}
                    >
                      <img
                        src={shoes3}
                        alt="abc"
                        className="thumbnail-item__img"
                      />
                    </div>
                    <div
                      className="thumbnail-item"
                      onMouseOver={() => {
                        changeImageSrc(shoes3);
                      }}
                    >
                      <img
                        src={shoes3}
                        alt="abc"
                        className="thumbnail-item__img"
                      />
                    </div>

                    <div
                      className="thumbnail-item"
                      onMouseOver={() => {
                        changeImageSrc(shoes3);
                      }}
                    >
                      <img
                        src={shoes3}
                        alt="abc"
                        className="thumbnail-item__img"
                      />
                    </div>
                  </Slider>
                </div> */}
                <div className="product__imgBox">
                  <h2 className="product__name">Nike Air Zoom</h2>
                  <img src={shoes3} alt="a" className="product__img" />
                  <a href className="btn">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Detail;
