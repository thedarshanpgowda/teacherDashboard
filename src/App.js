import "./App.css";
import Form from "./components/Form";
import styles from "./components/Form.module.css";
import Chart from "./components/Chart";
import Secondary from "./components/Secondary";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState([]);
  
  const arr = [
    { question: "Unable to focus on studies", name: "Mithun Gowda", usn : "4MC21EE042" },
    { question: "Was that hard being the lone wolf", name: "Anonymous", usn : "xox" },
    { question: "Did you know", name: "Darshan Gowda", usn : "4MC21EE042" },
  ];
  const [question, setquestion] = useState(arr[0].question);
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

const questionHandler = (data) =>{
  setquestion(data)
}

  return (
    <>
      <Chart className="nameBlock">Dr Raju SP | PHY06</Chart>
      <Chart className={styles.mainBlock}  >
        <Form question = {question}/>
        <hr />
        <Secondary state={arr} questionHandler = {questionHandler}/> 
        {/* change this to state */}
      </Chart>
    </>
  );
}

export default App;
