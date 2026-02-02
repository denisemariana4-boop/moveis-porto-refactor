import { Link } from "react-router-dom";

interface ServiceCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const ServiceCard = ({ slug, title, description, image }: ServiceCardProps) => {
  return (
    <Link to={`/servico/${slug}/`} className="card-service group block">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`/assets/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};
