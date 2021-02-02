import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Header from './pages/Header';
import PhotoGrid from './pages/PhotoGrid';
import Modal from './components/Modal';
import AddPhoto from './components/AddPhoto';
import DeletePhoto from './components/DeletePhoto';
import { selectPictures, getAllPicture } from './redux/reducers/picturesSlice';
import axios from './axios';

function App() {
  const dispatch = useDispatch();
  const { visibleAddModal, visibleDeleteModal, isActionFlag } = useSelector(selectPictures);  
      
  useEffect(() => {  
    async function getAllPhoto() {
      const url = "/pictures";
      const resp = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' }
      });
      dispatch(getAllPicture({ data: resp.data.data }));
    }
    getAllPhoto();  
  }, [dispatch, isActionFlag])  
  
  
    return (
    <div className="app">
        <Header/>
        {visibleDeleteModal ? 
          <Modal width={"620px"}  height={"276.12px"}
          Component={<DeletePhoto />}        
        /> : null}       
        {visibleAddModal ?
          <Modal width={"620px"}  height={"367.2px"}
          Component={<AddPhoto />}        
      /> : null}
      <PhotoGrid />
        <div className="app__footer">
            Jyoti ADHIAKRI@DevChallenges.io
        </div>  
    </div>
  );
}

export default App;
