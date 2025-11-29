import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/mockData";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="bg-card rounded-xl p-4 card-shadow border border-border/50 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Quote className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-sm text-foreground">Đánh giá</h3>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-status-upcoming text-status-upcoming" />
            ))}
          </div>
          <p className="text-sm text-foreground leading-relaxed line-clamp-4">
            "{testimonial.content}"
          </p>
        </div>

        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
            {testimonial.avatar}
          </div>
          <span className="text-sm font-medium text-foreground">{testimonial.name}</span>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-4" 
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
