import React from "react";
import Chart from "./Chart";
import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <Chart className={styles.primaryBlock}>
      <Chart className={styles.primaryContainer}>
      <div className="question">Q: {props.question}</div>
        <Chart className={styles.inputBlock}>
          <textarea
            type="text"
            className={styles.message}
            placeholder="Message"
          />
        </Chart>
        
        <input type="submit" value="Submit" className={styles.button} />
      </Chart>
    </Chart>
  );
}
