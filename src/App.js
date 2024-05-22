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
import UserRegistration from './components/crudFeature/UserRegistration';
import UserLogin from './components/crudFeature/UserLogin';
import Dashboard from './components/crudFeature/Dashboard';


function App() {
  return (
    <>   
     <Header></Header>
    
     <Routes>
        <Route path="/crudOperation" exact element={<Crudfeaturelayout />} />
        <Route path="/AddPost" exact element={<AddPost />} />
        <Route path="/ViewAllPost" exact element={<ViewAllPost />} />
        <Route path="/UserRegistration" exact element={<UserRegistration />} />
        <Route path="/UserLogin" exact element={<UserLogin />} />
        <Route path="/dashboard" exact element={<Dashboard></Dashboard>}></Route>
       

        {/* <Route path="/home" exact element={<Home />} /> */}
        <Route path='/redux-example' exact element={<ToDo/>}></Route>

        <Route path='/redux-toolkit-example' exact element={<CounterApp/>}></Route>

      </Routes >

    </>

  );
}

export default App;
