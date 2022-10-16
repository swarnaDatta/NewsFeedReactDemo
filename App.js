import picture from './fbpost.png';
import './App.css';

function Countlike(){

}
function Reaction(){
  return(
    <div className="ReactionContainer">
      <button className="reacting" onClick={Countlike}>Like</button>
      <button className="reacting">Comment</button>
      <button className="reacting">Share</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div id="posts"><h3 id="postSpan">Posts</h3></div>
      <div className="PostContainer">
        <h2 className="username">Mark Zuckerberg </h2>
        <p className="description">Excited to share our progress building the metaverse and unveil our new virtual reality headset tomorrow at Meta Connect. See you at 10am PT!</p>
        <img src={picture} alt="Picture" />
      </div>
      <Reaction/>
    </div>
  );
}

export default App;
