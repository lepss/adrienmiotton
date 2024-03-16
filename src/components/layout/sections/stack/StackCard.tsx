import { Card, CardContent } from "@/components/ui/card";

export const StackCard = ({ text }: { text: string }) => {
  return (
    <div>
      <Card>
        <CardContent className="flex aspect-video items-center justify-center p-12">
          <span className="text-2xl font-semibold">{text}</span>
        </CardContent>
      </Card>
    </div>
  );
};
