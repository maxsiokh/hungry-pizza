import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>:(</span>
      <br />
      NOT FOUND
    </h1>
  );
};
export default NotFoundBlock;
