import React, { Component } from "react";


export default class Intro extends Component {
  render() {
    return (
      <section id="intro" className="wrapper fullscreen fade-up" style={{"backgroundImage":"url(http://i65.tinypic.com/11hrqsl.jpg)"}}>
						<div className="inner">
							<div className="row">
								<div className="col-sm-4">
									<img align="right" style={{"width":"12em"}} src ="https://imgur.com/5GdDgzX.png"/>
								</div>
								<div className="col-sm-8">
									<h1 style={
                    {"fontSize":"45pt"},
                    {"fontWeight":"200"},
                    {"marginBottom":"0"}}>CS196@Illinois</h1>
									<p>Illinois' premier freshman honor class by students, for students.</p>
									<ul className="actions">
										<li><a href="#news" className="button scrolly" style={{"fontSize": "8pt"}}>News</a></li>
										<li><a href="#lectures" className="button scrolly" style={{"fontSize":"8pt"}}>Lectures</a></li>
									</ul>
								</div>
							</div>
						</div>
					</section>
    );
  }
}
