import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
//import { BookingBar } from "@/components/site/BookingBar";
import { About } from "@/components/site/About";
import { Rooms } from "@/components/site/Rooms";
import { Dining } from "@/components/site/Dining";
import { Wellness } from "@/components/site/Wellness";
import { Experiences } from "@/components/site/Experiences";
import { Testimonial } from "@/components/site/Testimonial";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Sonchiraiya — A Grand Hotel Since 1952" },
      {
        name: "description",
        content:
          "Hotel Sonchiraiya is a house of quiet grandeur — rooms, dining, wellness and experiences.",
      },
      {
        property: "og:title",
        content: "Hotel Sonchiraiya — A Grand Hotel Since 1952",
      },
      {
        property: "og:description",
        content:
          "Rooms, dining, wellness and experiences at Hotel Sonchiraiya. The art of the unhurried stay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory text-ink">
      <Navbar />
      <Hero />
      {/* <BookingBar /> */}
      <About />
      <Rooms />
      <Dining />
      <Wellness />
      <Experiences />
      <Testimonial />
      <Footer />
    </main>
  );
}
