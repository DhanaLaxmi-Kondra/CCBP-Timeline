// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineCardDetails} = props
  const {imageUrl, projectTitle, projectUrl, duration, description} =
    projectTimelineCardDetails

  return (
    <div className="cardProject">
      <img src={imageUrl} alt="project" className="image" />
      <div className="firstline">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar color="#171f46" className="img" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>

      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
