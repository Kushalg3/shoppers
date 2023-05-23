import Slider from "react-slick";
import {
  bannerImg,
  sliderImgOne,
  sliderImgTwo,
  sliderImgThree,
  sliderImgFour,
} from "../public/assets/images";
import Image from "next/image";
import BannerText from "./BannerText";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute right-5 bottom-40" onClick={onClick}>
      <BsArrowRightCircle className="w-12 h-8 cursor-pointer" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute left-5 bottom-40 z-10" onClick={onClick}>
      <BsArrowLeftCircle className="w-12 h-8 cursor-pointer" />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul className="relative -top-10 bg-gray-700 bg-opacity-30 rounded-full h-auto w-auto inline-flex items-center justify-center">
          {dots}
        </ul>
      </div>
    ),

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          {/* Slider One */}

          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="slider image"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-5 flex flex-col gap-3 text-white"
              title="Spring fashion in bloom"
              description="New trends & styles to turn heads anytime, on any budget."
              btnText="Shop now"
            />
          </div>

          {/* Slider Two */}

          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt="slider image"
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-5 flex flex-col gap-3 text-black"
              title="Upto 65% off"
              description="New savings every week! Hurry to score low, low prices."
              btnText="Shop now"
            />
          </div>

          {/* Slider Three */}

          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt="slider image"
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-5 flex flex-col gap-3 text-blue"
              title="You can save $1,300+ a year!*"
              description="Start saving with free delivery, Walmart Reqards & more"
              btnText="Try free"
            />
          </div>

          {/* Slider Four */}

          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt="slider image"
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-5 flex flex-col gap-3 text-black"
              title="Upto 65% off"
              description="New savings every week! Hurry to score low, low prices."
              btnText="Shop now"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash Pick of the day
          </h2>
          <p className="text-base text-zinc-600 underline underline-offset-2">
            view all
          </p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="flash sale" />
        <ButtonPrimary btnText="Option" />
        <p className="text-lg text-black font-semibold">From $199.90</p>
        <p className="text-base text-gray-500 -mt-1">uhomepro TV Stand for Living Room...</p>
      </div>
    </div>
  );
};

export default Banner;
