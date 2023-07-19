
import React, { useState, useEffect } from 'react';
import WithParams from '../../components/WithParams';
import PostForm from '../../components/PostForm';
import axios from 'axios';
import { PATHS } from '../../router/paths';
import { Navigate } from 'react-router-dom';

const EditPostPage = (props) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGotToListPage, setIsGotToListPage] = useState(false);

  const id = props?.params?.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://some-data.onrender.com/stores/${id}`
        );
        setPost(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleEditPost = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `https://some-data.onrender.com/stores/${id}`,
        body
      );
      console.log(res.data);
      setPost(res.data);
      setIsLoading(false);
      setIsGotToListPage(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Edit post {id}</h1>
          <PostForm post={post} handleSubmit={handleEditPost} />
          {isGotToListPage && <Navigate to={PATHS.POSTS.ROOT} replace />}
        </>
      )}
    </div>
  );
};

export default WithParams(EditPostPage);
