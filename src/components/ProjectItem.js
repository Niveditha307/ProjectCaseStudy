import "./Header.css"
import {Link} from "react-router-dom"
const ProjectItem = (props) => {
    const {projectDetails} = props 
    const {title,author,avatarUrl,imageUrl,topic,id} = projectDetails

    return(
        <Link to = {`/blogs/${id}`}>
       <li className = "container">
           <div className = "card-container">
               <div className = "image">
                    <img src = {imageUrl} className = "topic-image" alt = "topicImage"/>
               </div>
               <div className = "card-topic-container">
                   <p>{topic}</p>
                   <h3>{title}</h3>
                   <div className = "avatar-container">
                       <img src = {avatarUrl} className = "avatar-image" alt = "avatarImage "/>
                       <p className = "author-name">{author}</p>
                   </div>
               </div>
           </div>
          
       </li></Link>
    )

}
export default ProjectItem