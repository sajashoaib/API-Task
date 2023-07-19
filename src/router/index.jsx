import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';
import EditPostPage from '../pages/EditPostPage';
import CreatePostPage from '../pages/CreatePostPage';

import { PATHS } from './paths';
import InfoPage from '../pages/InfoPage';

const Router = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path={PATHS.ABOUT} element={<AboutPage />} />
      <Route path={PATHS.INFO} element={<InfoPage/>}/>
      <Route path={PATHS.POSTS.ROOT} element={<Outlet />}>
        <Route index element={<PostsPage />} />
        <Route path={PATHS.POSTS.VIEW} element={<PostPage />} />
        <Route path={PATHS.POSTS.EDIT} element={<EditPostPage />} />
        <Route path={PATHS.POSTS.CREATE} element={<CreatePostPage />} />
      </Route>
      <Route
        path='*'
        element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
      />
    </Routes>
  );
};

export default Router;