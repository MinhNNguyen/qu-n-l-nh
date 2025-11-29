import TestimonialCarousel from "./TestimonialCarousel";
import AboutSection from "./AboutSection";

const FooterSection = () => {
  return (
    <section className="px-4 pb-8 animate-fade-in" style={{ animationDelay: "500ms" }}>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3">
          <TestimonialCarousel />
        </div>
        <div className="col-span-2">
          <AboutSection />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
