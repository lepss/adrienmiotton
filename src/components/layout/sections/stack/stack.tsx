import { StackCard } from "./StackCard";

export const Stack = () => {
  return (
    <div className="m-auto py-10 lg:py-14 px-4 max-w-screen-xl w-full relative mt-1">
      <h1 className="text-2xl font-bold">Technical Stacks</h1>
      <div className="flex space-between gap-4 w-full mt-4 m-auto  flex-wrap">
        <StackCard text="React" />
        <StackCard text="NextJs" />
        <StackCard text="Tailwind" />
        <StackCard text="Typscript" />
        <StackCard text="NodeJS" />
      </div>
    </div>
  );
};
