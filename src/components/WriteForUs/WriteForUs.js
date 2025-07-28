"use client";
import {
  BookOpen,
  PenSquare,
  Check,
  X,
  FileText,
  Mail,
  CalendarDays,
} from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="write-for-us-heading"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Write for Us – Sustainability & Circular Living
            </h1>
            <p className="text-lg text-gray-700 mx-auto max-w-2xl">
              At Loopstr, we're building a community of change-makers focused on
              sustainable living, reducing waste, and protecting our planet.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600">
                If you’re passionate about sustainability, zero-waste hacks,
                recycling innovation, or creating a greener world, we want to
                hear from you! At Loopstr.co, we welcome contributors who want
                to share ideas, stories, and solutions that inspire responsible
                consumption and meaningful impact.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-green-900 flex items-center">
                  <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                  Submission Guidelines
                </h2>
              </div>
              <div className="p-6 space-y-4 text-gray-600">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Only submit original, unpublished work.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Articles should be 800–1200 words, written in clear,
                      engaging English.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Include subheadings, lists, and relevant images where
                      possible.
                    </span>
                  </li>
                </ul>

                <p className="text-gray-700 font-semibold mt-6">
                  Topics We Love:
                </p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Zero-waste living",
                    "Sustainable fashion or upcycling",
                    "Plastic-free lifestyle",
                    "Innovative recycling or reuse strategies",
                    "Green entrepreneurship",
                    "Circular economy case studies",
                    "Composting, minimalism, and eco-tech",
                  ].map((topic) => (
                    <li className="flex items-start" key={topic}>
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-green-900">
                  Content Restrictions
                </h2>
              </div>
              <div className="p-6">
                <p className="font-medium text-gray-800">We do not accept:</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  {[
                    "Greenwashing content",
                    "Overly promotional or affiliate-based posts",
                    "Unverified or misleading claims",
                    "Adult/gambling/crypto-related content",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-green-900">
                  How to Submit
                </h2>
              </div>
              <div className="p-6 space-y-3 text-gray-600">
                <p>Email your article or pitch to:</p>
                <p>
                  <a
                    href="mailto:hello@loopstr.in"
                    className="text-green-600 hover:underline font-medium"
                  >
                    hello@loopstr.in
                  </a>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Include your full draft or outline.</span>
                  </li>
                  <li className="flex items-start">
                    <PenSquare className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Short bio + links to past work or website (if available).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <CalendarDays className="h-5 w-5 text-green-600 mr-2" />
                Editorial Process
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>
                    We review all submissions within 3–5 business days.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>
                    Accepted posts may be lightly edited for clarity, tone, and
                    SEO.
                  </span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>
                    Due to volume, we may not respond to all submissions.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
              <strong>Note:</strong> We prioritize content that educates and
              empowers readers toward sustainable action. Let your words make a
              difference!
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteForUs;
