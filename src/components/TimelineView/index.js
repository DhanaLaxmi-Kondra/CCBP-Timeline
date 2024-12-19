// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  renderTimeLineObjectCard = item => {
    if (item.categoryId === 'COURSE') {
      return (
        <CourseTimelineCard key={item.id} courseTimelineCardDetails={item} />
      )
    }
    return (
      <ProjectTimelineCard key={item.id} projectTimelineCardDetails={item} />
    )
  }

  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    return (
      <div className="hole-container">
        <h1 className="heading">MY JOURNEY OF</h1>
        <div>
          <h1 className="heading">CCBP 4.0</h1>
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem =>
              this.renderTimeLineObjectCard(eachItem),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
