import { useTheme } from "../hooks/useTheme";
import MemoList from "./MemoList";

function Sidebar(props) {
  const { themeStyle } = useTheme();
  return (
    <aside className="memo-app-sidebar"  style={{ background: themeStyle.background, color: themeStyle.foreground }}>
      <MemoList memos={props.memos} onEdit={props.onEdit} />
      <button onClick={props.onClick} className="memo-app-add-button">
        +
      </button>
    </aside>
  );
}

export default Sidebar;
