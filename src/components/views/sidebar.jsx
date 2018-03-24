import React from 'react';
import Section from '../utility/section';

export default class Sidebar extends React.Component {

  render() {
    var content = (
      <nav>
				<ul>
					<li><a href="#intro">Welcome</a></li>
					<li><a href="#news">News</a></li>
					<li><a href="#links">Links</a></li>
					<li><a href="#lectures">Lectures</a></li>
					<li><a href="#officers">Officers</a></li>
					<li><a href="#calendar">Calendar</a></li>
					<li><a href="#photos">Photos</a></li>

				</ul>
			</nav>
    );
    return (
      <Section
        id="sidebar"
        content={content}
        />
    )

  }
}
