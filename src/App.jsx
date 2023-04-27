import { useEffect, useState } from "react";
import { RootPage } from "./pages/RootPage";
import styles from "./stylesApp.module.css";

export const App = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>UGMK-IT</h1>
      <RootPage />
    </div>
  );
};
