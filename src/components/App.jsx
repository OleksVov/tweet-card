
import { lazy } from "react";
import {SharedLayout} from './SharedLayout/SharedLayout'
import { Route, Routes } from "react-router-dom";


export const App = () => {

const Home = lazy(() => import('pages/Home/Home'));
const TweetPage = lazy(() => import('pages/TweetPage/TweetPage'));

  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   <TweetsGallery/>
    // </div>

    <Routes>
      <Route path="/" element={<SharedLayout/>}>
<Route index element={<Home />}/>
<Route path="tweet" element={<TweetPage/>}/>
      </Route>
    </Routes>
  );
};
