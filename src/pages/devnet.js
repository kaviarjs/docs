import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { SubscribeToNewsletter } from "../components/SubscribeToNewsletter";
import { Feature } from "../components/Feature";

const features = [
  {
    title: <>Project Consulting</>,
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Talk with the creator of Kaviar (Theodor) and scheudule a meeting
        directly with him.
      </>
    ),
  },
  {
    title: <>Apply as a developer</>,
    // imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        After you have learned the basics of Kaviar, you can apply to register
        as a certified Kaviar developer.
      </>
    ),
  },
  {
    title: <>Build your team.</>,
    // imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Work with us to find the perfect team for your project, we deliver
        Project Management &and; Audit, Quality Assurance, Developers, Designers
        fit for your project.
      </>
    ),
  },
];

function DevNet() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`DevNet`}
      description="KaviarJS developer network. Join now or ask for resources!"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1>Developer Network</h1>
          <p className="hero__subtitle">
            find the <strong>human</strong> resources to build your apps
            <br />
          </p>
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
      <SubscribeToNewsletter />
    </Layout>
  );
}

export default DevNet;
