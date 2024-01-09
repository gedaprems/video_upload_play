import React, {useState, useEffect}from "react";
import "./App.css";
import axios from "axios";
import { BACKEND_URI } from "./config/constants";
import UploadForm from "./components/UploadForm";
import UploadList from "./components/UploadsList";

function App() {

  const [medias, setMedias] = useState([]);

  useEffect(()=>{
    getAllMedias();
  },[]);


  const getAllMedias = ()=>{
    axios.get(`${BACKEND_URI}/api/v1/media/all`).then(result =>{
      setMedias(result.data);

    }).catch(error =>{
      setMedias([]);
      console.log(error);
      alert("Error Happend");
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className = "card" 
          style = {{
            height: "auto",
            width: "600px",
            margin: "40px",
            border: "1px solid black",
          }}>
            <div className="card-body"><UploadForm getAllMedias = {getAllMedias}/></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className = "card" 
          style = {{
            height: "auto",
            width: "600px",
            margin: "40px",
            border: "1px solid black",
          }}>
            <div className="card-body"><UploadList medias = {medias}/></div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
