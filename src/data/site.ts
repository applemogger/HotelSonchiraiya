import hero from "@/assets/hero.jpg";
import room from "@/assets/room.jpg";
import restaurant from "@/assets/restaurant.jpg";
import spa from "@/assets/spa.jpg";
import experience from "@/assets/experience.jpg";
import about from "@/assets/about.jpg";

export const IMAGES = { hero, room, restaurant, spa, experience, about };

export const NAV = [
  { label: "The Hotel", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Wellness", href: "#wellness" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export const ROOMS = [
  {
    name: "Classic Room",
    size: "28 m²",
    desc: "Refined interiors dressed in warm neutrals and hand-finished woods, our Classic Rooms offer a serene retreat above the boulevard.",
    price: "From 320 €",
    image: room,
  },
  {
    name: "Deluxe Suite",
    size: "48 m²",
    desc: "A generous sitting area, marble bath and floor-to-ceiling windows framing the city — a suite that reads like a private residence.",
    price: "From 540 €",
    image: about,
  },
  {
    name: "Rooftop Penthouse",
    size: "92 m²",
    desc: "Our signature suite crowning the building, with a private terrace, freestanding tub and panoramic skyline views at every hour.",
    price: "From 1,180 €",
    image: experience,
  },
];

export const EXPERIENCES = [
  { title: "Private City Tour", meta: "Half day · Bespoke" },
  { title: "Sommelier's Tasting", meta: "Evening · Cellar" },
  { title: "Rooftop Sunset Ritual", meta: "Golden hour" },
  { title: "In-Room Spa Journey", meta: "90 minutes" },
];
