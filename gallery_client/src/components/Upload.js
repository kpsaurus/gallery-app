import React, { useState, useEffect } from 'react';
import client from '../axios/client';


function Upload({ path, fetchData }) {
    
    const [file,setFile]=useState(null)

    const fileUpload = {
        cursor: 'pointer'
    }

    async function uploadFile(formData) {
        await client.put(
            'object/',formData
        ).then(res => {
            if (res) {
                if (res.data.msg == 'success') {
                    fetchData()
                }
            } else {
                
            }
        }).catch(err => {
            console.error(err)
        })
    }


    const fileChange = (e) => {
        setFile(e.target.files[0])
        const formData = new FormData();
        
        formData.append('path', path);
        formData.append('file', e.target.files[0]);
        
        uploadFile(formData)
    }

    return (
        <div>
            <label className='uk-tile uk-tile-primary' style={fileUpload}>
                <input className='uk-hidden' type="file" name='file' onChange={fileChange}/>
                <span uk-icon="icon: upload"></span> Upload File
            </label>
       </div>
    )
}

export default Upload