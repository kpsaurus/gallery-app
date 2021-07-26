import React, { useState, useEffect } from 'react';
import client from '../axios/client';
import Folder from './Folder';
import NewFolder from './NewFolder';
import File from './File';
import Upload from './Upload';
import UIkit from 'uikit';
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
                UIkit.notification({
                message: 'Failed to load',
                status: 'danger',
                pos: 'bottom-center',
                timeout: 3000
            });
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
            <div className="uk-flex uk-flex-between uk-flex-wrap">
                <p>Current path: {path ? path : '"/"'}</p>
                <div className="uk-flex uk-flex-wrap">
                    <Upload path={path} fetchData={fetchData} />
                    <button className="uk-button uk-button-secondary uk-width-1-1 uk-width-auto@s" onClick={addFolder}>Add a new folder</button>
                </div>
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

                
            </div>
        </div>
    )
}

export default Home;