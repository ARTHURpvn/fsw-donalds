"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import CartSheet from "./cart-sheet";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">;
}
const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
  const { slug } = useParams<{ slug: string }>();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute left-4 top-4 z-10 rounded-full"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>
        <Image
          src={restaurant.coverImageUrl}
          fill
          alt={restaurant.name}
          className="object-cover"
        />
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute right-4 top-4 z-10 rounded-full"
          onClick={handleOrdersClick}
        >
          <ScrollTextIcon />
        </Button>
      </div>
      <CartSheet />
    </div>
  );
};

export default RestaurantHeader;
