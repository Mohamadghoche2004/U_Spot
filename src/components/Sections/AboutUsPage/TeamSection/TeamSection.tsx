"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "./teamSection.css";
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dana al Ghoche",
    role: "Graphic Designer",
    bio: "Dana is a graphic designer with expertise in Adobe Photoshop, Adobe Illustrator, and Adobe InDesign.",
    imageUrl: "none",
  },
  {
    id: 2,
    name: "Mohamad al Ghoche",
    role: "Full Stack Web Developer",
    bio: "A skilled full-stack developer with expertise in modern web technologies, specializing in building scalable applications and implementing efficient solutions across the entire development stack.",
    imageUrl: "/MohamadGhoche.png",
  },
  {
    id: 3,
    name: "Mahmoud Ramadan",
    role: "Full Stack Developer (Web & Mobile)",
    bio: "Mahmoud is a mobile developer with expertise in Flutter, and full stack developer with expertise in modern web technologies, specializing in building scalable applications and implementing efficient solutions across the entire development stack.",
    imageUrl: "/MahmoudRamadan.png",
  },
  {
    id: 4,
    name: "Rafeh Saayfan",
    role: "Full Stack Web Developer",
    bio: "Rafeh is a full-stack developer with expertise in modern web technologies, specializing in building scalable applications and implementing efficient solutions across the entire development stack.",
    imageUrl: "none",
  },
];

export default function TeamSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Team
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Meet the talented individuals who make U_Spot a creative powerhouse. Our
        diverse team brings together expertise in design, development, and
        digital storytelling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: member.id * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            onClick={() =>
              setActiveId(activeId === member.id ? null : member.id)
            }
          >
            <div className="relative h-64 w-full bg-gray-200">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                {/* {member.name[0]} */}
                {/* Image placeholder - replace with actual images */}
                {member.imageUrl !== "none" ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  member.name[0]
                )}
              </div>
            </div>
            <div className="p-6 team-member-card">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-blue-600 mb-2">{member.role}</p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeId === member.id ? "auto" : 0,
                  opacity: activeId === member.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
