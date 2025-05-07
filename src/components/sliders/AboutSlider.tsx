"use client";

import { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import styles from "./AboutSlider.module.scss";

import Button from "../button";
import { useRef } from "react";
const slides = [
  {
    title: "Our Mission",
    image: "/images/3.jpeg",
    content: (
      <>
        <p>
          <strong>Weyland-Yutani Corporation</strong> is the galaxy&apos;s
          foremost leader in advanced technologies, off-world colonization, and
          synthetic intelligence. With a proud legacy that spans centuries and
          sectors, we continue to shape the future through innovation,
          discipline, and vision.
        </p>
        <p>
          From our first atmospheric processors on Thedus to successful
          terraforming operations on LV-426, our mission remains clear:{" "}
          <strong>Build Better Worlds.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Engineering",
    image: "/images/2.jpeg",
    content: (
      <>
        <p>
          Pioneering humanity&apos;s future means solving the impossible. Our
          teams of cyberneticists, structural engineers, and AI architects work
          across the solar system and beyond to develop technologies that
          redefine the boundaries of science.
        </p>
        <ul>
          <li>
            <strong>Synthetic Intelligence:</strong> The latest MU/TH/UR-class
            systems power our vessels and infrastructure, while our Hyperdyne
            Systems synthetics deliver loyalty and near-human intuition.
          </li>
          <li>
            <strong>Propulsion & Power:</strong> From fusion cores to
            interstellar drives, Weyland-Yutani fuels humanity&apos;s expansion.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Exploration",
    image: "/images/6.jpeg",
    content: (
      <>
        <p>
          The stars are not empty. Weyland-Yutani invests in deep-space missions
          to locate habitable systems, exploit natural resources, and establish
          permanent colonial installations.
        </p>
        <ul>
          <li>
            Survey expeditions to <strong>Zeta II Reticuli</strong>
          </li>
          <li>
            Remote scans of <strong>LV-223</strong>, a Class-3
            Engineer-designated system
          </li>
          <li>
            Reclamation project underway at <strong>Hadley&apos;s Hope</strong>,
            LV-426
          </li>
        </ul>
        <p>
          Every world we touch brings us closer to the next evolutionary step.
        </p>
      </>
    ),
  },
  {
    title: "Terraforming",
    image: "/images/8.jpeg",
    content: (
      <>
        <p>
          Our <strong>Atmospheric Processing Plants</strong> have successfully
          transformed barren rocks into livable ecosystems — often in under a
          decade. Through controlled climate engineering, ecosystem seeding, and
          proprietary geoforming techniques, we enable sustainable colonization
          where nature never intended.
        </p>
        <ul>
          <li>
            <strong>LV-426:</strong> Atmospheric transformation began in 2159
          </li>
          <li>
            <strong>Acheron Colony Initiative:</strong> Proof of concept for
            rapid industrial colonization
          </li>
          <li>
            <strong>Sea of Tranquility Expansion:</strong> Lunar development for
            long-term habitation
          </li>
        </ul>
        <p>
          We don&apos;t just adapt to environments.{" "}
          <strong>
            <em>We create them.</em>
          </strong>
        </p>
      </>
    ),
  },
];

const AboutSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        loop={false}
        speed={1000}
        slidesPerView={1}
        className={styles.swiper}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => setActiveIndex(swiper.realIndex), 0); // ensure accurate on mount
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        id="about"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <div
              className={styles.imageWrapper}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${slide.image}')`,
              }}
            >
              <h2>{slide.title}</h2>
              <div className={styles.content}>{slide.content}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination with your Button component */}
      <div className={styles.pagination}>
        {slides.map((slide, i) => (
          <Button
            key={slide.title}
            text={slide.title}
            onClick={() => swiperRef.current?.slideTo(i)}
            className={i === activeIndex ? styles.active : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutSlider;