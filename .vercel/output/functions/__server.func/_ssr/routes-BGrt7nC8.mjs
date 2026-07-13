import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as ChevronDown, i as Facebook, n as Menu, o as ArrowUpRight, r as Instagram, t as X } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGrt7nC8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-LRiA_HlC.jpg";
var room_default = "/assets/room-MfbVG3Uu.jpg";
var restaurant_default = "/assets/restaurant-D4NUR9HW.jpg";
var spa_default = "/assets/spa-DxW3Zp-T.jpg";
var experience_default = "/assets/experience-D_b0J7ki.jpg";
var about_default = "/assets/about-OzckL2IO.jpg";
var IMAGES = {
	hero: hero_default,
	room: room_default,
	restaurant: restaurant_default,
	spa: spa_default,
	experience: experience_default,
	about: about_default
};
var NAV = [
	{
		label: "The Hotel",
		href: "#about"
	},
	{
		label: "Rooms",
		href: "#rooms"
	},
	{
		label: "Dining",
		href: "#dining"
	},
	{
		label: "Wellness",
		href: "#wellness"
	},
	{
		label: "Experiences",
		href: "#experiences"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var ROOMS = [
	{
		name: "Classic Room",
		size: "28 m²",
		desc: "Refined interiors dressed in warm neutrals and hand-finished woods, our Classic Rooms offer a serene retreat above the boulevard.",
		price: "From 320 €",
		image: room_default
	},
	{
		name: "Deluxe Suite",
		size: "48 m²",
		desc: "A generous sitting area, marble bath and floor-to-ceiling windows framing the city — a suite that reads like a private residence.",
		price: "From 540 €",
		image: about_default
	},
	{
		name: "Rooftop Penthouse",
		size: "92 m²",
		desc: "Our signature suite crowning the building, with a private terrace, freestanding tub and panoramic skyline views at every hour.",
		price: "From 1,180 €",
		image: experience_default
	}
];
var EXPERIENCES = [
	{
		title: "Private City Tour",
		meta: "Half day · Bespoke"
	},
	{
		title: "Sommelier's Tasting",
		meta: "Evening · Cellar"
	},
	{
		title: "Rooftop Sunset Ritual",
		meta: "Golden hour"
	},
	{
		title: "In-Room Spa Journey",
		meta: "90 minutes"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ivory/95 backdrop-blur-md py-3 border-b border-line" : "bg-transparent py-6"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: `font-serif text-2xl tracking-wide transition-colors ${scrolled ? "text-ink" : "text-ivory"}`,
					children: ["Hotel Sonchiraiya", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1 text-[10px] tracking-[0.4em] align-middle",
						children: "EST. 1952"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-10",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: `text-[11px] font-medium uppercase tracking-[0.28em] link-underline transition-colors ${scrolled ? "text-ink hover:text-bronze" : "text-ivory hover:text-ivory"}`,
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "whatsapp://send?phone=+91-9826054825",
						className: `hidden md:inline-flex items-center px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.28em] border transition-all duration-300 ${scrolled ? "border-ink text-ink hover:bg-ink hover:text-ivory" : "border-ivory/70 text-ivory hover:bg-ivory hover:text-ink"}`,
						children: "Book a Stay"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(true),
						className: `lg:hidden ${scrolled ? "text-ink" : "text-ivory"}`,
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-[60] bg-ink text-ivory animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-6 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-2xl",
					children: "Hotel Sonchiraiya"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col items-center justify-center gap-8 pt-20",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "font-serif text-4xl tracking-wide hover:text-bronze-soft transition-colors",
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					onClick: () => setOpen(false),
					className: "mt-6 border border-ivory/60 px-8 py-3 text-[11px] uppercase tracking-[0.32em]",
					children: "Book a Stay"
				})]
			})]
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: IMAGES.hero,
				alt: "Hotel Sonchiraiya facade at dusk",
				className: "absolute inset-0 h-full w-full object-cover",
				initial: { scale: 1.15 },
				animate: { scale: 1 },
				transition: {
					duration: 2.4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1,
							delay: .6
						},
						className: "text-[11px] font-medium uppercase tracking-[0.4em] text-bronze-soft",
						children: "A Grand Hotel · Since 1952"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: 1.2,
							delay: .85,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[92px]",
						children: [
							"The art of the",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-bronze-soft",
								children: "unhurried"
							}),
							" stay."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: 1,
							delay: 1.3
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#rooms",
							className: "btn-outline",
							children: "Discover Rooms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "text-[11px] uppercase tracking-[0.32em] text-ivory link-underline",
							children: "Reserve a table"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: 1,
					delay: 1.6
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/80",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-5 w-5 animate-bounce" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 origin-left text-[10px] uppercase tracking-[0.4em] text-ivory/70 lg:block",
				children: "Hotel Sonchiraiya"
			})
		]
	});
}
var variants = {
	hidden: {
		opacity: 0,
		y: 24
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .9,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	const Comp = motion[Tag];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants,
		transition: { delay },
		children
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "bg-cream py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] gap-12 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.about,
					alt: "Hotel Sonchiraiya's grand interior",
					className: "aspect-[4/5] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-6 -right-3 hidden bg-ink px-7 py-6 text-ivory md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-3xl italic text-bronze-soft",
						children: "Since 1952"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Hotel"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl",
							children: [
								"A house with a",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-bronze",
									children: "point of view."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-lg text-[15px] leading-relaxed text-ink-muted",
							children: "Hotel Sonchiraiya has welcomed travellers for generations. Its rooms balance considered craft with quiet comfort, making space for every kind of arrival."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#rooms",
							className: "mt-9 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink link-underline",
							children: ["Explore the hotel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
						})
					})
				]
			})]
		})
	});
}
function Rooms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rooms",
		className: "bg-ivory py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 grid grid-cols-1 items-end gap-8 md:mb-24 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Rooms & Suites"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl",
						children: [
							"Rooms that keep",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-bronze",
								children: "their own time."
							})
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-[15px] leading-relaxed text-ink-muted md:justify-self-end",
						children: "One hundred and twenty-six rooms and suites, each dressed by hand — cotton sheets from Portugal, marble from Carrara, and the particular quiet of double-glazed windows over the boulevard."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12",
				children: ROOMS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.image,
									alt: r.name,
									className: "aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-ink",
									children: r.size
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl text-ink",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase tracking-[0.24em] text-bronze",
										children: r.price
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-4 w-12" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[14px] leading-relaxed text-ink-muted",
									children: r.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#book",
									className: "mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ink link-underline",
									children: ["Discover ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					})
				}, r.name))
			})]
		})
	});
}
function Dining() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dining",
		className: "relative bg-ink text-ivory py-28 md:py-40 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 lg:order-1 lg:col-span-6 lg:pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						style: { color: "var(--color-bronze-soft)" },
						children: "Dining"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] md:text-6xl",
							children: [
								"Dinner is served",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-bronze-soft",
									children: "by candlelight."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-10 h-px w-24 bg-bronze-soft/60" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .25,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-lg text-[15px] leading-relaxed text-ivory/75",
							children: "At Salon Sonchiraiya, our chef writes a short daily menu around the market and the cellar — three courses, a good glass of wine, and a room that has kept its promise since 1952."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .35,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid grid-cols-2 gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									name: "Salon Sonchiraiya",
									meta: "Seasonal · Dinner only"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									name: "Bar Alcove",
									meta: "Vermouth · Small plates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									name: "Le Jardin",
									meta: "Breakfast · Courtyard"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
									name: "Rooftop Bar",
									meta: "Cocktails · From 18:00"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .5,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "mt-12 inline-block border border-ivory/60 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-ivory transition-all hover:bg-ivory hover:text-ink",
							children: "Reserve a Table"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "order-1 lg:order-2 lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.restaurant,
					alt: "Salon Sonchiraiya by candlelight",
					className: "aspect-[4/5] w-full object-cover"
				})
			})]
		})
	});
}
function Item({ name, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
		className: "font-serif text-xl",
		children: name
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1.5 text-[10px] uppercase tracking-[0.28em] text-ivory/50",
		children: meta
	})] });
}
function Wellness() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "wellness",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[80vh] min-h-[560px] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMAGES.spa,
					alt: "Hotel Sonchiraiya spa pool",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 md:px-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl text-ivory",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								style: { color: "var(--color-bronze-soft)" },
								children: "Wellness"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-6 font-serif text-4xl leading-[1.05] md:text-6xl",
									children: [
										"Water, stone,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "italic text-bronze-soft",
											children: "and long silences."
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-md text-[15px] leading-relaxed text-ivory/80",
									children: "A vaulted pool, a hammam of warm limestone, and a small team of therapists trained in the old European tradition. Guests receive complimentary access from six in the morning until ten at night."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .3,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#book",
									className: "mt-10 inline-block btn-outline",
									children: "Reserve a Treatment"
								})
							})
						]
					})
				})
			]
		})
	});
}
function Experiences() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experiences",
		className: "bg-cream py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1280px] grid-cols-1 gap-20 px-6 md:px-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Experiences"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl",
							children: [
								"The house, and",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-bronze",
									children: "a city beyond."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-md text-[15px] leading-relaxed text-ink-muted",
							children: "Our concierge keeps a small black book of the city's quieter pleasures — a private opening, a hidden cellar, a garden usually closed to the public."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.experience,
							alt: "Rooftop at golden hour",
							className: "mt-14 hidden aspect-[4/3] w-full object-cover lg:block"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "border-t border-line",
					children: EXPERIENCES.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#book",
							className: "group flex items-center justify-between gap-6 border-b border-line py-8 transition-colors hover:bg-ivory/60 md:py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-6 md:gap-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[11px] text-bronze",
									children: ["0", i + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-2xl text-ink md:text-3xl",
									children: e.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[10px] uppercase tracking-[0.28em] text-ink-muted",
									children: e.meta
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 text-ink transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-bronze" })]
						}) })
					}, e.title))
				})
			})]
		})
	});
}
function Testimonial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-ivory py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 text-center md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "A Guest's Note"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-10 font-serif text-3xl italic leading-[1.25] text-ink md:text-4xl lg:text-5xl",
						children: "“There are hotels one visits, and hotels one returns to. The Hotel Sonchiraiya belongs, without question, to the second kind.”"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.32em] text-ink-muted",
								children: "Condé Nast Traveller"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-line" })
						]
					})
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1280px] grid-cols-1 gap-16 px-6 py-24 md:grid-cols-12 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-4xl",
							children: "Hotel Sonchiraiya"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-[14px] leading-relaxed text-ivory/60",
							children: "A house of quiet grandeur on the grand boulevard, keeping the manners of a hotel from another century."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Instagram",
								className: "rounded-full border border-ivory/30 p-2.5 transition-colors hover:border-bronze-soft hover:text-bronze-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Facebook",
								className: "rounded-full border border-ivory/30 p-2.5 transition-colors hover:border-bronze-soft hover:text-bronze-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						style: { color: "var(--color-bronze-soft)" },
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-6 not-italic text-[14px] leading-relaxed text-ivory/75",
						children: [
							"Gwalior Bypass Circular Road",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Shivpuri, Madhya Pradesh, India",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Open all year"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						style: { color: "var(--color-bronze-soft)" },
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-[14px] text-ivory/75",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+000",
							className: "link-underline",
							children: "+00 000 00 00"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@hotelsonchiraiya.com",
							className: "link-underline",
							children: "hello@hotelsonchiraiya.com"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						style: { color: "var(--color-bronze-soft)" },
						children: "Newsletter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						className: "mt-6",
						onSubmit: (e) => e.preventDefault(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex border-b border-ivory/30 focus-within:border-ivory",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "Your email",
								className: "w-full bg-transparent py-2 text-[13px] text-ivory placeholder:text-ivory/40 outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-[11px] uppercase tracking-[0.24em] text-bronze-soft hover:text-ivory",
								children: "Join"
							})]
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ivory/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 py-6 text-[11px] uppercase tracking-[0.28em] text-ivory/40 md:flex-row md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Hotel Sonchiraiya"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-ivory",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-ivory",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-ivory",
							children: "Press"
						})
					]
				})]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rooms, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dining, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wellness, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experiences, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonial, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
