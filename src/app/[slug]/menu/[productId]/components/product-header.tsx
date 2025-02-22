"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "name" | "imageUrl">;
}
const ProductHeader = ({ product }: ProductHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
    const { slug } = useParams<{ slug: string }>();
    const handleOrdersClick = () => router.push(`/${slug}/orders`);
  return (
    <div className="relative min-h-[250px] w-full">
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute left-4 top-4 z-10 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <div className="relative h-[300px] w-full">
        <Image
          src={product.imageUrl}
          fill
          alt={product.name}
          className="object-contain"
        />
      </div>
      <Button
        variant={"secondary"}
        size={"icon"}
        className="absolute right-4 top-4 z-10 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
