import './App.css';
// import ProfileList from './components/ProfileList';
import ProfileStack from './components/ProfileStack';

function App() {
  
  return (
    <>
    {/* <ProfileList /> */}
    <ProfileStack />
    <p Style="position:absolute;top:0%;left:50%;transform:translate(-50%, 0%);z-index:-9999">
      Refresh to get the cards again :) 
    </p>
    </>
  );
}

export default App;
