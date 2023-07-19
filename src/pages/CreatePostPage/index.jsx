
// import React, { Component } from 'react';
// import axios from 'axios';
// import PostForm from '../../components/PostForm';
// import { Navigate } from 'react-router-dom';
// import { PATHS } from '../../router/paths';

// class CreatePostPage extends Component {
//   state = {
//     isLoading: false,
//     isGoToListPage: false,
//   };



//   handleCreatePost = async (body) => {
//       this.setState({ isLoading: true });
//     try {
//       const res = await axios.post(
//         'https://some-data.onrender.com/stores',
//         body
//       );
//       this.setState({ isLoading: false, isGoToListPage: true });

//       console.log(res.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };







//   render() {
//     console.log(this.state);
//     return (
//       <div>

//           <PostForm
//           handleSubmit={this.handleCreatePost}
//             isLoading={this.state.isLoading}></PostForm>
          
//         {this.state.isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />}
//       </div>
//     );
//   }
// }

// export default CreatePostPage;
import React, { useState } from 'react';
import axios from 'axios';
import PostForm from '../../components/PostForm';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const CreatePostPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);

  const handleCreatePost = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://some-data.onrender.com/stores',
        body
      );
      setIsLoading(false);
      setIsGoToListPage(true);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <PostForm handleSubmit={handleCreatePost} isLoading={isLoading} />
      {isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />}
    </div>
  );
};

export default CreatePostPage;
