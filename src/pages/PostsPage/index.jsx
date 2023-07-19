import React, { Component, useEffect, useState } from 'react';
import Tables from '../../components/Tables';
import {POSTS_COLUMNS} from "../../constants/posts"
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';


const PostsPage=()=>{
  const [posts,setPosts]=useState([]);
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(null);
  const [rowId, setRowId] = useState(null);
  const[isCreating,setIsCreating]=useState(false);



  useEffect(()=>{   (async ()=>{
    try {
      const {data}= await axios.get('https://some-data.onrender.com/stores');
      setPosts(data);
    } catch (error) {
      setError(error.message);
    }finally{
      setIsLoading(false );
    }
  })();},[]);
  

  const handeldelete=async(id:any)=>{
    console.log(id,'is deleted');
    setIsLoading(true);
    try{
     await axios.delete(`https://some-data.onrender.com/stores/${id}`);
      setPosts(posts.filter((post:never)=>post.id != id));
    }
    catch(err){
     console.log(err);
    }finally{
      setIsLoading(false);
    }
  };
  const handeledit=async(id:any)=>{
    console.log(id,'is edited') 
  };
  const handelview=async(row:any)=>{
    console.log(row.id,'is viewd')
    setRowId(row.id);

  }
  return (
    <div>
      <h1>posts</h1>
      <button onClick={() => setIsCreating(true)}>Create Post</button>
       <Tables columns={POSTS_COLUMNS(handeldelete,handeledit)} data={posts}
       onRowClick={handelview}
        isLoading={isLoading}/>
            {rowId && <Navigate to={`${rowId}`} />}
            {isCreating && <Navigate to={PATHS.POSTS.CREATE} replace />}


      
    </div>
  );
};



export default PostsPage;