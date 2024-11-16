import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";

function About() {
  return (
    <div className="about-page">
      <Hero
        mainText="Empowering Your Active Lifestyle with Quality Sports Gear"
        subText="At Sportify, we believe in the power of sports to inspire, motivate, and transform. Discover our passion for providing top-tier sports equipment and apparel designed for performance and comfort."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      <section className="about-content position-relative">
        <SectionHeader headerText="About Us" />
        <div className="content py-5 position-relative z-3">
          <div
            className="text-center py-3 w-75 position-relative start-50 translate-middle-x my-3"
            data-aos="fade-up"
          >
            Welcome to Sportify, your ultimate destination for high-quality
            sports equipment and apparel. Our mission is to empower athletes of
            all levels by providing the best gear that enhances performance,
            comfort, and style.
          </div>
          <div
            className="text-center py-3 w-75 position-relative start-50 translate-middle-x my-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Whether you're a professional athlete or just starting your fitness
            journey, we offer a wide range of products tailored to meet your
            needs. From premium workout gear and sports shoes to accessories
            designed for every sport, Sportify has everything you need to
            achieve your fitness goals
          </div>
          <div
            className="text-center py-3 w-75 position-relative start-50 translate-middle-x my-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We believe in the power of sports to transform lives, and we're
            committed to supporting you every step of the way. Our carefully
            curated selection of sports products comes from trusted brands known
            for their durability, innovation, and performance
          </div>
          <div
            className="text-center py-3 w-75 position-relative start-50 translate-middle-x my-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Sportify, customer satisfaction is our top priority. We strive to
            provide a seamless shopping experience, fast delivery, and
            exceptional customer service. Our goal is to help you stay
            motivated, reach your full potential, and enjoy every moment of your
            active lifestyle
          </div>
          <div
            className="text-center py-3 w-75 position-relative start-50 translate-middle-x my-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Join us and take your fitness game to the next level with Sportify!
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
