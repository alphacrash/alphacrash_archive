import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "System Design",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Popular system design questions</>,
  },
  {
    title: "Data Structures & Algorithms",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Common problems required for interviews</>,
  },
  {
    title: "SQL",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Platform to learn and practice SQL</>,
  },
  {
    title: "AI / ML",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Just some things I've learned about AI / ML</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
