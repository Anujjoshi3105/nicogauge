import { testimonials } from "@/data/data";
import Image from "next/image";

interface cardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}
const Card = ({ name, title, description, imageUrl }: cardProps) => {
  return (
    <div className="border-2 border-primary m-2 p-5 group relative cursor-pointer overflow-hidden bg-primary pt-10 pb-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl mx-auto sm:max-w-sm rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-background transition-all duration-300 group-hover:scale-[20]"></span>
      <div className="relative z-10 mx-auto max-w-lg">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-color4 transition-all duration-300 group-hover:bg-color2">
          <Image
            src={imageUrl}
            alt={name}
            width={100}
            height={100}
            className="h-20 w-20 text-white rounded-full transition-all filter filter-invert"
          />
        </span>
        <div className="pt-4 text-base text-background transition-all duration-300">
          <div className="group-hover:text-primary">
            <p className="uppercase font-[750]">{name}</p>
            <p>{title}</p>
          </div>
          <p className="pt-4 group-hover:text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="">
      <div className="space-y-2">
        <h4 className="text-lg text-primary font-bold text-center">
          Proud To Present
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          Testimonial
        </h2>
      </div>
      <div
        className="container mx-auto p-1 my-3 grid max-w-7xl lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        id="testimonial">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            description={testimonial.description}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
