import React from "react";

class MemoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <ul>
        {this.props.memos.map(memo => (
          <li key={memo.id}>
            {memo.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default MemoList;