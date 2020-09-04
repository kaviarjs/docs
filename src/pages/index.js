import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { SubscribeToNewsletter } from "../components/SubscribeToNewsletter";
import { IoIosApps, IoIosFlash, IoIosFlower } from "react-icons/io";
import { Feature } from "../components/Feature";

const features = [
  {
    title: <>Go Modular. Save time.</>,
    icon: <IoIosApps />,
    // imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        TypeScript brings order to chaos. Kaviar brings order to your modules.
        Writing co-operative, independent modules has never been easier.
      </>
    ),
  },
  {
    title: <>Rapid development. No joke.</>,
    icon: <IoIosFlash />,
    // imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Using the <Link to="/docs/x-way-introduction">X-way</Link> from Kaviar,
        you can generate from command-line your favorite elements which
        accelerate prototyping of apps and bring back enjoyment to coding.
      </>
    ),
  },
  {
    title: <>Open-source. Strongly maintained.</>,
    icon: <IoIosFlower />,
    // imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        We believe that if you were to choose a framework, you should chose one
        that will last the test of time. Kaviar packages have the current LTS
        support until December 2026. So you are safe to build your business with
        us.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="KaviarJS is a framework with rapid development in mind without the sacrifice of quality."
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <embed src="/img/logo-orange.svg" height="100px" alt="Kaviar Logo" />
          <p className="hero__subtitle">
            rapid development — zero compromises
            <br />
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--lg",
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
      <main className="explained-container">
        <h1>Explained for</h1>
        <Tabs
          defaultValue="developers"
          values={[
            { label: "Developers", value: "developers" },
            { label: "Entrepreneurs", value: "entrepreneurs" },
            { label: "Project Managers", value: "pms" },
          ]}
        >
          <TabItem value="developers">
            As a developer with experience you are tired of reinventing the
            wheel and you want a framework that can support you in decoupling
            your code, making it re-usable and at the same time having it clean
            and done within schedule.
            <br />
            <br />
            Kaviar framework is support tool for you to allow your creativity to
            flourish. We have lots of things planned to make our developer's
            life easier. So make sure you subscribe to the newsletter.
          </TabItem>
          <TabItem value="entrepreneurs">
            Whether you are starting a company or looking to digitalise yours,
            it's gonna be a challenge, we guarantee. You will be battling with
            sharks and the best weapon at your disposal is delivering fast or
            your competition is going to take the cake.
            <br />
            <br />
            Kaviar is a framework designed to <strong>deliver fast</strong>, it
            is designed to aid you or your team by providing standards,
            conventions, the basic things already built, so you can focus on
            your progress.
            <br />
            <br />
            Did we mention it's fast? Don't belive us. Try it yourself and make
            sure you subscribe to our newsletter.
          </TabItem>
          <TabItem value="pms">
            The success of a project manager is measured by two key metrics:
            delivery and team satisfaction. To master both it is an art that may
            take decades. Kaviar is going to be your friend because it helps
            your most critical KPIs.
            <br />
            <br />
            Being designed for fast delivery, your sprints will be finished in
            time and containing a well-structured and organised documentation
            and set of conventions, your developer will be more than happy to
            work on it, improving on the satisfaction metric.
            <br />
            <br />
            Do yourself a favor, and recommend Kaviar to whoever makes decisions
            regarding technology and be sure to subscribe to our newsletter.
          </TabItem>
        </Tabs>
      </main>
      <SubscribeToNewsletter />
    </Layout>
  );
}

export default Home;
