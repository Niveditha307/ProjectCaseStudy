import { Component } from "react";
import ProjectItem from "./ProjectItem";
import "./Header.css"

class ProjectCaseStudyList extends Component{

    state = {
        projectList : []
    }

    componentDidMount(){
        this.getProjectDetails()
    }

    getProjectDetails = async () =>{
        const response = await fetch("https://apis.ccbp.in/blogs")
        const data = await response.json()
        console.log(data)

        // from data we got the snake case notation snake notation is used for backend for front end we need to convert Camelcase notation
       const updatedData = data.map(eachProject => ({
           id : eachProject.id,
           author : eachProject.author,
           avatarUrl : eachProject.avatar_url,
           imageUrl : eachProject.image_url,
           topic : eachProject.topic,
           title : eachProject.title

       }))

       this.setState({
           projectList : updatedData
       })
    }

    render(){
        const {projectList} = this.state
        return(
            <div>
                <ul className = "topic-container">
                {projectList.map(eachProject => (
                      <ProjectItem  projectDetails = {eachProject} key = {eachProject.id}/>
                ))}
                </ul>
             
            </div>
        )
    }
}
export default ProjectCaseStudyList