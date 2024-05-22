import { Route, Routes, BrowserRouter, Router, Link } from 'react-router-dom';
import CrudFeatureLayoutMenu from './CrudFeatureLayoutMenu';
import AddPost from './AddPost';
import UpdatePost from './UpdatePost';
import ViewAllPost from './ViewAllPost';

function Crudfeaturelayout(){
    return(
        <>
      <CrudFeatureLayoutMenu></CrudFeatureLayoutMenu>

{/* <Routes>
      <Route path="/AddPost" exact element={<AddPost />} />
        <Route path="/UpdatePost" exact element={<UpdatePost />} />
        <Route path="/ViewAllPost" exact element={<ViewAllPost />} />
        </Routes> */}
        </>
    );
}

export default Crudfeaturelayout;