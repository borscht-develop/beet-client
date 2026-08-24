"use client";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
// import AboutUs from "@/components/AboutUs/AboutUs";
// import OurProjects from "@/components/OurProjects/OurProjects";
// import OurOffers from "@/components/OurServices/OurServices";
// import Feedbacks from "@/components/OurFeedbacks/OurFeedbacks";
import Footer from "@/components/Footer/Footer";
import Burger from "@/components/Burger/Burger";
import Form from "@/components/Form/Form";

export default function HomePage() {
  return (
    <div>
      <Header />

      <main>
        <Hero />

        {/* <AboutUs /> */}

        {/* <OurProjects /> */}

        {/* <OurOffers /> */}

        {/* <Feedbacks /> */}
      </main>

      <Footer />

      <Burger />

      <Form />
    </div>
  );
}
