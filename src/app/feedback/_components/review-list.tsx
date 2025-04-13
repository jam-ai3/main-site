import { Card, CardContent } from "@/components/ui/card";
import { Rating, RatingView } from "./feedback-form";

type Review = {
  rating: number;
  message: string;
  createdAt: Date;
  user: {
    email: string;
  };
};

type ReviewListProps = {
  reviews: Review[];
};

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="gap-4 grid grid-cols-3">
      {reviews.map((review) => (
        <Card key={review.user.email}>
          <CardContent className="space-y-2">
            <p className="font-semibold">{review.user.email}</p>
            <p className="text-muted-foreground">
              {review.createdAt.toLocaleDateString()}
            </p>
            <RatingView rating={review.rating as Rating} />
            <p>{review.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
