import {Component} from "react"
import "./Header.css"

class ProjectItemDetails extends Component {

    state =  {
        projectDetails : {},
        isDarakmode : false
    }

    componentDidMount(){
        this.getItemDetails()
    }

    getItemDetails = async () => {
        const {match} = this.props 
        const {params} = match 
        const {id} = params
      
       const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
       const data = await response.json()
       const updatedData = {
           author : data.author,
           content : data.content,
           avatarUrl : data.avatar_url,
           imageUrl : data.image_url,
           title : data.title,
           topic : data.topic
       }
       this.setState({
           projectDetails : updatedData
       })
    }

    onChangeMode = () => {
        this.setState(prevState => ({
            isDarakmode : !prevState.isDarakmode
        }))
            
        
    }

    render(){
        const {projectDetails,isDarakmode} = this.state
        const {author,content,avatarUrl,imageUrl,topic} = projectDetails
        const btnContent = isDarakmode ? "Dark Mode" : "Light Mode"
        const btnClassName = isDarakmode ? "light-mode" : "dark-mode"
        return(
            <div>
                <div className = {`button-container ${btnClassName}`}>
                     <h1>{topic}</h1>
                     <button type = "button" onClick = {this.onChangeMode}>{btnContent}</button>

                    <div>
                        <img src = {avatarUrl} className = "avatar-image" alt = "avatarImage"/>
                        <p>{author}</p>
                    </div>
                     <img src = {imageUrl} className = "topic-image-bg" alt = "topicImage"/>
                     <p>{content}</p>
                </div>
            </div>
        )
    }
}

export default ProjectItemDetails