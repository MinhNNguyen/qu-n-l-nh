import TestimonialCarousel from "./TestimonialCarousel";
import AboutSection from "./AboutSection";

const FooterSection = () => {
  return (
    <section className="px-4 pb-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="flex flex-col gap-4">
        <div className="w-full">
          <AboutSection />
        </div>
        <div className="w-full">
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
