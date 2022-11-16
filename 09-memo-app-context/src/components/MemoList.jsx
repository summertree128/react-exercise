import React from "react";
import { useTheme } from "../hooks/useTheme";

function MemoList(props) {
  const { themeStyle } = useTheme();

  return (
    <ul>
      {props.memos.map((memo) => (
        <li key={memo.id} className="memo-app-list-item">
          <a href="/#" onClick={props.onEdit} data-id={memo.id} style={{ color: themeStyle.foreground }}>
            {memo.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MemoList;
