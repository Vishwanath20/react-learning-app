import { Route, Routes, BrowserRouter, Router  } from 'react-router-dom';

import React from 'react';
import './App.css';
import Header from './Header';
import Crudfeaturelayout from './components/crudFeature/Crudfeaturelayout';
import AddPost from './components/crudFeature/AddPost';
import UpdatePost from './components/crudFeature/UpdatePost';
import ViewAllPost from './components/crudFeature/ViewAllPost';
// import Home from './components/Home';
import { ReactReduxContext } from 'react-redux';
import ToDo from './redux-example/ToDo';
import CounterApp from './redux-toolkit-example/CounterApp';
import ParentComponent from './props-drilling-example/ParentComponent';
import ParentComponent1 from './props-drilling-example/ParentComponent1';
import UserRegistration from './components/crudFeature/UserRegistration';
import UserLogin from './components/crudFeature/UserLogin';

import RoleBasedMenu from './components/crudFeature/RoleBasedMenu';
import DashBoard from './components/crudFeature/DashBoard';


function App() {
  return (
    <>   
     <Header></Header>
    
     <Routes>
        <Route path="/crudOperation" exact element={<Crudfeaturelayout />} />
        <Route path="/AddPost" exact element={<AddPost />} />
        <Route path="/UpdatePost" exact element={<UpdatePost />} />
        <Route path="/ViewAllPost" exact element={<ViewAllPost />} />

        {/* <Route path="/home" exact element={<Home />} /> */}
        <Route path='/redux-example' exact element={<ToDo/>}></Route>

        <Route path='/redux-toolkit-example' exact element={<CounterApp/>}></Route>

        <Route path='/props-drilling-example' exact element={<ParentComponent/>}></Route>

        <Route path='/context-api-example' exact element={<ParentComponent1/>}></Route>

        <Route path='/userRegistration' exact element={<UserRegistration/>}></Route>
        <Route path='/userLogin' exact element={<UserLogin/>}></Route>
       <Route path="/RoleBasedMenu" exact element={<RoleBasedMenu></RoleBasedMenu>}></Route>
       <Route path="postDashBoard" exact element={<DashBoard></DashBoard>}></Route>
      </Routes >

    </>

  );
}

export default App;
