import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import PostsList from './components/PostsList';
import Feed from './components/Feed';
import SinglePostPage from './components/SinglePostPage';
import EditPostForm from './components/EditPostForm';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Feed />} />
      <Route exact path="/post/add/:postId" element={<SinglePostPage />} />
      <Route exact path="/post/change/:postId" element={<EditPostForm />} />
    </Route>
  ))

  return (
    <div style={{margin: '50px 200px'}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
