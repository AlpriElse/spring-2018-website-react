import React from 'react';

export default class Section extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var p = this.props;
    return (
      <section id={p.id} className={p.className}>
        <div className="inner">
          <h2>{p.sectionTitle}</h2>
          <div>
            {p.content}
          </div>
        </div>

      </section>
    );
  }
}
