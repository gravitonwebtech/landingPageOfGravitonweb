import React, { useRef, useState } from "react";
import { MdLocationOn, MdCall, MdOutlineMailOutline } from "react-icons/md";
import "./Home1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import whychoosimg from "./images/whychoose.svg";
import slide1 from "./images/slide7.png";
import slide2 from "./images/slide8.png";
import slide3 from "./images/slide9.png";
import slide4 from "./images/slide5.png";
import slide5 from "./images/slide10.png";
import secondheading from "./images/secondheading2.svg";
import thirdcertificate from "./images/certificate3.svg";
import trainingthirdImage from "./images/trainingthirdImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus,faCheck,faLongArrowAltRight,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import emailjs from '@emailjs/browser';

export default function Home1() {
  const phoneNumber = "+919415174046";
  const [values, setValue] = useState({
    name: "",
    textarea: "",
    email: "",
    phone: "",
  });

  function inputHandle(event) {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValue(newObj);
  }
  
  const [errors, setErrors] = useState({});

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fou94i9",
        "template_cido1v7",
        form.current,
        "jwkvXtuG3BVhmwYVq"
      )
 
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

     const whatsappUrl = `https://wa.me/${phoneNumber}`;
     window.open(whatsappUrl, "_blank");
     resetForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with form submission

      resetForm();
    } else {
      // Update errors state with validation errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone number (should be 10 digits)";
    }

    if (!formData.textarea.trim()) {
      errors.textarea = "Message is required";
    }     

    return errors;
  };

  const resetForm = () => {
    setValue({
      name: "",
      email: "",
      phone: "",
      textarea: "",
    });
    setErrors({});
  };

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

  const [accordionItems, setAccordionItems] = useState([
    {
      title: "why choose Gravitonweb  Technologies ?",
      content:
        "Gravitonweb Technologies is committed to helping its students to reach their goals and their training experiences, by providing the innovative surroundings and faculties.",
      isOpen: false,
    },
    {
      title: "Get Started ?",
      content:
        "On our all-inclusive tech-driven trading platform by signing up and logging in to your broking account.",
      isOpen: false,
    },
    {
      title: "Factor In The Risk ?",
      content:
        "Stay shielded from market volatality and turbulences by adding in your specific risk appetite into the trading algorithm equation and our systems will take care of the rest.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      }))
    );
  };
  return (
    <>
      <div
        className="elementor elementor-34120 elementor-location-single post-12492 page type-page status-publish has-post-thumbnail lp-category-ai-tools-retro ast-article-single remove-featured-img-padding"
        data-elementor-id="34120"
        data-elementor-post-type="elementor_library"
        data-elementor-type="single-page"
      >
        <div
          className="elementor-element elementor-element-1d04c83b e-flex e-con-boxed e-con e-parent"
          data-core-v316-plus="true"
          data-element_type="container"
          data-id="1d04c83b"
          data-settings='{"background_background":"classic","container_type":"flex","content_width":"boxed"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-73748537 e-flex e-con-boxed e-con e-parent"
              data-core-v316-plus="true"
              data-element_type="container"
              data-id="73748537"
              data-settings='{"container_type":"flex","content_width":"boxed"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-def4128 elementor-widget elementor-widget-heading"
                  data-element_type="widget"
                  data-id="def4128"
                  data-widget_type="heading.default"
                >
                  <div className="flex justify-center">
                    <img
                      src={whychoosimg}
                      className="w-[100%] md:w-3/4 h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-28e0a9b elementor-widget elementor-widget-heading"
              data-element_type="widget"
              data-id="28e0a9b"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title elementor-size-default">
                  Human analytics behaviour implementations using data science
                  in form of microfrontend and microservices to integrate in any
                  proejcts which have some common data set of users to perform
                  automation of data marketing
                </h4>{" "}
              </div>
            </div>

            <div
              className="elementor-element elementor-element-5b83e9d8 elementor-mobile-align-center elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-element_type="widget"
              data-id="5b83e9d8"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                {" "}
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                    <FontAwesomeIcon icon={faCheck} /> 
                    </span>
                    <span className="elementor-icon-list-text">
                      Become a highly paid prompt engineer (Average Salary
                      17LPA)
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                    <FontAwesomeIcon icon={faCheck} /> 
                    </span>
                    <span className="elementor-icon-list-text">
                      No prior Technical or AI knowledge required
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                    <FontAwesomeIcon icon={faCheck} /> 
                    </span>
                    <span className="elementor-icon-list-text">
                      Save upto 2 Hours Everyday
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                    <FontAwesomeIcon icon={faCheck} /> 
                    </span>
                    <span className="elementor-icon-list-text">
                      Grow your salary upto 3X
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2-part */}

            <div
              className="elementor-element elementor-element-efb5660 e-flex e-con-boxed e-con e-parent"
              data-core-v316-plus="true"
              data-element_type="container"
              data-id="efb5660"
              data-settings='{"container_type":"flex","content_width":"boxed"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-784e9534 e-con-full e-flex e-con e-parent"
                  data-core-v316-plus="true"
                  data-element_type="container"
                  data-id="784e9534"
                  data-settings='{"content_width":"full","container_type":"flex"}'
                >
                  <div
                    className="elementor-element elementor-element-1414598f e-con-full e-flex e-con e-parent"
                    data-core-v316-plus="true"
                    data-element_type="container"
                    data-id="1414598f"
                    data-settings='{"content_width":"full","background_background":"classic","container_type":"flex"}'
                  >
                    <div
                      className="elementor-element elementor-element-5da74196 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="5da74196"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items elementor-inline-items">
                          <li className="elementor-icon-list-item elementor-inline-item">
                            <span className="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                className="far fa-calendar-check"
                              />{" "}
                            </span>
                            <span className="elementor-icon-list-text">
                              On November 26, 2023
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-7f107895 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="7f107895"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items elementor-inline-items">
                          <li className="elementor-icon-list-item elementor-inline-item">
                            <span className="elementor-icon-list-icon">
                              <i
                                aria-hidden="true"
                                className="far fa-hourglass"
                              />{" "}
                            </span>
                            <span className="elementor-icon-list-text">
                              3+ Hours
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-2bae90d4 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="2bae90d4"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items elementor-inline-items">
                          <li className="elementor-icon-list-item elementor-inline-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="fas fa-video" />{" "}
                            </span>
                            <span className="elementor-icon-list-text">
                              Live Session
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="elementor-element elementor-element-385bc16 elementor-icon-list--layout-inline elementor-align-left elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                      data-element_type="widget"
                      data-id="385bc16"
                      data-widget_type="icon-list.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="elementor-icon-list-items elementor-inline-items">
                          <li className="elementor-icon-list-item elementor-inline-item">
                            <span className="elementor-icon-list-icon">
                              <i aria-hidden="true" className="far fa-clock" />{" "}
                            </span>
                            <span className="elementor-icon-list-text">
                              11:00 am Onwards
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="elementor-element elementor-element-4e9bd7a9 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-element_type="widget"
                    data-id="4e9bd7a9"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            Frontend Dev: Create awesome websites!
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            Logical Training: Boost problem-solving skills.
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            Live Projects: Hands-on experience.
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            AI Accelerate: Explore AI in web development.
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            Pro Training: Learn from experts.
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            Certificate: Get validated!
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faLongArrowAltRight} />
                          </span>
                          <span className="elementor-icon-list-text">
                            100% Placement: Kickstart your
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-d01881d e-flex e-con-boxed e-con e-parent"
                  data-core-v316-plus="true"
                  data-element_type="container"
                  data-id="d01881d"
                  data-settings='{"container_type":"flex","content_width":"boxed"}'
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-5a9332bf elementor-widget__width-inherit elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image"
                      data-element_type="widget"
                      data-id="5a9332bf"
                      data-widget_type="theme-post-featured-image.default"
                    >
                      <div>
                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/qbenkczLfJk?si=zHlNv0WKHG2jI2go"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-12cfefcb e-con-full e-flex e-con e-parent"
          data-core-v316-plus="true"
          data-element_type="container"
          data-id="12cfefcb"
          data-settings='{"content_width":"full","background_background":"classic","container_type":"flex"}'
        >
          <div
            className="elementor-element elementor-element-73be4078 e-con-full e-flex e-con e-parent"
            data-core-v316-plus="true"
            data-element_type="container"
            data-id="73be4078"
            data-settings='{"background_background":"classic","content_width":"full","container_type":"flex"}'
          >
            <div
              className="elementor-element elementor-element-457cd71 e-con-full e-flex e-con e-parent"
              data-core-v316-plus="true"
              data-element_type="container"
              data-id="457cd71"
              data-settings='{"content_width":"full","container_type":"flex"}'
            >
              <div
                className="elementor-element elementor-element-767156a e-con-full e-flex e-con e-parent"
                data-core-v316-plus="true"
                data-element_type="container"
                data-id="767156a"
                data-settings='{"content_width":"full","background_background":"classic","container_type":"flex"}'
              >
                <div
                  className="elementor-element elementor-element-545ca707 elementor-widget elementor-widget-image"
                  data-element_type="widget"
                  data-id="545ca707"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <picture className="attachment-large size-large wp-image-34670">
                      <source
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        srcSet="https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-1024x251.png.webp 1024w, https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-300x74.png.webp 300w, https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-768x188.png.webp 768w, https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-1536x377.png.webp 1536w, https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-2048x502.png.webp 2048w"
                        type="image/webp"
                      />
                      <img
                        alt=""
                        height="251"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        src="https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-1024x251.png"
                        srcSet="https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-1024x251.png  1024w,https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-300x74.png  300w,https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-768x188.png  768w,https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-1536x377.png  1536w,https://be10x.in/wp-content/uploads/2023/08/Trustpilot_Logo-2048x502.png  2048w"
                        width="1024"
                      />
                    </picture>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-92fb5e5 elementor-widget elementor-widget-heading"
                  data-element_type="widget"
                  data-id="92fb5e5"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">
                      TrustScore 4.7 | 1,196 reviews
                    </p>{" "}
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-582c6669 elementor--star-style-star_unicode elementor-star-rating--align-center elementor-widget elementor-widget-star-rating"
                  data-element_type="widget"
                  data-id="582c6669"
                  data-widget_type="star-rating.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-star-rating__wrapper">
                      <div
                        className="elementor-star-rating"
                        itemProp="reviewRating"
                        itemScope
                        itemType="http://schema.org/Rating"
                        title="4.7/5"
                      >
                        <i className="elementor-star-full">☆</i>
                        <i className="elementor-star-full">☆</i>
                        <i className="elementor-star-full">☆</i>
                        <i className="elementor-star-full">☆</i>
                        <i className="elementor-star-7">☆</i>{" "}
                        <span
                          className="elementor-screen-only"
                          itemProp="ratingValue"
                        >
                          4.7/5
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-7d87b016 elementor-widget elementor-widget-heading"
                  data-element_type="widget"
                  data-id="7d87b016"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      EXCELLENT
                    </h2>{" "}
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-4791031d e-con-full e-flex e-con e-parent"
                data-core-v316-plus="true"
                data-element_type="container"
                data-id="4791031d"
                data-settings='{"content_width":"full","background_background":"classic","container_type":"flex"}'
              >
                <div
                  className="elementor-element elementor-element-3d767c52 elementor-widget__width-initial elementor-view-default elementor-widget elementor-widget-icon"
                  data-element_type="widget"
                  data-id="3d767c52"
                  data-widget_type="icon.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-wrapper">
                      <div className="elementor-icon">
                        <svg
                          id="Layer_1"
                          style={{
                            enableBackground: "new 0 0 255.2 80.3",
                          }}
                          viewBox="0 0 255.2 80.3"
                          x="0px"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          y="0px"
                        >
                          <g id="XMLID_11_">
                            <path
                              className="st0"
                              d="M31.9,28.6v8.6h20.5c-0.6,4.8-2.2,8.3-4.7,10.8c-3,3-7.7,6.3-15.8,6.3 c-12.6,0-22.5-10.2-22.5-22.8S19.2,8.6,31.9,8.6c6.8,0,11.8,2.7,15.5,6.1l6-6C48.3,3.8,41.4,0,31.9,0C14.6,0,0,14.1,0,31.4 s14.6,31.4,31.9,31.4c9.4,0,16.4-3.1,21.9-8.8c5.7-5.7,7.4-13.6,7.4-20.1c0-2-0.1-3.8-0.5-5.4H31.9z"
                              id="XMLID_10_"
                            />
                            <path
                              className="st1"
                              d="M86.9,21.6c-11.2,0-20.4,8.5-20.4,20.3c0,11.7,9.1,20.3,20.4,20.3s20.4-8.6,20.4-20.3 C107.2,30.1,98.1,21.6,86.9,21.6z M86.9,54.2c-6.1,0-11.4-5.1-11.4-12.3c0-7.3,5.3-12.3,11.4-12.3c6.1,0,11.4,5,11.4,12.3 C98.3,49.1,93,54.2,86.9,54.2z"
                              id="XMLID_24_"
                            />
                            <path
                              className="st0"
                              d="M186.6,26.1h-0.3c-2-2.4-5.8-4.5-10.7-4.5c-10.1,0-19,8.8-19,20.3c0,11.4,8.8,20.3,19,20.3 c4.9,0,8.7-2.2,10.7-4.6h0.3v2.8c0,7.7-4.2,11.9-10.8,11.9c-5.4,0-8.8-3.9-10.2-7.2l-7.7,3.2c2.2,5.4,8.1,12,18,12 c10.4,0,19.3-6.1,19.3-21.1V22.7h-8.4V26.1z M176.4,54.2c-6.1,0-10.8-5.2-10.8-12.3c0-7.2,4.7-12.3,10.8-12.3 c6.1,0,10.8,5.2,10.8,12.4C187.3,49,182.5,54.2,176.4,54.2z"
                              id="XMLID_21_"
                            />
                            <path
                              className="st2"
                              d="M132.3,21.6c-11.2,0-20.4,8.5-20.4,20.3c0,11.7,9.1,20.3,20.4,20.3s20.4-8.6,20.4-20.3 C152.6,30.1,143.5,21.6,132.3,21.6z M132.3,54.2c-6.1,0-11.4-5.1-11.4-12.3c0-7.3,5.3-12.3,11.4-12.3c6.1,0,11.4,5,11.4,12.3 C143.7,49.1,138.4,54.2,132.3,54.2z"
                              id="XMLID_18_"
                            />
                            <path
                              className="st3"
                              d="M202.1,0.8h8.8v61.3h-8.8V0.8z"
                              id="XMLID_3_"
                            />
                            <path
                              className="st1"
                              d="M237.9,54.2c-4.5,0-7.7-2.1-9.8-6.1l27.1-11.2l-0.9-2.3c-1.7-4.5-6.8-12.9-17.3-12.9 c-10.4,0-19.1,8.2-19.1,20.3c0,11.4,8.6,20.3,20.1,20.3c9.3,0,14.7-5.7,16.9-9l-6.9-4.6C245.6,51.9,242.4,54.2,237.9,54.2 L237.9,54.2z M237.3,29.2c3.6,0,6.7,1.9,7.7,4.5l-18.3,7.6C226.6,32.7,232.7,29.2,237.3,29.2z"
                              id="XMLID_14_"
                            />
                          </g>
                        </svg>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-7352f3 elementor--star-style-star_unicode elementor-star-rating--align-center elementor-widget elementor-widget-star-rating"
                  data-element_type="widget"
                  data-id="7352f3"
                  data-widget_type="star-rating.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-star-rating__wrapper">
                      <div className="elementor-star-rating__title">4.8 |</div>
                      <div
                        className="elementor-star-rating"
                        itemProp="reviewRating"
                        itemScope
                        itemType="http://schema.org/Rating"
                        title="4.8/5"
                      >
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-full">★</i>
                        <i className="elementor-star-8">★</i>{" "}
                        <span
                          className="elementor-screen-only"
                          itemProp="ratingValue"
                        >
                          4.8/5
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3d5de092 elementor-widget elementor-widget-heading"
                  data-element_type="widget"
                  data-id="3d5de092"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      EXCELLENT
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1ece0f54 elementor-widget elementor-widget-heading"
                  data-element_type="widget"
                  data-id="1ece0f54"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <p className="elementor-heading-title elementor-size-default">
                      Based on 1.8K reviews
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-618e1f8e e-con-full e-flex e-con e-parent"
              data-core-v316-plus="true"
              data-element_type="container"
              data-id="618e1f8e"
              data-settings='{"content_width":"full","background_background":"classic","container_type":"flex"}'
            >
              <div
                className="elementor-element elementor-element-6f911e49 elementor-testimonial--align-left elementor-testimonial--skin-bubble elementor-testimonial--layout-image_above elementor-widget elementor-widget-testimonial-carousel e-widget-swiper"
                data-element_type="widget"
                data-id="6f911e49"
                data-settings='{"slides_per_view":"2","slides_to_scroll":"2","autoplay_speed":0,"space_between":{"unit":"px","size":"","sizes":[]},"speed":15000,"lazyload":"yes","autoplay":"yes","loop":"yes","space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
                data-widget_type="testimonial-carousel.default"
              >
                <div className="elementor-widget-container">
                  {" "}
                  <div className="elementor-swiper">
                    <Slider {...WebtechSlideSettings1}>
                      <div className="p-4">
                        <div className=" ">
                          <div className="flex ">
                            <img src={slide1} className="rounded-[50%]" />
                            <h1 className="text-2xl font-semibold pl-6 mt-4">
                              Palak Sharma
                            </h1>
                          </div>

                          <div className="bg-[#F9FAFA] p-4  mt-3">
                            <p className="text-[#64666C] mt-3">
                              They provide quality of service based on customer
                              needs.
                            </p>
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="">
                          <div className="flex ">
                            <img src={slide2} className="rounded-[50%]" />
                            <h1 className="text-2xl font-semibold pl-6 mt-4">
                              Tarang Tripathi
                            </h1>
                          </div>

                          <div className="bg-[#F9FAFA] p-4  mt-3">
                            <p className="text-[#64666C] mt-3">
                              I recently had the opportunity to work with this
                              company.
                            </p>
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="">
                          <div className="flex ">
                            <img src={slide3} className="rounded-[50%]" />
                            <h1 className="text-2xl font-semibold pl-6 mt-4">
                              Kunal Singh
                            </h1>
                          </div>

                          <div className="bg-[#F9FAFA] p-4  mt-3">
                            <p className="text-[#64666C] mt-3 ">
                              They are very sharp and have a high quality team
                              members.
                            </p>
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="">
                          <div className="flex ">
                            <img src={slide4} className="rounded-[50%]" />
                            <h1 className="text-2xl font-semibold pl-6 mt-4">
                              Anshika dubey
                            </h1>
                          </div>

                          <div className="bg-[#F9FAFA] p-4  mt-3">
                            <p className="text-[#64666C] mt-3">
                              Good company and quality products delivery on
                              times.
                            </p>
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="">
                          <div className="flex ">
                            <img
                              src={slide5}
                              className="rounded-[50%] w-[80px] h-auto"
                            />
                            <h1 className="text-2xl font-semibold pl-6 mt-4">
                              Ayush Jain
                            </h1>
                          </div>

                          <div className="bg-[#F9FAFA] p-4  mt-3">
                            <p className="text-[#64666C] mt-3">
                              Placed in Programmics Technology through Graviton.
                            </p>
                            <div>
                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                className="h-4 w-4 text-[#FFDF00] mt-4"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-5843406 e-flex e-con-boxed e-con e-parent"
          data-core-v316-plus="true"
          data-element_type="container"
          data-id="5843406"
          data-settings='{"background_background":"classic","container_type":"flex","content_width":"boxed"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-f65e5f0 elementor-widget elementor-widget-heading"
              data-element_type="widget"
              data-id="f65e5f0"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title elementor-size-default">
                  #1 🇮🇳 We're highest rated program in the world 🌎
                </h4>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-65c84b0 elementor-widget elementor-widget-heading"
              data-element_type="widget"
              data-id="65c84b0"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Accelerate your career at price of less than a chai ☕!
                </h3>{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-c4b531c e-flex e-con-boxed e-con e-parent"
          data-core-v316-plus="true"
          data-element_type="container"
          data-id="c4b531c"
          data-settings='{"container_type":"flex","content_width":"boxed"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-ff1aef8 elementor-widget elementor-widget-heading"
              data-element_type="widget"
              data-id="ff1aef8"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Why join this course? 🤷🏻‍♂️
                </h2>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-ab11b67 e-grid e-con-boxed e-con e-parent"
              data-core-v316-plus="true"
              data-element_type="container"
              data-id="ab11b67"
              data-settings='{"container_type":"grid","content_width":"boxed","grid_outline":"yes","grid_columns_grid":{"unit":"fr","size":3,"sizes":[]},"grid_columns_grid_tablet":{"unit":"fr","size":"","sizes":[]},"grid_columns_grid_mobile":{"unit":"fr","size":1,"sizes":[]},"grid_rows_grid":{"unit":"fr","size":2,"sizes":[]},"grid_rows_grid_tablet":{"unit":"fr","size":"","sizes":[]},"grid_rows_grid_mobile":{"unit":"fr","size":"","sizes":[]},"grid_auto_flow":"row","grid_auto_flow_tablet":"row","grid_auto_flow_mobile":"row"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-01e85c9 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="01e85c9"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          10+ Years experienced Trainers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-b9684d2 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="b9684d2"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          100% placement assistance
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-5ca1f54 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="5ca1f54"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          Free Study Materials and Placement guide
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-1cd5add elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="1cd5add"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          Enhances the personality of the students
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-cde11b9 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="cde11b9"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          3234 Tie-up Companies for Placement Support
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-fa6d5d4 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-element_type="widget"
                  data-id="fa6d5d4"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span className="elementor-icon-list-text">
                          Skills as per IT industry
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center mt-10">
          <h1 className="font-semibold">SERVICES</h1>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5  mx-5 md:mx-20 lg:mx-28 mt-5 md:mt-10">
          <div className="border-2 rounded-2xl mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              FRONT-END TRAINING
            </h1>

            <ol className="font-semibold p-4 mt-4">
              <li className="">1. Notes, Live and Recording</li>
              <li className="">2. HTML, CSS, JavaScript</li>
              <li className="">3. React & Redux</li>
              <li className="">4. Redux Toolkit</li>
              <li className="">5. ANTID</li>
            </ol>
          </div>

          <div className="border-2 rounded-2xl mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              LOGICAL PRACTICE
            </h1>

            <ol className=" font-semibold p-4 mt-4">
              <li className="">1. Puzzle Solving</li>
              <li className="">2. Deductive Reasoning</li>
              <li className="">3. Pattern Recognition</li>
              <li className="">4. Alogorithm Design</li>
            </ol>
          </div>

          <div className="border-2 rounded-2xl mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              AI ACCELERATE
            </h1>

            <ol className=" font-semibold p-4 mt-4">
              <li className="">1. Free Course Certificate</li>
              <li className="">2. Path of Frontent Developement</li>
              <li className="">3. Professional Training</li>
              <li className="">4. AI Powered Job Assistance</li>
            </ol>
          </div>

          <div className="border-2 rounded-2xl mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              LIVE PROJECT
            </h1>

            <ol className=" font-semibold p-4 mt-4">
              <li className="">1. Real World Application</li>
              <li className="">2. Exeperienced Instructor</li>
              <li className="">3. Skill Enhancement</li>
              <li className="">4. Tackle Industry Level Problems</li>
            </ol>
          </div>

          <div className="border-2 rounded-2xl  mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              PROFESSIONAL TRAINING
            </h1>

            <ol className="font-semibold p-4 mt-4">
              <li className="">1. Portfolio Creation </li>
              <li className="">2. Resume Enhancer</li>
              <li className="">3. GitHub Walkthrough </li>
              <li className="">4. Enhance LinkedIn</li>
            </ol>
          </div>

          <div className="border-2 rounded-2xl mb-4 bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              PLACEMENT ASSURANCE
            </h1>

            <p className=" font-semibold text-justify p-4 mt-4">
              Completed the latest industry- approved courses to stay updated.
              Focused on placement training.Handle Interview with case. Get
              unique opportunities to sit for interview with care companies
            </p>
          </div>

          <div className="border-2 rounded-2xl  bg-[#C8E4FF]">
            <h1
              className="text-white p-4 text-2xl md:text-3xl"
              style={{
                background:
                  "linear-gradient(0deg, #0A4D68 8.68%, #05BFDB 140.45%)",
              }}
            >
              EXPERIENCE CERTIFICATE
            </h1>

            <ol className="font-semibold p-4 mt-4">
              <li className="">1. 3 Month Experience Certificate </li>
              <li className="">2. AI Accelerate Certificate</li>
            </ol>
          </div>
        </div>

        <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5 mt-5">
          <div
            class=" bg-white rounded-3xl shadow-2xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div class=" w-full md:flex ">
              <div class="hidden md:block w-1/2 bg-[#0A4D68] py-10 px-10 ">
                <img
                  src={trainingthirdImage}
                  alt=""
                  class="w-full h-auto mt-20"
                />
              </div>

              <div class="w-full md:w-1/2 p-5 ">
                <form ref={form} onSubmit={sendEmail}>
                  <h1 className="font-bold text-xl">
                    QUERY ? HAVE A CONSULATION WITH US ?
                  </h1>

                  <div class="mt-5">
                    <input
                      type="text"
                      id="name"
                      className={`w-full  px-5 py-2 border rounded-[4px] border-gray-400 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      required
                      placeholder="Name"
                      onChange={inputHandle}
                      name="name"
                      value={values.name}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div class="mt-5">
                    <input
                      type="text"
                      id="email"
                      className={`w-full  px-5 py-2 border rounded-[4px] border-gray-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      required
                      placeholder="Email"
                      onChange={inputHandle}
                      name="email"
                      value={values.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div class="mt-5">
                    <input
                      type="text"
                      id="pnum"
                      className={`w-full  px-5 py-2 border rounded-[4px] border-gray-400 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      required
                      placeholder="Phone"
                      onChange={inputHandle}
                      name="phone"
                      value={values.phone}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div class="mt-5">
                    <textarea
                      placeholder="Message"
                      rows="6"
                      className={`w-full  px-5 py-2 border rounded-[4px] border-gray-400 ${
                        errors.textarea ? "border-red-500" : ""
                      }`}
                      required
                      onChange={inputHandle}
                      name="textarea"
                      value={values.textarea}
                    />
                    {errors.textarea && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.textarea}
                      </p>
                    )}
                  </div>

                  <div class="mt-5 flex justify-center">
                    <button
                      type="submit"
                      className=" px-5 py-2 text-black border rounded-[4px] border-gray-400"
                      // onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <img
            src={secondheading}
            className="w-3/4 h-3/4 "
            alt="Our Services"
          />
        </div>

        <div className="justify-center mt-10">
          <img
            src={thirdcertificate}
            className="certificate-banner-image"
            alt="certificates"
          ></img>
        </div>

        <div
          className="mt-10 font-extralight grid grid-cols-1 lg:grid-cols-4 items-center   bg-opacity-85 py-6 px-16 min-h-[200px] w-full overflow-hidden"
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

        {/* video */}

        <div className="mt-5 md:mt-10">
          <div className="text-center">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl">
              Related Videos
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mx-10 md:mx-20 lg:mx-32 mt-10 md:mt-20">
          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/ohqT952x604?si=-1G3GKH2Q-qeeBKQ"
              title="Digital Gravity"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="Video-part-section"
            ></iframe>
          </div>

          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/tp0r6RGwryE?si=1zRdILVrw4AkJ02f"
              title="Grow Your Business"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="Video-part-section"
            ></iframe>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div className="text-center">
            <h2 className=" text-2xl md:text-4xl font-bold mb-1 text-center">
              Get In Touch With Our <br /> Support Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10  
          mx-5 md:mx-20 lg:mx-30 mt-10 md:mt-12">
           
              <div
                className="rounded-lg p-5"
                style={{
                  background:
                    "linear-gradient(180deg, #F8F9C9 0%, #0A4D68 0.01%, #05BFDB 100%)",
                }}
              >
                <h2 className="text-white text-lg  font-medium">Sales</h2>

                <div className="flex mt-2">
                  <MdCall className="text-[#00FFCA] text-xl font-semibold " />
                  <p className="text-white pl-2">+91-9403890502</p>
                </div>

                <div className="flex mt-2">
                  <MdOutlineMailOutline className="text-[#00FFCA] text-2xl font-semibold " />

                  <p className="text-white pl-2">
                    <b>akrati.verma@gravitonweb.com</b>
                  </p>
                </div>

              </div>
           

            
              <div
                className="rounded-lg p-5"
                style={{
                  background:
                    "linear-gradient(180deg, #F8F9C9 0%, #0A4D68 0.01%, #05BFDB 100%)",
                }}
              >
                <h2 className="text-white text-lg  font-medium">HR</h2>

                <div className="flex mt-2">
                  <MdCall className="text-[#00FFCA] text-xl font-semibold " />
                  <p className="text-white pl-2">+91-7999958787</p>
                </div>

                <div className="flex mt-2">
                  <MdOutlineMailOutline className="text-[#00FFCA] text-2xl font-semibold" />

                  <p className=" text-white pl-2">
                    <b>hr@gravitonweb.com</b>
                  </p>
                </div>
              </div>
            

          
              <div
                className="rounded-lg p-5"
                style={{
                  background:
                    "linear-gradient(180deg, #F8F9C9 0%, #0A4D68 0.01%, #05BFDB 100%)",
                }}
              >
                <h2 className="text-white text-lg title-font font-medium">
                  Support
                </h2>

                <div className="flex mt-2">
                  <MdCall className="text-[#00FFCA] text-xl font-semibold " />
                  <p className="text-white pl-2">+91-9691417158</p>
                </div>

                <div className="flex mt-2">
                  <MdOutlineMailOutline className="text-[#00FFCA] text-2xl font-semibold " />
                  <p className=" text-white pl-2">
                    <b>support@gravitonweb.com</b>
                  </p>
                </div>
              </div>
           
          </div>
        </div>

        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8281749193025!2d77.60770847507558!3d12.91876268739173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ea3f6c5c45%3A0x9991677a220a162b!2sGraviton%20Web%20Technologies!5e0!3m2!1sen!2sin!4v1694600594595!5m2!1sen!2sin"
            className="w-full h-[50vh] px-3"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      
    </>
  );
}
