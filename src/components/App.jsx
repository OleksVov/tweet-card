
import { TweetsGallery } from "./TweetsGallery/TweetsGallery"; 


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <TweetsGallery/>
    </div>
  );
};
