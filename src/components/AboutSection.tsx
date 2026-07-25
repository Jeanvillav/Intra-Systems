import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white text-[#091124]">
      {/* Header Area */}
      <div className="bg-[var(--color-accent-green)] px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          WHAT DRIVES ME AND HOW I CAN SUPPORT YOU
        </h2>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 w-full space-y-12">
          
          <div>
            <h3 className="font-bold text-xl uppercase mb-2">KEVIN EASTER- CO-FOUNDER OF INTRA SYSTEMS</h3>
            <p className="text-gray-700 leading-relaxed">
              My name is Kevin Easter, Co-Founder of INTRA Systems, and I bring over 20 years of experience in the dental industry, starting in the UK in 1997. I’ve had the privilege of working with some of the biggest names in the field and have spent the last 12+ years specializing in dental lasers for both hard and soft tissue applications.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              I’m passionate about helping dental practices and professionals discover how laser technology can transform patient care and enhance practice efficiency. Let’s explore how I can support your team in leveraging these advancements..
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">MY JOURNEY</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              My journey in the dental industry has been one of growth and discovery. With over 12 years specializing in dental lasers, I’ve witnessed firsthand how this technology can transform patient care and practice efficiency. My mission is to help dental professionals unlock the full potential of lasers, guiding them toward success and innovation in their practices..
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">EDUCATION</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              My formal education and certifications have given me the expertise to provide impactful guidance in dental laser technology.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">MY HOBBIES</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              Beyond my work, I find balance and inspiration in spending quality time with my family and maintaining a healthy, active lifestyle through regular workouts. This commitment keeps me energized but also sharpens my focus and determination, qualities I bring to guiding dental professionals
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">SUPPORT EXPERT</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              As your go-to resource for dental laser technology, I bring years of experience and a genuine passion for helping practices thrive. I'm here to offer friendly, tailored support, providing you with the tools and strategies you need to enhance patient care, boost efficiency, and take your practice to the next level.
            </p>
          </div>

        </div>

        {/* Photo Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center pt-8">
          <div className="w-64 h-80 bg-gray-200 border-4 border-[var(--color-accent-green)] relative rounded-sm shadow-xl overflow-hidden">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-8">
            <a href="#booking" className="bg-[#091124] text-white border-2 border-[#091124] px-8 py-3 uppercase tracking-wider font-bold hover:bg-white hover:text-[#091124] transition-all duration-300 inline-block cursor-pointer">
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
