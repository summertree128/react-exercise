import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvier";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
