import image from "@/assets/images/profile-square.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Profile = () => {
  return (
    <div className="m-auto py-10 lg:py-14 px-4 max-w-screen-xl w-full relative mt-20">
      <div className="flex items-center gap-4 w-fit">
        <Avatar size="xl">
          <AvatarImage src={image} />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl font-bold mr">Adrien Miotton</h1>
      </div>
      <h1 className="text-4xl italic mt-4">Fullstack - Web developer</h1>
      <p className="mt-2">
        Hello ! I'm a <b>React</b> web developer on a journey of learning and
        growth. Let's tackle web challenges and learn something new together.
      </p>
    </div>
  );
};
