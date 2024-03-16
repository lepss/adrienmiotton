import { ThemeProviderContext } from "@/components/theme/theme-provider";
import { useContext } from "react";
// import { ThemeProviderContext } from "./ThemeProvider"; // Ajustez le chemin d'importation selon votre structure de fichiers

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
