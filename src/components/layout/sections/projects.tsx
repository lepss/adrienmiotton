import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Projects = () => {
  return (
    <div className="m-auto py-10 px-4 max-w-screen-xl w-full relative mt-1">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p>
        Take a moment to explore my diverse web projects – each one is a step in
        my journey of growth and creativity. Dive in and see what I've been up
        to!
      </p>
      <div className="p-10">
        <Carousel className="w-full max-w-5xl m-auto">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/1 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
