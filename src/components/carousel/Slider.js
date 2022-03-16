import { Carousel } from "antd";
import "./Slider.css";

function Slider() {
  const contentStyle = {
    height: "560px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "orange",
  };
  return (
    <Carousel autoplay>
      <div>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
}

export default Slider;
