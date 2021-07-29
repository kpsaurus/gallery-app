import React, { useState, useEffect } from 'react';
import client from '../axios/client';
import Folder from './Folder';
import NewFolder from './NewFolder';
import File from './File';
import Upload from './Upload';
import UIkit from 'uikit';
import ItemDetails from './ItemDetails';

function Home() {

    const [items, setItem] = useState([])
    const [newFolder, setNewFolder] = useState({})
    const [path, setPath] = useState('')
    const [itemDetails, setitemDetails]=useState({})
    async function fetchData() {
        await client.post(
            '/',{'path':path}
        ).then(res => {
            if (res) {
                if (res.data.status === 'success') {
                    setItem(res.data.response.contents)
                    if (res.data.response.details) {
                        setitemDetails(res.data.response.details)
                    }
                } else {
                    const errors = res.data.errors
                    for (let i = 0; i < errors.length; i++){
                        for (let j = 0; j < errors[i]['errors'].length; j++){
                            UIkit.notification({
                                message: errors[i].field + ': ' + errors[i]['errors'][j],
                                status: 'danger',
                                pos: 'bottom-center',
                                timeout: 3000
                            });
                        }
                    }
                }
                
            } else {
                UIkit.notification({
                message: 'Failed to load',
                status: 'danger',
                pos: 'bottom-center',
                timeout: 3000
            });
            }

        }).catch(err => {
            UIkit.notification({
                message: 'Failed to load',
                status: 'danger',
                pos: 'bottom-center',
                timeout: 3000
            });
        })
    }

    const addFolder = () => {
        const newFolder = { 'name': 'New Folder' }
        setNewFolder(newFolder)
    }

    useEffect(() => {
        fetchData()
  },[path]);

    return (
        <div>
            <h1 className='uk-text-center uk-margin-top uk-text-success pointer'  onClick={e => setPath('')}>Gallery</h1>
            <hr className="uk-divider-icon uk-margin-remove"></hr>
            <div className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap">
                <p className="uk-margin-remove">Current path: {path ? path : '"/"'}</p>
                {!itemDetails.name ? 
                    <div className="uk-flex uk-flex-wrap">
                    <Upload path={path} fetchData={fetchData} />
                    <button className="uk-button uk-button-secondary uk-width-1-1 uk-width-auto@s" onClick={addFolder}>Add a new folder</button>
                </div>:''
                }
                
            </div>
            <hr className="uk-margin-small"></hr>
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
                    <File file={file} setPath={setPath} />
                    </div>
                )) : ''
            }
                
            </div>
            {
                itemDetails.name ? <ItemDetails path={path} setPath={setPath} details={itemDetails} />:''
            }
        </div>
    )
}

export default Home;