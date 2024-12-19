// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineCardDetails} = props
  const {courseTitle, description, duration, tagsList} =
    courseTimelineCardDetails

  return (
    <div className="card">
      <div className="firstRow">
        <h1>{courseTitle}</h1>
        <div className="duration1">
          <AiFillClockCircle color="#171f46" className="img1" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="style">
        {tagsList.map(eachItem => (
          <div>
            <p className="item" key={eachItem.id}>
              {eachItem.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
