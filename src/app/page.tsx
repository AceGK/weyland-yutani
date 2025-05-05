'use client'
import React from "react";
import MousePosition from "../components/mousePosition";
import ScrollPosition from "../components/scrollPosition";
import WindowDimensions from "../components/windowDimensions";
import Hero from "../components/hero";

import styles from "../styles/Home.module.scss";
import useScrollHash from "../hooks/useScrollHash";

interface SectionProps {
  name: string;
  className: string;
  description?: string;
  children: React.ReactNode;
}

export default function Home() {
  useScrollHash(["about", "engineering", "exploration", "terraforming"]);

  return (
    <>
      <Overlay />
      <div className={styles.overlayData}>
        <Hero />

        <Section name="about" className={styles.about}>
          <p>
            <strong>Weyland-Yutani Corporation</strong> is the galaxy&apos;s
            foremost leader in advanced technologies, off-world colonization,
            and synthetic intelligence. With a proud legacy that spans
            centuries and sectors, we continue to shape the future through
            innovation, discipline, and vision.
          </p>
          <p>
            From our first atmospheric processors on Thedus to successful
            terraforming operations on LV-426, our mission remains clear:{" "}
            <strong>Build Better Worlds.</strong>
          </p>
        </Section>

        <Section name="engineering" className={styles.engineering}>
          <p>
            Pioneering humanity&apos;s future means solving the impossible. Our
            teams of cyberneticists, structural engineers, and AI architects
            work across the solar system and beyond to develop technologies
            that redefine the boundaries of science.
          </p>
          <ul>
            <li>
              <strong>Synthetic Intelligence:</strong> The latest MU/TH/UR-class
              systems power our vessels and infrastructure, while our Hyperdyne
              Systems synthetics deliver loyalty and near-human intuition.
            </li>
            <li>
              <strong>Propulsion & Power:</strong> From fusion cores to
              interstellar drives, Weyland-Yutani fuels humanity&apos;s
              expansion.
            </li>
          </ul>
        </Section>

        <Section name="exploration" className={styles.exploration}>
          <p>
            The stars are not empty. Weyland-Yutani invests in deep-space
            missions to locate habitable systems, exploit natural resources, and
            establish permanent colonial installations.
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
              Reclamation project underway at <strong>Hadley&apos;s Hope</strong>, LV-426
            </li>
          </ul>
          <p>
            Every world we touch brings us closer to the next evolutionary step.
          </p>
        </Section>

        <Section name="terraforming" className={styles.terraforming}>
          <p>
            Our <strong>Atmospheric Processing Plants</strong> have
            successfully transformed barren rocks into livable ecosystems — often
            in under a decade. Through controlled climate engineering, ecosystem
            seeding, and proprietary geoforming techniques, we enable
            sustainable colonization where nature never intended.
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
              <strong>Sea of Tranquility Expansion:</strong> Lunar development
              for long-term habitation
            </li>
          </ul>
          <p>
            We don&apos;t just adapt to environments.{" "}
            <strong>
              <em>We create them.</em>
            </strong>
          </p>
        </Section>
      </div>
    </>
  );
}

function Overlay() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear() + 100}`;

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
        <div className={styles.dataBottomRight}>{date}</div>
      </div>
    </>
  );
}

function Section({ name, className, description, children }: SectionProps): JSX.Element{
  return (
    <section id={name} className={className}>
      <div className={styles.row}>
        <div>
          <h2>{name}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
