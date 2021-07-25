import React, { useState, useEffect } from 'react';
import client from '../axios/client';
import Folder from './Folder';
import NewFolder from './NewFolder';
import File from './File';
import Upload from './Upload';

function Home() {

    const [items, setItem] = useState([])
    const [newFolder, setNewFolder] = useState({})
    const [path, setPath] = useState('')

    async function fetchData() {
        await client.post(
            '/',{'path':path}
        ).then(res => {
            if (res) {
                setItem(res.data.contents)
            } else {
                
            }

        }).catch(err => {

        })
    }

    const addFolder = () => {
        const newFolder = { 'name': 'New Folder' }
        setNewFolder(newFolder)
    }

    useEffect(() => {
        fetchData()
  },[]);

    return (
        <div>
            <hr className="uk-divider-icon"></hr>
            <div className="uk-flex uk-flex-between">
            <p>Current path: {path ? path : '"/"'}</p>
                <button className="uk-button uk-button-secondary" onClick={addFolder}>Add a new folder</button>
            </div>
            <hr></hr>
            <div className="uk-grid uk-child-width-1-4@m uk-grid-match">

            {
                newFolder.name ? (<NewFolder folder={newFolder} />):''
            }
            
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

            <Upload path={path} fetchData={fetchData} />
            </div>
        </div>
    )
}

export default Home;