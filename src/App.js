import Accordian from './components/accordian';
import Treeview from './components/tree-view';
import GithubProfileFinder from './components/git-profile-finder';
import menus from "./components/tree-view/data";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
     <Accordian/>

     
     {/*  Tree view component/menu UI component / recursive navigation menu  */}
     <Treeview menus={menus}/>

 {/* Github profile finder */}
 <GithubProfileFinder/>

    
    </div>
  );
}

export default App;
