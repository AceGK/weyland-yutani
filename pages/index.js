import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Logo from '../public/wy-logo.svg'
import MousePosition from '../comps/mousePosition'
import ScrollPosition from '../comps/scrollPosition'
import WindowDimensions from '../comps/windowDimensions'
import Nav from '../comps/nav'


export default function Home() {

  return (
    <>
      <Overlay />
      <div className={styles.overlayData}>

        <Hero />

        <Section
          name="About"
          className={styles.about}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta."
        >
          <ul className={styles.buttons}>
            <li><a href='#engineering'>Engineering</a></li>
            <li><a href='#exploration'>Exploration</a></li>
            <li><a href='#terraforming'>Terraforming</a></li>
          </ul>
        </Section>

        <Section
          name="Engineering"
          className={styles.engineering}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta."
        />

        <Section
          name="Exploration"
          className={styles.exploration}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta."
        />

        <Section
          name="Terraforming"
          className={styles.terraforming}
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex modi iusto nam. Exercitationem doloribus id laboriosam libero voluptatibus praesentium animi rerum odio expedita quo dignissimos, mollitia commodi similique neque ipsam laudantium assumenda sapiente reprehenderit deserunt! Ratione ipsa dolor reiciendis soluta."
        />

      </div>

    </>
  );
}


function Overlay() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear() + 100}`;

  return (
    <>
    <div className="vignette"></div>
    <div className={styles.fullOverlay}>
      <div className={styles.dataTopLeft}>
        <WindowDimensions />
      </div>
      <div className={styles.dataTopRight}>
        <MousePosition />
      </div>
      <div className={styles.dataBottomLeft}>
        <ScrollPosition />
      </div>
      <div className={styles.dataBottomRight}>
        {/* w-y sys v1.0.2 |  */}
        {date}
      </div>
    </div>
    </>
  )
}
function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero__title}
        >Weyland-Yutani Corp</h1>
        <div className={styles.hero__logo}>
          <Image src={Logo} alt='Weyland Yutani' layout='responsive' priority />
        </div>
        <h1 className={styles.hero__subtitle}>building better worlds</h1>
      </div>
      <ul className={styles.hero__locations}>
        <li>Tokyo</li>
        <li>London</li>
        <li>San Francisco</li>
        <li>Sea of Tranquility</li>
        <li>Thedus</li>
      </ul>
    </section>
  )
}

function Section(props) {
  return (
    <section id={props.name} className={props.className}>
      <div className={styles.row}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>
        {props.children}
      </div>
    </section>
  )
}