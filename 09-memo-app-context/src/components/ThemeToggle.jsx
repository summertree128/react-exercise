import { useTheme } from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, themeStyle, toggleTheme } = useTheme();
  const checked = theme === "dark";

  return (
    <div className="memo-app-theme-toggle">
      <input type="checkbox" name="darkmode" id="darkmode" checked={checked} onChange={toggleTheme}/>
      <label htmlFor="darkmode" className="memo-app-theme-toggle-label" style={{ color: themeStyle.foreground }}>Dark Mode</label>
    </div>
  );
}

export default ThemeToggle;
