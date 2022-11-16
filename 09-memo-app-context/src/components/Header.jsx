import { useTheme } from "../hooks/useTheme";

function Header() {
  const { themeStyle } = useTheme();
  return (
    <header className="memo-app-header" style={{ background: themeStyle.background, color: themeStyle.foreground }}>
      <p>Super Simple Memo App</p>
    </header>
  );
}

export default Header;
