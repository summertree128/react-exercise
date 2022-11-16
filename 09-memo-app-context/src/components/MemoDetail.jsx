import { useTheme } from "../hooks/useTheme";

function MemoDetail(props) {
  const { themeStyle } = useTheme();
  return (
    <div className="memo-app-content" style={{ background: themeStyle.background, color: themeStyle.foreground }}>
      {props.memoInput.editing && (
        <form onSubmit={props.onSave} className="memo-app-form">
          <textarea
            name="text"
            onChange={props.onChange}
            value={props.memoInput.text}
            className="memo-app-form-text-area"
            style={{ background: themeStyle.background, color: themeStyle.foreground }}
          />
          <div className="memo-app-button-area">
            <button className="memo-app-save-button">Save</button>
            <button className="memo-app-delete-button" onClick={props.onDelete}>
              Delete
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MemoDetail;
