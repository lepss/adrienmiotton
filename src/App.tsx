import "./App.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Contact } from "./components/layout/sections/contact";
import { Profile } from "./components/layout/sections/profile";
import { Projects } from "./components/layout/sections/projects";
import { Stack } from "./components/layout/sections/stack/stack";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Profile />
        <Projects />
        <Stack />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
