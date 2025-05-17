"use client"
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './aboutsection.css';
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      });

      // Animate timeline items
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 px-4 md:px-12 section-about overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main heading */}
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Story
        </h2>
        
        {/* Mission statement */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-700 mb-6">
            At U_Spot, we believe in the power of creative collaboration and digital innovation.
            Our mission is to provide a platform where designers, developers, and content creators 
            can come together to build extraordinary digital experiences.
          </p>
          <div className="flex justify-center">
            <span className="h-1 w-32 bg-blue-500 rounded"></span>
          </div>
        </motion.div>
        
        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Innovation",
              description: "We push the boundaries of what's possible in digital design and technology.",
              icon: "🚀",
            },
            {
              title: "Collaboration",
              description: "We believe the best work happens when diverse talents come together.",
              icon: "🤝",
            },
            {
              title: "Excellence",
              description: "We're committed to delivering exceptional quality in everything we do.",
              icon: "✨",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="cards-about p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Company timeline */}
        <h3 className="text-3xl font-bold text-center mb-12">Our Journey</h3>
        <div className="relative overflow-hidden">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {[
              {
                year: "2021",
                title: "The Beginning",
                description: "U_Spot was founded with a vision to create a digital hub for modern creators."
              },
              {
                year: "2022",
                title: "First Major Project",
                description: "Launched our first collaborative platform for designers and developers."
              },
              {
                year: "2023",
                title: "Expansion Phase",
                description: "Grew our team and expanded our services to include video production and 3D design."
              },
              {
                year: "2024",
                title: "Going Global",
                description: "Established partnerships across Europe, Asia and North America."
              },
            ].map((event, index) => (
              <div key={index} className={`timeline-item relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between items-center`}>
                <div className={`hidden md:block ${index % 2 === 0 ? 'order-1' : 'order-3'} w-5/12`}>
                  {index % 2 === 0 ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">{event.year}</div>
                    </div>
                  )}
                </div>
                
                {/* Dot on timeline */}
                <div className="order-2 z-10 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full shadow-md ">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className={`hidden md:block ${index % 2 === 0 ? 'order-3' : 'order-1'} w-5/12`}>
                  {index % 2 === 0 ? (
                    <div className="text-left">
                      <div className="text-3xl font-bold text-blue-600">{event.year}</div>
                    </div>
                  ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  )}
                </div>
                
                {/* Mobile version (simplified) */}
                <div className="md:hidden w-full pl-12">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="text-xl font-bold text-blue-600 mb-1">{event.year}</div>
                    <h4 className="text-lg font-bold mb-1">{event.title}</h4>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 