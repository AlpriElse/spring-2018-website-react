import React from "react";
import Intro from './views/intro.jsx';
import Sidebar from './views/sidebar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Intro/>
      </div>
    );
  }
}
