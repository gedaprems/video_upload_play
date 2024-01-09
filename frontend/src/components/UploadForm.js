import React, {useState} from 'react';
import axios from 'axios';
import {BACKEND_URI} from "../config/constants";

// we write :=> props.getAllMedias => {getAllMedias}

const UploadForm = ({getAllMedias}) =>{
    const [name, setName] = useState('');
    const [videos, setVideos] = useState([]);
    const handlesubmit = (e)=>{
        e.preventDefault();

        // need to know how the loop works 

        let formdata = new FormData();
        for(let key in videos){
            formdata.append("videos", videos[key]);
        }

        formdata.append("name",name);

        axios.post(`${BACKEND_URI}/api/v1/media/create`, formdata).then(success =>{
            alert('Submitted Successfully');
            getAllMedias();
        }).catch(err =>{
            console.log(err);
            alert("Error Happened!");
        })
    }


    return(
        <div>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name' className='form-control' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label htmlFor='videos'>Upload Videos</label>
                    <input type='file' name='videos' id='videos' multiple className='form-control' accept='.mp4, .mkv' onChange={(e) => setVideos(e.target.files)}/>
                </div>
                <button className='btn btn-primary mt-2'>Upload</button>

            </form>
        </div>
    )
}

export default UploadForm;