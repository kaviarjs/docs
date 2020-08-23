import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Modular Framework</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        It's time, with the help of TypeScript to bring cooperative
        dependency-injection based modules with async event management to Node.
      </>
    ),
  },
  {
    title: <>No-nonsense Documentation</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Documentation is the key to understanding the capability of a framework
        this is why, it is focused on explaining design decisions and best
        practices while respecting your learning curve.
      </>
    ),
  },
  {
    title: <>Generate Fast.</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Using the X-way from Kaviar, you can generate from command line multiple
        classes that accelerate prototyping of apps and bring back enjoyment to
        coding.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="KaviarJS is a TypeScript framework suited for developers that hate wasting time."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <embed src="/img/logo-orange.svg" height="100px" alt="Kaviar Logo" />
          <p className="hero__subtitle">
            For the <span style={{ fontStyle: "italic" }}>classy</span> and the{" "}
            <strong>bold</strong> developers.
            <br />
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
