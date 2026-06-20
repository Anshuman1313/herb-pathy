"use client";

import { StaggeredGrid, BentoItem } from "@/components/ui/staggered-grid";
import { Star, Heart, MessageCircle } from "lucide-react";
import SmoothScroll from "../ui/smooth-scroll";

type TestimonialsGridProps = {
  totalImages?: number;
  centerText?: string;
};

export default function TestimonialsGrid({
  totalImages = 10,
  centerText = "TESTIMONIALS",
}: TestimonialsGridProps) {

  // Generate images dynamically
  const images = Array.from(
    { length: totalImages },
    (_, i) => `/ttss/${i + 1}.png`
  );

  const bentoItems: BentoItem[] = [
    {
      id: 1,
      title: "Happy Customers",
      subtitle: "Real Reviews",
      description: "Loved by cake lovers across the city.",
      icon: <Heart className="w-5 h-5 fill-red-500 stroke-0" />,
      image: "/proof/4.jpeg",
    },
    {
      id: 2,
      title: "5 Star Taste",
      subtitle: "Quality Guaranteed",
      description: "Fresh ingredients, unforgettable flavors.",
      icon: <Star className="w-5 h-5 fill-yellow-400 stroke-0" />,
      image: "/proof/5.jpeg",
    },
    {
      id: 3,
      title: "Customer Stories",
      subtitle: "Sweet Moments",
      description: "Every cake tells a delicious story.",
      icon: <MessageCircle className="w-5 h-5 fill-gray-100 stroke-0" />,
      image: "/proof/1.jpeg",
    },
  ];

  return (
    <SmoothScroll>
      <div className=" ">
        <StaggeredGrid
          images={images}
          bentoItems={bentoItems}
          centerText={centerText}
        />
      </div>
    </SmoothScroll>
  );
}