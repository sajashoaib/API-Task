import React, { useState, useEffect } from 'react';
import WithParams from '../../components/WithParams';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import axios from 'axios';

const PostPage = (props) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEdit = () => {
    console.log(id, 'is edited');
    setIsEditing(true);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>post {post?.id}</h1>
          <h2>post {post?.title}</h2>
          <p>post {post?.body}</p>
          <button onClick={handleEdit}>Edit</button>
          {isEditing && (
            <Navigate to={PATHS.POSTS.EDIT.replace(':id', id)} replace />
          )}
        </>
      )}
    </div>
  );
};

export default WithParams(PostPage);
