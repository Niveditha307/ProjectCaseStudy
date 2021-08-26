import {BrowserRouter,Route,Switch} from "react-router-dom"
import ProjectCaseStudyList from "./components/ProjectCaseStudyList"
import ProjectItemDetails from "./components/ProjectItemDetails"
import Header  from "./components/Header";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Switch>
     <Route exact path = "/" component = {ProjectCaseStudyList}/>
     <Route exact path = "/blogs/:id" component = {ProjectItemDetails}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
