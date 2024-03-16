import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <div className="m-auto py-10 lg:py-14 px-4 max-w-screen-xl w-full relative mt-1">
      <h1 className="text-2xl font-bold mt-4">Contact</h1>
      <p className="mt-2">
        Feel free to reach out to me on my social media or via email for any
        inquiries or collaborations. I'm always open to connect!
      </p>
      <div className="flex items-center gap-8 my-8 m-auto">
        <a
          href="https://github.com/lepss"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <Github className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/adrien-miotton-480ba7a5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <Linkedin className="w-10 h-10" />
        </a>
        <a
          href="https://twitter.com/Adrien_Hem"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <Twitter className="w-10 h-10" />
        </a>
        <a
          href="mailto:a.miotton@gmail.com"
          className="hover:text-gray-800 transition-colors duration-200"
        >
          <Mail className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};
