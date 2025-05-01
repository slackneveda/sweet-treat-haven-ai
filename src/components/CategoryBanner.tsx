
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const CategoryBanner = ({ title, description, image, slug }: CategoryBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg h-60 md:h-80 mb-6 group">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
        <div className="text-white ml-8 md:ml-12 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
          <p className="text-sm md:text-base mb-4 text-gray-100 md:w-3/4">{description}</p>
          <Button asChild className="dessert-button">
            <Link to={`/category/${slug}`} className="flex items-center">
              Explore <ChevronRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
