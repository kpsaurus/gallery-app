import React, { useState, useEffect } from 'react';
import client from '../axios/client';
import Folder from './Folder';
import File from './File';

function Home() {

    const [items, setItem] = useState([])

    async function fetchData() {
        await client.get(
            '/'
        ).then(res => {
            if (res) {
                setItem(res.data.root_dir)
            } else {
                
            }

        }).catch(err => {

        })
    }


    useEffect(() => {
        fetchData()
  },[]);

    return (<div className="uk-grid uk-child-width-1-4@m">
        
        {   items.folders ? (
            items.folders.map((folder,index) => <div key={index}>
                <Folder folder={folder} />
                </div>
            )) : ''
        }
        {   items.files ? (
            items.files.map((file,index) => <div key={index}>
                <File file={file} />
                </div>
            )) : ''
        }
    </div>
    )
}

export default Home;