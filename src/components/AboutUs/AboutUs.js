"use client";
import React, { useState, useEffect } from "react";
import {
  Recycle,
  Leaf,
  RefreshCw,
  Package,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    id: "stat-members",
    number: "25K+",
    label: "Eco-Conscious Members",
    icon: <Leaf className="h-6 w-6 text-green-600" aria-hidden="true" />,
    bgColor: "bg-green-100",
  },
  {
    id: "stat-waste",
    number: "1M+",
    label: "Pounds of Waste Reduced",
    icon: <Package className="h-6 w-6 text-green-600" aria-hidden="true" />,
    bgColor: "bg-green-100",
  },
  {
    id: "stat-guides",
    number: "100+",
    label: "Sustainability Guides",
    icon: <Recycle className="h-6 w-6 text-green-600" aria-hidden="true" />,
    bgColor: "bg-green-100",
  },
  {
    id: "stat-projects",
    number: "50+",
    label: "Community Projects",
    icon: <Users className="h-6 w-6 text-green-600" aria-hidden="true" />,
    bgColor: "bg-green-100",
  },
];

const resources = [
  {
    id: "res-reduce",
    IconComponent: Package,
    title: "Waste Reduction Plans",
    description:
      "Step-by-step programs to help you minimize household waste and live more sustainably.",
  },
  {
    id: "res-reuse",
    IconComponent: RefreshCw,
    title: "Creative Reuse Strategies",
    description:
      "Innovative approaches to repurpose items and extend their lifecycle.",
  },
  {
    id: "res-recycle",
    IconComponent: Recycle,
    title: "Recycling Challenges",
    description:
      "Structured programs to help you establish responsible recycling habits.",
  },
];

const values = [
  {
    id: "val-reduce",
    IconComponent: Package,
    title: "Waste Reduction",
    description:
      "We help you minimize waste through conscious consumption and smarter purchasing decisions.",
  },
  {
    id: "val-reuse",
    IconComponent: RefreshCw,
    title: "Resource Reuse",
    description:
      "Our community shares creative ways to repurpose items and extend their usefulness.",
  },
  {
    id: "val-recycle",
    IconComponent: Recycle,
    title: "Responsible Recycling",
    description:
      "We educate on proper recycling practices to ensure materials get a second life.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section
        aria-labelledby="about-hero-heading"
        className="relative py-20 bg-green-100"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Building a Sustainable Future
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              At Loopstr, we're creating a movement for responsible consumption
              through reducing waste, reusing resources, and proper recycling.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="py-16 bg-white">
        <h2 id="stats-heading" className="sr-only">
          Our Impact in Numbers
        </h2>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center p-6 bg-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="py-20 bg-green-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2
                id="mission-heading"
                className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
              >
                Our Core Philosophy
              </h2>
              <p className="text-gray-800 text-lg mb-8">
                In a world of excessive consumption, we help you adopt the 3Rs:
                Reduce, Reuse, Recycle. Through practical guides and community
                initiatives, we empower you to:
              </p>
              <div className="space-y-6">
                {values.map(
                  ({ id, IconComponent, title, description }, index) => (
                    <div key={id} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg bg-green-200 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <IconComponent className="h-6 w-6 text-green-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-700 mb-2">
                          {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Person sorting recyclable materials"
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="offerings-heading" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2
            id="offerings-heading"
            className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Our Sustainability Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Practical tools and knowledge to help you live more sustainably
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(
              ({ id, IconComponent, title, description }, index) => (
                <div
                  key={id}
                  className={`bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">{description}</p>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors mt-auto group"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn more
                    <ArrowRight
                      className="w-5 h-5 ml-1 transition-transform transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="py-20 bg-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Ready to Embrace Sustainable Living?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of eco-conscious individuals and start your
            journey toward zero-waste living today.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors duration-300"
          >
            Begin Your Sustainability Journey
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
