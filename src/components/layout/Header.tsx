import { ThemeToggle } from "../theme/theme-toggle";

export const Header = () => {
  return (
    <header className="border-b border-b-accent fixed h-20 z-50 top-0 bg-background w-screen flex shadow backdrop-blur-md">
      <div className="container flex items-center py-2 max-w-screen-xl m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">{"</>"}</h2>
        <ThemeToggle />
      </div>
    </header>
  );
};
