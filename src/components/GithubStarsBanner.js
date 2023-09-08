import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./GithubStarsBanner.module.css";

const GithubStarsBanner = () => {
  const [starsCount, setStarsCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/docusaurus")
      .then((response) => response.json())
      .then((data) => setStarsCount(data.stargazers_count));
  }, []);

  return (
    <div className={clsx("banner", styles.banner)}>
      <div className={clsx("container", styles.container)}>
        <span className={styles.starsCount}>{starsCount}</span>
        <span className={styles.message}>Stars on GitHub</span>
        <Link
          to="https://github.com/facebook/docusaurus"
          className={styles.link}
        >
          Star us on GitHub
        </Link>
      </div>
    </div>
  );
};

export default GithubStarsBanner;
