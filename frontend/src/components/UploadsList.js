import React from 'react';
import { BACKEND_URI } from '../config/constants';

const UploadList = ({medias}) =>{
    return(
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th width="200">Name</th>
                            <th>Videos</th>
                        </tr>
                    </thead>
                    <tbody>
                        { medias && medias.map(media =>{
                            return (
                                <tr>
                                    <td>{media.name}</td>
                                    <td>{media.videos.map(video =>{
                                        return (
                                            <video preload='auto' controls width='320' height='240'>
                                                <source src= {`${BACKEND_URI}${video}`} />; Your browser doest not support video tag
                                            </video>
                                        )
                                    })}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UploadList;