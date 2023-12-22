import React, { useEffect, useRef, useState } from "react";
import "./Home2.css";
import Icon1 from "./images/Icon1.png";
import Icon2 from "./images/Icon2.png";
import Icon3 from "./images/Icon3.png";
import slide1 from "./images/slide7.png";
import slide2 from "./images/slide8.png";
import slide3 from "./images/slide9.png";
import slide4 from "./images/slide5.png";
import slide5 from "./images/slide10.png";
import Wipro from "./images/wiproImg.png";
import Delloite from "./images/delloiteImg.png";
import Jio from "./images/jioImg.jpg";
import PlanetSpark from "./images/panetsparkImg.jfif";
import Tcs from "./images/tcs.png";
import Hcl from "./images/HclImage.png";
import Cognizant from "./images/cognizant.png";
import Capgemini from "./images/Capgemini.png";
import SliderImg from "./images/sliderImg.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPlus,
  faMinus,
  faCheck,
  faLongArrowAltRight,
  faCheckCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarCheck,
  faHourglass,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import LayoutImg from "./images/Septagon.svg";
import thirdcertificate from "./images/certificate3.svg";
import CountUp from "react-countup";
import prateek from "./images/prateekCapture.PNG";
import Mansi from "./images/mansiCapture.PNG";
import nilanshi from "./images/nilanshiCapture.PNG";
import avdhesh from "./images/avdheshCapture.PNG";
import rishbh from "./images/rishabhCapture.PNG";
import ashish from "./images/ashishCapture.PNG";
import amiya from "./images/amiyaCapture.PNG";
import manan from "./images/mananCapture.PNG";
import mithali from "./images/mithaliCapture.PNG";
import JoinImg from "./images/joinImg.png";
import Icon4 from "./images/Icon4.png";
import Icon5 from "./images/Icon5.png";
import Icon6 from "./images/Icon6.png";
import Icon7 from "./images/Icon7.png";
import WebTalentPdf from "./images/Web Talent Gravity.pdf";
import webtalentImgPdf from "./images/webtalentScreensort.PNG";
import DigitalGravityPdf from "./images/Digital Gravity Purposal__.pdf";
import digitalgravityImgPdf from "./images/digitalgravityScreensort.PNG";
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";
import Certificate1 from "./images/certificate1.svg";
import Trust from "./images/Trust.svg";
import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";

const faqs = [
  {
    id: 1,
    question: "Q1. How do i sign up for the project?",
    answer:
      "Visit the project website, click on Sign Up, complete the form with required details, and submit your registration information.",
  },
  {
    id: 2,
    question: "Q2. What thing that i should prepare before starting?",
    answer:
      "Outline goals, gather resources, plan, set milestones, form a team, and assign roles for project initiation.",
  },
  {
    id: 3,
    question: "Q3. Does my company need help for marketing advices?",
    answer:
      "Consider professional marketing advice to enhance your company's strategies, reach broader audiences, and drive growth.",
  },
];

function Home2() {
  useEffect(() => {
    ReactGA.initialize("UA-286352148-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   cityType: "",
  //   email: "",
  //   message: "",
  // });
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted data:", formData);

  //   setFormData({
  //     name: "",
  //     phoneNumber: "",
  //     cityType: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  // const formRef = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_fou94i9",
  //       "template_cido1v7",
  //       formRef.current,
  //       "jwkvXtuG3BVhmwYVq"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setFormData({
  //           name: "",
  //           phoneNumber: "",
  //           cityType: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    cityType: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize("UA-286352148-1");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);

    // Track form submission in Google Analytics
    ReactGA.event({
      category: "Form",
      action: "Submit",
      label: "Contact Form",
    });

    // Reset form fields after submission
    setFormData({
      name: "",
      phoneNumber: "",
      cityType: "",
      email: "",
      message: "",
    });
  };

  // emailjs
  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Submitted data:", formData);

    emailjs
      .sendForm(
        "service_fou94i9",
        "template_cido1v7",
        formRef.current,
        "jwkvXtuG3BVhmwYVq"
      )
      .then(
        (result) => {
          console.log(result.text);

          ReactGA.event({
            category: "Email",
            action: "Send",
            label: "Contact Form",
          });

          setFormData({
            name: "",
            phoneNumber: "",
            cityType: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const [formData1, setFormData1] = useState({
  //   name: "",
  //   phoneNumber: "",
  //   cityType: "",
  //   email: "",
  //   message: "",
  // });
  // const handleInputChange1 = (e) => {
  //   const { name, value } = e.target;
  //   setFormData1((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // const handleSubmit1 = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted data:", formData1);
  //   setFormData1({
  //     name: "",
  //     phoneNumber: "",
  //     cityType: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  // const form1Ref = useRef();
  // const sendEmail1 = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_fou94i9",
  //       "template_cido1v7",
  //       form1Ref.current,
  //       "jwkvXtuG3BVhmwYVq"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setFormData1({
  //           name: "",
  //           phoneNumber: "",
  //           cityType: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const [formData1, setFormData1] = useState({
    name: "",
    phoneNumber: "",
    cityType: "",
    email: "",
    message: "",
  });

  const form1Ref = useRef();

  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize("UA-286352148-1");
  }, []);

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData1);

    // Track form submission in Google Analytics
    ReactGA.event({
      category: "Form",
      action: "Submit",
      label: "Form 1",
    });

    // Reset form fields after submission
    setFormData1({
      name: "",
      phoneNumber: "",
      cityType: "",
      email: "",
      message: "",
    });
  };

  // emailjs
  const sendEmail1 = (e) => {
    e.preventDefault();

    console.log("Submitted data:", formData1);

    emailjs
      .sendForm(
        "service_fou94i9",
        "template_cido1v7",
        form1Ref.current,
        "jwkvXtuG3BVhmwYVq"
      )
      .then(
        (result) => {
          console.log(result.text);

          // Track successful email submission in Google Analytics
          ReactGA.event({
            category: "Email",
            action: "Send",
            label: "Form 1",
          });

          // Reset form fields after successful email submission
          setFormData1({
            name: "",
            phoneNumber: "",
            cityType: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // timer
  const [currentTime, setCurrentTime] = useState(new Date());
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (currentHour < 17 || (currentHour === 17 && currentMinute === 0)) {
      // Show today's time
      setDisplayTime(currentTime.toLocaleTimeString());
    } else {
      // Show next day's time
      const tomorrow = new Date(currentTime);
      tomorrow.setDate(currentTime.getDate() + 1);
      tomorrow.setHours(17, 0, 0, 0);
      setDisplayTime(tomorrow.toLocaleTimeString());
    }
  }, [currentTime]);

  const WebtechSlideSettings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const isSmallScreen1 = window.innerWidth <= 768;

  if (isSmallScreen1) {
    WebtechSlideSettings1.slidesToShow = 1;
  }

  const WebtechSlideSettings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const isSmallScreen2 = window.innerWidth <= 768;

  if (isSmallScreen2) {
    WebtechSlideSettings2.slidesToShow = 1;
  }

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* banner */}
      <div
        className="home-banner-section hidden md:block"
        id="home-banner-parallax"
      >
        <div className="main-banner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 px-5 md:px-20 lg:px-28">
          <div className="pt-10 md:pt-40 lg:col-span-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[60px]"
              style={{ fontFamily: "'Patua One" }}
            >
              Web<span className="text-[#00D3FF]">Talent</span>
            </h1>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white  mt-2"
              style={{ fontFamily: "'Patua One" }}
            >
              Gravity
            </h1>

            <p className="w-full w-60 sm:w-80 lg:w-[500px] mt-4 text-white mt-0 mb-0">
              Become a Highly Paid Prompt Engineer (Average Salary 17LPA)
            </p>
            <p className="w-full w-60 sm:w-80 lg:w-[500px] mt-4 text-white mt-0 mb-0">
              No Prior Technical or AI Knowledge Required
            </p>
            <p className="w-full w-60 sm:w-80 lg:w-[500px] mt-4 text-white mt-0 mb-0">
              GROW YOUR SALARY UPTO 3x
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-transparent border-2 rounded-[37px] p-2 mt-5"
            />

            <button
              type="submit"
              className="mt-4 md:mt-0 ml-2 lg:ml-5 bg-[#00D3FF] text-white rounded-[70px] px-5 py-2"
            >
              Let's Talk
            </button>
          </div>

          <div className=" pt-5 md:pt-20 lg:col-span-4">
            <div className="bg-white shadow-2xl p-5 rounded-[4px]">
              <h1 className="text-black text-xl text-center font-semibold">
                Get ready to Elevate Your
                <br />
                Career to it’s Peak
              </h1>
              <p className="text-[#767676] text-md mt-3">
                Kindly Fill your credential to start course counselling with
                you.
              </p>

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="radio"
                    id="metro"
                    className="w-3 h-3 inline-block align-middle"
                    name="cityType"
                    value="I am a College Student"
                    checked={formData.cityType === "I am a College Student"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="metro"
                    className="font-semibold inline-block align-middle ml-2"
                  >
                    I am a College Student
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="oth"
                    className="h-3 w-3 inline-block align-middle"
                    name="cityType"
                    value=" I’m a Company Employee"
                    checked={formData.cityType === " I’m a Company Employee"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="oth"
                    className="font-semibold inline-block align-middle ml-2"
                  >
                    I’m a Company Employee
                  </label>
                </div>

                <div className="mb-4 mt-3">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mb-4 mt-3">
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="message"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="1"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>

                <div className="flex justify-center mt-3">
                  <button
                    type="submit"
                    className="bg-[#00D3FF] text-white rounded-[70px] px-5 py-2"
                  >
                    Let's Talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="home-banner-section block md:hidden"
        id="home-banner-parallax"
      >
        <div className="main-banner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mx-5 md:px-20 lg:px-28">
          <div className="pt-20 md:pt-40 lg:col-span-8">
            <h1
              className="text-5xl md:text-5xl lg:text-6xl text-white leading-[60px] text-center"
              style={{ fontFamily: "'Patua One" }}
            >
              Web<span className="text-[#00D3FF]">Talent</span>
            </h1>

            <h1
              className="text-5xl md:text-5xl lg:text-6xl text-white  text-center"
              style={{ fontFamily: "'Patua One" }}
            >
              Gravity
            </h1>

            <p className="w-full sm:text-2xl lg:w-[500px] mt-6 text-white mt-0 mb-0 text-center">
              BECOME A HIGHLY PAID PROMPT <br></br>ENGINEER (AVERAGE SALARY
              17LPA)
            </p>
            <p className="w-full sm:text-2xl lg:w-[500px] mt-6 text-white mt-0 mb-0 text-center">
              NO PRIOR TECHNICAL OR AI <br></br> KNOWLEDGE REQUIRED
            </p>
            <p className="w-full sm:text-2xl lg:w-[500px] mt-6 text-white mt-0 mb-0 text-center">
              GROW YOUR SALARY UPTO 3x
            </p>

            <div className="mt-8 mr-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="bg-transparent border-2 w-full rounded-[8px] py-2 px-2"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className=" text-white rounded-[70px] py-2 w-full text-lg"
                style={{
                  background:
                    "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
                  transition: "all 0.5s",
                }}
              >
                Let's Talk
              </button>
            </div>
          </div>

          <div className=" md:pt-20 lg:col-span-4">
            <div className="bg-white shadow-2xl p-5 rounded-[4px]">
              <h1 className="text-black text-xl text-center font-semibold">
                Get ready to Elevate Your
                <br />
                Career to it’s Peak
              </h1>
              <p className="text-[#767676] text-md mt-3">
                Kindly Fill your credential to start course counselling with
                you.
              </p>

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="radio"
                    id="metro"
                    className="w-3 h-3 inline-block align-middle"
                    name="cityType"
                    value="I am a College Student"
                    checked={formData.cityType === "I am a College Student"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="metro"
                    className="font-semibold inline-block align-middle ml-2"
                  >
                    I am a College Student
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="oth"
                    className="h-3 w-3 inline-block align-middle"
                    name="cityType"
                    value=" I’m a Company Employee"
                    checked={formData.cityType === " I’m a Company Employee"}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="oth"
                    className="font-semibold inline-block align-middle ml-2"
                  >
                    I’m a Company Employee
                  </label>
                </div>

                <div className="mb-4 mt-3">
                  <label
                    className="block text-gray-700 text-md font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="mb-4 mt-3">
                  <label
                    className="block text-gray-700 text-sm font-bold"
                    htmlFor="message"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="1"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>

                <div className="flex justify-center mt-3">
                  <button
                    type="submit"
                    className="bg-[#00D3FF] text-white rounded-[70px] px-5 py-2"
                  >
                    Let's Talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* banner */}

      {/* 2-section */}
      <div className="bg-[#F7F8FC] pb-10">
        <div className="pt-10">
          <h1
            className="text-3xl md:text-3xl lg:text-4xl font-seibold  text-center"
            style={{ fontFamily: "Volkhov" }}
          >
            What Makes Us <span className="text-[#00D3FF]">Different?</span>
          </h1>
          <p className="text-[#666666] font-medium mt-4  text-center hidden md:block">
            Human analytics behaviour implementations using data science in form
            of<br></br> microfrontend and microservices to integrate in any
            proejcts which have some<br></br> common data set of users to
            perform automation of data marketing
          </p>
          <p className="text-[#666666] text-lg font-medium mt-4 block md:hidden px-5 md:px-0 text-center">
            Human analytics behaviour implementations using data science in form
            of microfrontend and microservices to integrate in any proejcts
            which have some common data set of users to perform automation of
            data marketing
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-12 mx-5 
      md:mx-20 lg:mx-32 xl:mx-48 pt-5"
        >
          <div className="bg-white shadow-2xl p-8">
            <img src={Icon1}></img>
            <h1 className="text-xl font-bold mt-5">CODING VETERAN</h1>
            <p className="text-[#666666] mt-4">
              With Web Talent Gravity, you will become job ready coding
              connoisseur.
            </p>
          </div>

          <div className="bg-white shadow-2xl  p-8">
            <img src={Icon2}></img>
            <h1 className="text-xl font-bold mt-5">WORTH OF MONEY</h1>
            <p className="text-[#666666] mt-4">
              You’ll get exclusive contents from our side which helps in build
              your career.
            </p>
          </div>

          <div className="bg-white shadow-2xl  p-8">
            <img src={Icon3}></img>
            <h1 className="text-xl font-bold mt-5">NO PRIOR KNOWLEDGE</h1>
            <p className="text-[#666666] mt-4">
              No Previous knowledge is required to understand our course
              curriculum.
            </p>
          </div>
        </div>
      </div>

      {/* 3-section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 mx-5 
      md:mx-20 lg:mx-32 xl:mx-48 mt-10 md:mt-20"
      >
        <div className="">
          <div className="grid grid-cols-1 gap-5">
            <div className="">
              <span className="text-3xl font-semibold">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  aria-hidden="true"
                  className="far fa-calendar-check text-[#00D3FF]"
                />
              </span>
              <span className="text-4xl md:text-3xl xl:text-4xl font-semibold pl-5">
                {displayTime}
              </span>
              <h1 className="text-sm text-[#666666] mt-2 pl-12">EveryDay</h1>
              <div className="border-b-2 border-gray-200 py-2"></div>
            </div>

            <div className="">
              <span className="text-3xl font-semibold">
                <FontAwesomeIcon
                  icon={faHourglass}
                  aria-hidden="true"
                  className="far fa-hourglass text-[#00D3FF]"
                />
              </span>
              <span className="text-4xl md:text-3xl xl:text-4xl font-semibold pl-5">
                45Mins
              </span>
              <h1 className="text-sm text-[#666666] mt-2 pl-12">
                Course Timing
              </h1>
              <div className="border-b-2 border-gray-200 py-2"></div>
            </div>

            <div className="">
              <span className="text-3xl font-semibold">
                <FontAwesomeIcon
                  icon={faVideo}
                  aria-hidden="true"
                  className="fas fa-video text-[#00D3FF]"
                />
              </span>
              <span className="text-4xl md:text-3xl xl:text-4xl font-semibold pl-5">
                Daily
              </span>
              <h1 className="text-sm text-[#666666] mt-2 pl-14">
                Live Session
              </h1>
              <div className="border-b-2 border-gray-200 py-2"></div>
            </div>

            <div className="">
              <span className="text-3xl font-semibold">
                <FontAwesomeIcon
                  icon={faClock}
                  aria-hidden="true"
                  className="far fa-clock text-[#00D3FF]"
                />
              </span>
              <span className="text-4xl md:text-3xl xl:text-4xl font-semibold pl-5">
                11:00 AM{" "}
              </span>
              <h1 className="text-sm text-[#666666] mt-2 pl-12">Onwards</h1>
            </div>
          </div>
        </div>

        <div className="">
          <iframe
            width="560"
            height="300"
            src="https://www.youtube.com/embed/qbenkczLfJk?si=zHlNv0WKHG2jI2go"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* 4-section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5  mx-5 lg:mx-20 xl:mx-28">
        <div className="md:col-span-5 mt-5 md:mt-0">
          <img src={LayoutImg} className="w-full lg:w-3/4"></img>
        </div>

        <div className="mt-5 md:mt-14 md:col-span-7 ">
          <div className="">
            <div className="hidden md:flex border-b border-gray-300">
              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 0
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(0)}
              >
                Frontend Dev.
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 1
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(1)}
              >
                Fullstack Dev.
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 2
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(2)}
              >
                Logical Training
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 3
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(3)}
              >
                Live Projects
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 4
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(4)}
              >
                AI Accelerate
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 5
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(5)}
              >
                Pro Training
              </div>

              <div
                className={`cursor-pointer flex-grow text-center py-2 ${
                  activeTab === 6
                    ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                    : "text-gray-500 font-semibold"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(6)}
              >
                Certificate
              </div>
            </div>
            <div className="md:hidden">
              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 0
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(0)}
              >
                Frontend Dev.
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 1
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(1)}
              >
                FullStack Dev.
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 2
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(2)}
              >
                Logical Training
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 3
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(3)}
              >
                Live Projects
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 4
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(4)}
              >
                AI Accelerate
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 5
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(5)}
              >
                Pro Training
              </div>

              <div
                className={`cursor-pointer border-t border-gray-300 text-center py-2 ${
                  activeTab === 6
                    ? "border-blue-500 text-blue-500"
                    : "text-gray-500"
                } hover:text-blue-500`}
                onClick={() => setActiveTab(6)}
              >
                Certificate
              </div>
            </div>
            <div className="mt-5">
              {activeTab === 0 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">FRONTEND TRAINING</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">Notes ,Live and Record</li>
                    <li className="font-medium">HTML, CSS, JavaScript</li>
                    <li className="font-medium">React & Redux</li>
                    <li className="font-medium">React Toolkit</li>
                    <li className="font-medium">ANTID</li>
                  </ul>
                </div>
              )}

              {activeTab === 1 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">FULLSTACK DEVELOPMENT</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">HTML, CSS, JavaScript</li>
                    <li className="font-medium">React, Redux</li>
                    <li className="font-medium">TailwindCss, Bootstrap</li>
                    <li className="font-medium">React Toolkit</li>
                    <li className="font-medium">
                      Django, Angular, NodeJs ,ExpressJs
                    </li>
                    <li className="font-medium">Git & GitHub</li>
                  </ul>
                </div>
              )}
              {activeTab === 2 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">LOGICAL TRAINING</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">Puzzle Solving</li>
                    <li className="font-medium">Deductive Reasoning</li>
                    <li className="font-medium">Pattern Recognition</li>
                    <li className="font-medium">Algorithm Design</li>
                  </ul>
                </div>
              )}

              {activeTab === 3 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">Live Project</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">Real World Application</li>
                    <li className="font-medium">Experienced Instroctor</li>
                    <li className="font-medium">Skill Enhancement</li>
                    <li className="font-medium">
                      Tackle Industry Level Problems
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 4 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">AI Accelerate</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">Free Course Certificate</li>
                    <li className="font-medium">Path Of Frontend Training</li>
                    <li className="font-medium">Professional Training</li>
                    <li className="font-medium">AI Powered Job Assitance</li>
                  </ul>
                </div>
              )}

              {activeTab === 5 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">Professional Training</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">Portfolio Creation</li>
                    <li className="font-medium">Resume Enhancer</li>
                    <li className="font-medium">GitHub Walkthrough</li>
                    <li className="font-medium">Enhance Linkedin</li>
                  </ul>
                </div>
              )}

              {activeTab === 6 && (
                <div className="border-2 border-gray-200 p-5 rounded-xl">
                  <h1 className="text-xl font-bold">Certificate & Placement</h1>
                  <ul className="ml-5 mt-4">
                    <li className="font-medium">
                      3 Month Experience Certificate
                    </li>
                    <li className="font-medium">AI Accelerate Certificate</li>
                    <li className="font-medium">Mock Interview</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* certificate */}
      <div className="justify-center mt-5 hidden md:block">
        <img
          src={thirdcertificate}
          className="certificate-banner-image"
          alt="certificates"
        ></img>
      </div>

      {/* counter */}
      <div
        className="hidden md:block font-extralight grid grid-cols-1 lg:grid-cols-4 items-center bg-opacity-85 py-6 px-16"
        style={{
          background:
            "linear-gradient(97.41deg, #0A4D68 8.68%, #05BFDB 140.45%)",
        }}
      >
        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-semibold text-6xl">
            <CountUp start={0} end={1000} duration={10} />
            <span>+</span>
          </h3>
          <h3 className="text-white font-bold text-lg">Learners</h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-semibold text-6xl">
            <CountUp start={0} end={50} duration={10} />
            <span>+</span>
          </h3>
          <h3 className="text-white font-bold text-lg">Hiring Partners</h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-semibold text-6xl">
            <CountUp start={0} end={18} duration={10} />
            <span>+</span>
          </h3>
          <h3 className="text-white font-bold text-lg">
            Live Concurrent Batches
          </h3>
        </div>

        <div className="p-4 rounded m-4 text-center">
          <h3 className="text-white font-semibold text-6xl">
            <CountUp start={0} end={5} duration={10} />
            <span>+</span>
          </h3>
          <h3 className="text-white font-bold text-lg">Campuses</h3>
        </div>
      </div>

      {/* small-device */}

      <div className="bg-[#0A4D68] mt-5 p-5 block md:hidden">
        <h1
          className="text-center text-white"
          style={{ fontFamily: "Volkhov" }}
        >
          Get Your Own<br></br> Blockchain-Enabled<br></br>
          <span className="text-[#05BFDB]"> Digital Certificate</span>
        </h1>

        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-4">
            <div>
              <h3 className="text-center text-lg text-white">
                <CountUp start={0} end={1000} duration={10} />
                <span>+</span>
              </h3>
              <h6 className="text-white text-sm text-center">Learners</h6>
            </div>

            <div>
              <h3 className="text-white text-lg text-center mt-8">
              <CountUp start={0} end={50} duration={10} />
            <span>+</span>
              </h3>
              <h3 className="text-white text-sm text-center">Hiring Partners</h3>
            </div>

            <div>
              <h3 className="text-white  text-lg text-center mt-8">
                <CountUp start={0} end={18} duration={10} />
                <span>+</span>
              </h3>
              <h3 className="text-white  text-sm  text-center"> Live Concurrent Batches</h3>
            </div>

            <div>
              <h3 className="text-white  text-lg text-center mt-8">
              <CountUp start={0} end={5} duration={10} />
            <span>+</span>
              </h3>
              <h3 className="text-white text-sm text-center">Campuses</h3>
            </div>
          </div>

          <div className="col-span-8">
            <div className="flex justify-center">
              <img src={Certificate1}></img>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <div className="flex justify-center">
                  <img src={one} className=""></img>
                </div>
                <h1 className=" text-sm text-white text-center">Trust</h1>
              </div>

              <div>
                <div className="flex justify-center">
                  <img src={two} className=""></img>
                </div>
                <h1 className=" text-sm text-white text-center">Transparency</h1>
              </div>

              <div>
                <div className="flex justify-center">
                  <img src={three} className=""></img>
                </div>
                <h1 className=" text-sm text-white text-center">Accountability</h1>
              </div>

              <div>
                <div className="flex justify-center">
                  <img src={four} className=""></img>
                </div>
                <h1 className=" text-sm text-white text-center">Social Media</h1>
              </div>
            </div>


          </div>

        </div>

      </div>

      {/* placed section */}
      <div className="mt-10 md:mt-20 mx-10 md:mx-20 lg:mx-28">
        <h1
          className=" font-bold  text-2xl md:text-4xl text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Our Recently Placed Students
          {/* <p className="border-t-8 border-[#262566] w-[50%]  md:w-[20%]  my-3 "></p> */}
        </h1>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-10 md:mx-20 lg:mx-28  mt-10 md:mt-16">
        <div>
          <div className="flex justify-center">
            <img src={prateek} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Prateek Mehta
            </h1>
            <i className="text-xl font-bold">IT Manager</i>
            <br />
            <i className="text-xl font-semibold">Placed in Wipro</i>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <img src={Mansi} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Mansi Singh
            </h1>
            <i className="text-xl font-bold">UI/UX Designer</i>
            <br />
            <i className="text-xl font-semibold">Placed in Deloitte</i>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <img src={nilanshi} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Nilanshi
            </h1>
            <i className="text-xl font-bold">Software Engineer</i>
            <br />
            <i className="text-xl font-semibold">Placed in Jio Tech</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={avdhesh} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Avdhesh Singh
            </h1>
            <i className="text-xl font-bold">Frontend Developer</i>
            <br />
            <i className="text-xl font-semibold">Placed in PlanetSpark</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={rishbh} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Rishabh Kumar
            </h1>
            <i className="text-xl font-bold">Software Engineer</i>
            <br />
            <i className="text-xl font-semibold">Placed in HCL</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={ashish} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Ashish Singh
            </h1>
            <i className="text-xl font-bold">Android Developer</i>
            <br />
            <i className="text-xl font-semibold">Placed in Capegemini</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={amiya} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Amiya Mishra
            </h1>
            <i className="text-xl font-bold">Software Engineer</i>
            <br />
            <i className="text-xl font-semibold">Placed in Cognizant</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={manan} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Manan Sharma
            </h1>
            <i className="text-xl font-bold">Web Designer</i>
            <br />
            <i className="text-xl font-semibold">Placed in TCS</i>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-center">
            <img src={mithali} />
          </div>
          <div className="text-center">
            <h1
              className="text-[#0984F5] font-semibold  text-xl md:text-3xl mt-4 "
              style={{ fontFamily: "Poppins" }}
            >
              Mithali Raj
            </h1>
            <i className="text-xl font-bold">FullStack Developer</i>
            <br />
            <i className="text-xl font-semibold">Placed in Wipro</i>
          </div>
        </div>
      </div> */}

      <div className="mx-5 md:mx-20 lg:mx-40 xl:mx-64 mt-5 md:mt-10 hidden md:block">
        <Slider {...WebtechSlideSettings2}>
          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={prateek} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Prateek Mehta
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    IT Manager
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Wipro} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={Mansi} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Mansi Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    UI/UX Designer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Delloite} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={nilanshi} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Nilanshi
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Jio} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={avdhesh} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Avdhesh Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Frontend Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={PlanetSpark} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={rishbh} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Rishabh Kumar
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Hcl} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={ashish} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Ashish Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Android Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Capgemini} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={amiya} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Amiya Mishra
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Cognizant} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={manan} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Manan Sharma
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    Web Designer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Tcs} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 xl:gap-20">
                <div className="md:col-span-3 pt-10">
                  <img src={mithali} className="rounded-[4px]" />
                </div>

                <div className="md:col-span-6 pt-10 ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Mithali Raj
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-5">
                    FullStack Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-4"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Wipro} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="mx-5 md:mx-20 lg:mx-40 xl:mx-64 mt-5 md:mt-10 block md:hidden">
        <Slider {...WebtechSlideSettings2}>
          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5 ">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={prateek}
                    className="rounded-[4px] w-[130px] h-auto"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Prateek Mehta
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    IT Manager
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Wipro} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5 ">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img src={Mansi} className="rounded-[4px] w-[150px] h-auto" />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Mansi Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    UI/UX Designer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Delloite} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={nilanshi}
                    className="rounded-[4px] w-[140px] h-auto"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Nilanshi
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Jio} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={avdhesh}
                    className="rounded-[4px] w-[150px] h-auto"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Avdhesh Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Frontend Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={PlanetSpark} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={rishbh}
                    className="rounded-[4px] w-[120px] h-auto"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Rishabh Kumar
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Hcl} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1  gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={ashish}
                    className="rounded-[4px] w-[150px] h-auto"
                  />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Ashish Singh
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Android Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Capgemini} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img src={amiya} className="rounded-[4px] w-[150px] h-auto" />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Amiya Mishra
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Software Engineer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Cognizant} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 flex justify-center">
                  <img src={manan} className="rounded-[4px] w-[150px] h-auto" />
                </div>

                <div className="md:col-span-6 flex flex-col items-center justify-center ">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Manan Sharma
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    Web Designer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Tcs} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <div className="rounded-2xl border-4 border-[#00D3FF] px-5 pb-3">
              <div className="grid grid-cols-1 gap-5">
                <div className="md:col-span-3 pt-5 flex justify-center">
                  <img
                    src={mithali}
                    className="rounded-[4px] w-[130px] h-auto"
                  />
                </div>

                <div className="md:col-span-6  flex flex-col items-center justify-center">
                  <h1
                    className="text-black font-semibold text-xl md:text-3xl lg:text-4xl xl:text-5xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Mithali Raj
                  </h1>
                  <i className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#525252] mt-2">
                    FullStack Developer
                  </i>
                  <p
                    className="text-[#00D3FF] font-bold text-xl md:text-2xl mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Placed In
                  </p>
                  <img src={Wipro} alt="" className="w-[100px] h-auto" />
                </div>

                <div className="md:col-span-3 hidden md:block">
                  <div className=" flex justify-end">
                    <img
                      src={SliderImg}
                      alt=""
                      className=" h-auto md:h-[300px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* join-section */}
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-5 mx-5 
      md:mx-20 lg:mx-32 xl:mx-48 mt-5 md:mt-10"
      >
        <div className="md:col-span-7">
          <h1 className="hidden md:block" style={{ fontFamily: "Poppins" }}>
            Why Join This<br></br> Course?
          </h1>

          <h1
            className="block md:hidden text-4xl text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Why Join This<br></br> Course?
          </h1>

          <p className="text-[#666666] hidden md:block">
            #1 🇮🇳 We're highest rated program in the world 🌎<br></br>{" "}
            Accelerate your career at price of less than a chai ☕!
          </p>

          <p className="text-[#666666] blockmd:hidden text-center mt-4">
            #1 🇮🇳 We're highest rated program in the world 🌎 Accelerate your
            career at price of less than a chai ☕!
          </p>

          <img src={JoinImg} className="w-full md:w-3/4 mt-5"></img>
        </div>

        <div className="md:col-span-5">
          <div className="flex">
            <div>
              <img src={Icon4} className="w-3/4"></img>
            </div>
            <div>
              <h1 className="text-xl">Experienced Trainer</h1>
              <h1 className="text-sm text-[#666666] mt-3">
                10+ years Experienced Trainer
              </h1>
            </div>
          </div>

          <div className="flex mt-8">
            <div>
              <img src={Icon5} className="w-3/4"></img>
            </div>
            <div>
              <h1 className="text-xl">Placement Assistance</h1>
              <h1 className="text-sm text-[#666666] mt-3">
                100% Surety to stand a place at a company
              </h1>
            </div>
          </div>

          <div className="flex mt-8">
            <div>
              <img src={Icon6} className="w-3/4"></img>
            </div>
            <div>
              <h1 className="text-xl">Free Study Material</h1>
              <h1 className="text-sm text-[#666666] mt-3">
                Free Easy to understand notes that will<br></br>
                helps you to brush up the key points
              </h1>
            </div>
          </div>

          <div className="flex mt-8">
            <div>
              <img src={Icon7} className="w-3/4"></img>
            </div>
            <div>
              <h1 className="text-xl">Skills as per iT industry</h1>
              <h1 className="text-sm text-[#666666] mt-3">
                Get Industry Ready Work Experience here
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* elevator */}

      <div className="elevator-image mx-0 md:mx-20 lg:mx-32 xl:mx-48 mt-10 p-5 md:p-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <h1 className="text-white">Elevate your Career Today!</h1>
          </div>

          <div>
            <p className="text-white">
              Ready to transform your digital career? Let's create magic
              together! Signup our services now!
            </p>
            <button
              type="submit"
              className="mt-4 bg-white text-black font-bold rounded-[70px] px-5 py-2"
            >
              SignUp
            </button>
          </div>
        </div> */}
        <div className="">
          <h1 className="hidden md:block text-white text-center">
            Elevate your Career Today!
          </h1>
          <h1 className="block md:hidden text-4xl text-white text-center">
            Elevate your <br></br>Career Today!
          </h1>
          <p className="text-white text-center mt-2">
            Fillup form to start your journey with us
          </p>

          <div className="bg-white shadow-2xl p-5 rounded-[4px] mx-auto max-w-md">
            <h1 className="text-black text-xl text-center font-semibold">
              Get ready to Elevate Your
              <br />
              Career to its Peak
            </h1>
            <p className="text-[#767676] text-md mt-3">
              Kindly Fill your credential to start course counselling with you.
            </p>

            <form ref={form1Ref} onSubmit={sendEmail1}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData1.name}
                  onChange={handleInputChange1}
                  className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-md font-semibold"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formData1.phoneNumber}
                  onChange={handleInputChange1}
                  className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>

              <div className="mt-3">
                <input
                  type="radio"
                  id="metro"
                  className="w-3 h-3 inline-block align-middle"
                  name="cityType"
                  value="I am a College Student"
                  checked={formData1.cityType === "I am a College Student"}
                  onChange={handleInputChange1}
                />
                <label
                  htmlFor="metro"
                  className="font-semibold inline-block align-middle ml-2"
                >
                  I am a College Student
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="oth"
                  className="h-3 w-3 inline-block align-middle"
                  name="cityType"
                  value=" I’m a Company Employee"
                  checked={formData1.cityType === " I’m a Company Employee"}
                  onChange={handleInputChange1}
                />
                <label
                  htmlFor="oth"
                  className="font-semibold inline-block align-middle ml-2"
                >
                  I’m a Company Employee
                </label>
              </div>

              <div className="mb-4 mt-3">
                <label
                  className="block text-gray-700 text-md font-semibold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData1.email}
                  onChange={handleInputChange1}
                  className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                  required
                />
              </div>

              <div className="mb-4 mt-3">
                <label
                  className="block text-gray-700 text-sm font-bold"
                  htmlFor="message"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="1"
                  value={formData1.message}
                  onChange={handleInputChange1}
                  className="border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  className="bg-[#00D3FF] text-white rounded-[70px] px-5 py-2"
                >
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* client-review */}

      <div className="mt-10 md:mt-14 mx-5 md:mx-20 lg:mx-32 xl:mx-48">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-seibold">
          What Our Client Said About Us
        </h1>
      </div>

      <div className="mx-5 md:mx-20 lg:mx-32 xl:mx-48 mt-5 md:mt-10">
        <Slider {...WebtechSlideSettings1}>
          <div className="p-4">
            <div className="bg-[#3461FF] p-4 rounded-2xl">
              <div className="flex">
                <img src={slide1} className="rounded-[50%]" />
                <h1 className="text-2xl font-semibold pl-6 mt-4 text-white">
                  Palak Sharma
                </h1>
              </div>
              <p className="text-white mt-4">
                They provide quality of service based on customer needs.
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-[#F8F9FF] p-4 rounded-2xl">
              <div className="flex ">
                <img src={slide2} className="rounded-[50%]" />
                <h1 className="text-2xl font-semibold pl-6 mt-4">
                  Tarang Tripathi
                </h1>
              </div>
              <p className="text-[#64666C] mt-4">
                I recently had the opportunity to work with this company.
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-[#F8F9FF] p-4 rounded-2xl">
              <div className="flex ">
                <img src={slide3} className="rounded-[50%]" />
                <h1 className="text-2xl font-semibold pl-6 mt-4">
                  Kunal Singh
                </h1>
              </div>
              <p className="text-[#64666C] mt-4">
                They are very sharp and have a high quality team members.
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-[#F8F9FF] p-4 rounded-2xl">
              <div className="flex ">
                <img src={slide4} className="rounded-[50%]" />
                <h1 className="text-2xl font-semibold pl-6 mt-4">
                  Anshika dubey
                </h1>
              </div>
              <p className="text-[#64666C] mt-4">
                Good company and quality products delivery on times.
              </p>
            </div>
          </div>

          <div className="p-4">
            <div className="bg-[#F8F9FF] p-4 rounded-2xl">
              <div className="flex ">
                <img src={slide5} className="rounded-[50%] w-[80px] h-auto" />
                <h1 className="text-2xl font-semibold pl-6 mt-4">Ayush Jain</h1>
              </div>

              <p className="text-[#64666C] mt-4">
                Placed in Programmics Technology through Graviton.
              </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* pdf */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-5 md:mt-10 mx-5 md:mx-20 lg:mx-28">
        <div className="hidden md:block">
          <iframe
            src={WebTalentPdf + "#toolbar=0"}
            title="PDF Viewer 1"
            width="100%"
            height="400px"
            frameBorder="0"
          />
          <div className="mt-10 text-center">
            <a
              href={WebTalentPdf}
              download="WebTalentBouchers.pdf"
              className="bg-gradient-to-r from-teal-800 to-blue-500 px-5 py-2
              rounded-[4px] text-white font-semibold text-xl"
            >
              <button>Download PDF</button>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <iframe
            src={DigitalGravityPdf + "#toolbar=0"}
            title="PDF Viewer 1"
            width="100%"
            height="400px"
            frameBorder="0"
          />
          <div className="mt-10 text-center">
            <a
              href={DigitalGravityPdf}
              download="DigitalGravityBouchers.pdf"
              className="bg-gradient-to-r from-teal-800 to-blue-500 px-5 py-2
              rounded-[4px] text-white font-semibold text-xl"
            >
              <button>Download PDF</button>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-20 lg:mx-28">
        <div className="block md:hidden">
          <img src={webtalentImgPdf}></img>

          <div className="mt-10 text-center">
            <a
              href={WebTalentPdf}
              download="WebTalentBouchers.pdf"
              className="bg-gradient-to-r from-teal-800 to-blue-500 px-5 py-2
              rounded-[4px] text-white font-semibold text-xl"
            >
              <button>Download PDF</button>
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <img src={digitalgravityImgPdf}></img>

          <div className="mt-10 text-center">
            <a
              href={DigitalGravityPdf}
              download="DigitalGravityBouchers.pdf"
              className="bg-gradient-to-r from-teal-800 to-blue-500 px-5 py-2
               rounded-[4px] text-white font-semibold text-xl"
            >
              <button>Download PDF</button>
            </a>
          </div>
        </div>
      </div>

      {/* faq's */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 mx-5 
      md:mx-20 lg:mx-32 xl:mx-48 mt-10 md:mt-20 mb-10 md:mb-20"
      >
        <div className="">
          {faqs.map((faq) => (
            <div key={faq.id} className="p-4">
              <div
                className="border-2 border-gray-300 p-4 cursor-pointer flex justify-between items-center rounded-[4px]"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <span className="text-gray-500">
                  {openId === faq.id ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </span>
              </div>
              {openId === faq.id && (
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="">
          <h1
            className="hidden md:block font-medium text-xl md:text-3xl"
            style={{ fontFamily: "Poppins" }}
          >
            How We Can Help You?
          </h1>

          <h1
            className=" text-3xl block md:hidden text-center"
            style={{ fontFamily: "Poppins" }}
          >
            How We Can Help You?
          </h1>

          <p className="text-md text-[#666666] mt-3 hidden md:block">
            Follow our newsletter. We will regulary update<br></br> our latest
            project and availability.
          </p>

          <p className="text-md text-[#666666] mt-3 block md:hidden text-center">
            Follow our newsletter. We will regulary update our latest project
            and availability.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="bg-[#FAFAFA] border-2 rounded-[37px] p-2 mt-5 hidden md:block"
          />

          <div className="mr-5">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="bg-[#FAFAFA] border-2 w-full rounded-[37px] p-2 mt-5 block md:hidden"
            />
          </div>

          <button
            type="submit"
            className="hidden md:block mt-4 md:mt-0 ml-2 lg:ml-5 bg-[#3461FF] text-white rounded-[70px] px-5 py-2"
          >
            Let's Talk
          </button>

          <div>
            <button
              type="submit"
              className="block md:hidden mt-4 w-full text-white text-lg rounded-[70px] py-2"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
                transition: "all 0.5s",
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
