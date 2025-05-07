"use client";

import React from "react";
import Hero from "../components/hero";
import ContactForm from "../components/contactForm";
import TabbedShowcase from "../components/tabbedShowcase";
import useScrollHash from "../hooks/useScrollHash";

import styles from "../styles/Home.module.scss";

interface SectionProps {
  name: string;
  className: string;
  description?: string;
  children: React.ReactNode;
}

export default function Home() {
  // useScrollHash([
  //   "our-mission",
  //   "engineering",
  //   "exploration",
  //   "terraforming",
  //   "technology",
  //   "contact",
  // ]);

  return (
    <>
      <div className={styles.overlayData}>
        <Hero />

        <Section name="our mission" className={styles.about}>
          <p className="center-text">
            <strong>Weyland-Yutani Corporation</strong> is the galaxy&apos;s foremost leader in advanced technologies, off-world colonization, and synthetic intelligence. With a proud legacy that spans centuries and sectors, we continue to shape the future through innovation, discipline, and vision.
          </p>
          <p className="center-text">
            From our first atmospheric processors on Thedus to successful terraforming operations on LV-426, our mission remains clear: <strong>Build Better Worlds.</strong>
          </p>
        </Section>

        <Section name="engineering" className={styles.engineering}>
          <p className="center-text">
            Pioneering humanity&apos;s future means solving the impossible. Our teams of cyberneticists, structural engineers, and AI architects work across the solar system and beyond to develop technologies that redefine the boundaries of science.
          </p>
          <ul>
            <li><strong>Synthetic Intelligence:</strong> The latest MU/TH/UR-class systems power our vessels and infrastructure, while our Hyperdyne Systems synthetics deliver loyalty and near-human intuition.</li>
            <li><strong>Propulsion & Power:</strong> From fusion cores to interstellar drives, Weyland-Yutani fuels humanity&apos;s expansion.</li>
          </ul>
        </Section>

        <Section name="exploration" className={styles.exploration}>
          <p className="center-text">
            The stars are not empty. Weyland-Yutani invests in deep-space missions to locate habitable systems, exploit natural resources, and establish permanent colonial installations.
          </p>
          <ul>
            <li>Survey expeditions to <strong>Zeta II Reticuli</strong></li>
            <li>Remote scans of <strong>LV-223</strong>, a Class-3 Engineer-designated system</li>
            <li>Reclamation project underway at <strong>Hadley&apos;s Hope</strong>, LV-426</li>
          </ul>
          <p className="center-text">Every world we touch brings us closer to the next evolutionary step.</p>
        </Section>

        <Section name="terraforming" className={styles.terraforming}>
          <p className="center-text">
            Our <strong>Atmospheric Processing Plants</strong> have successfully transformed barren rocks into livable ecosystems — often in under a decade. Through controlled climate engineering, ecosystem seeding, and proprietary geoforming techniques, we enable sustainable colonization where nature never intended.
          </p>
          <ul>
            <li><strong>LV-426:</strong> Atmospheric transformation began in 2159</li>
            <li><strong>Acheron Colony Initiative:</strong> Proof of concept for rapid industrial colonization</li>
            <li><strong>Sea of Tranquility Expansion:</strong> Lunar development for long-term habitation</li>
          </ul>
          <p className="center-text">We don&apos;t just adapt to environments. <strong><em>We create them.</em></strong></p>
        </Section>

        <Section name="technology" className={styles.technology} description="From interstellar propulsion to biomechanical synthesis, Weyland-Yutani’s technological breakthroughs are rewriting the fabric of reality.">
          <TabbedShowcase />
        </Section>

        <Section name="contact" className={styles.contact} description="Contact Weyland-Yutani via subspace transmission">
          <ContactForm />
        </Section>
      </div>
    </>
  );
}

function Section({ name, className, description, children }: SectionProps): JSX.Element {
  return (
    <section id={name.replace(/\s+/g, "-")} className={className}>
      <div className={styles.row}>
        <header>
          <h2>{name}</h2>
          {description && <p className="center-text">{description}</p>}
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
