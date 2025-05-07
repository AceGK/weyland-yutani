"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../button";

const tabs = [
  {
    title: "Neural Integration",
    description:
      "MU/TH/UR-class cores enable instant command over remote ops, with predictive AI and zero-latency mission control.",
    image: "/photos/12.jpeg",
  },
  {
    title: "FTL Transit Systems",
    description:
      "W-Y FTL-class vessels utilize faster-than-light propulsion to bridge interstellar distances in a fraction of the time, enabling reliable deployment to even the most remote sectors.",
    image: "/photos/17.jpg",
  },
  {
    title: "Hypersleep Cryostasis",
    description:
      "Advanced cryo-pods preserve biological integrity during long missions by placing crew and cargo in suspended animation, minimizing aging and resource consumption.",
    image: "/photos/9.jpg",
  },
  {
    title: "Fusion Reactors",
    description:
      "Our next-gen fusion cores use triple-stage plasma cyclers and cryo-magnetic containment. Deployed in atmospheric processors, interstellar vessels, and colonial outposts, W-Y fusion drives guarantee energy independence.",
    image: "/photos/5.jpeg",
  },
];

const TabbedShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = tabs[activeIndex];

  return (
    <section className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div className={styles.tab}>
          <Button
            key={tab.title}
            className={index === activeIndex ? styles.active : ""}
            onClick={() => setActiveIndex(index)}
          >
            <h3>{tab.title}</h3>
            </Button>
            {index === activeIndex && <p>{tab.description}</p>}
            </div>
        ))}
      </div>

      <div className={styles.imageArea}>
        <Image
          src={activeTab.image}
          alt={activeTab.title}
          fill
          quality={100}
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default TabbedShowcase;
