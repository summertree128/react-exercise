import MemoList from "./MemoList";

function Sidebar(props) {
  return (
    <aside className="memo-app-sidebar">
      <MemoList memos={props.memos} onEdit={props.onEdit} />
      <button onClick={props.onClick} className="memo-app-add-button">
        +
      </button>
    </aside>
  );
}

export default Sidebar;
