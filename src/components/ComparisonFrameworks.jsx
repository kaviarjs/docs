import React from "react";
import classnames from "classnames";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from "react-icons/io";

const frameworks = ["Kaviar", "NestJS", "Meteor", "KeystoneJS", "Loopback"];

const featureSet = {
  "Full Stack": ["Kaviar"],
  "Live Data": ["Kaviar", "Meteor"],
  "Dependency Injection": ["Kaviar", "NestJS"],
  TypeSafety: ["Kaviar", "NestJS"],
  "GraphQL Support": ["Kaviar", "NestJS", "KeystoneJS"],
  "Async Event Management": ["Kaviar"],
  "Built-in Authentication": ["Kaviar", "Meteor"],
  "MongoDB Support": ["Kaviar", "Meteor"],
};

export function ComparisonFrameworks({ icon, title, description }) {
  return (
    <div className="comparison-with-others">
      <h1>How does it compare?</h1>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Kaviar</td>
            <td>NestJS</td>
            <td>TypeGraphQL</td>
            <td>KeystoneJS</td>
            <td>LoopBack</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(featureSet).map((featureKey) => {
            return (
              <tr>
                <td>{featureKey}</td>
                {frameworks.map((framework) => {
                  const hasFeature = featureSet[featureKey].includes(framework);
                  return (
                    <td
                      className={classnames({
                        "feature-yes": hasFeature,
                        "feature-no": !hasFeature,
                      })}
                    >
                      {hasFeature ? <Yes /> : <No />}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Yes() {
  return <IoIosCheckmarkCircleOutline />;
}

function No() {
  return <IoIosCloseCircleOutline />;
}
