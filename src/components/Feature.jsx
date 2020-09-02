import React from "react";
import classnames from "classnames";

export function Feature({ icon, title, description }) {
  return (
    <div className={classnames("col col--4", "feature-element")}>
      {icon && <div className="text--center icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
