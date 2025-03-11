import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiTistory } from "react-icons/si";

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-4xl font-bold mb-4">안녕하세요, <br></br>Product Engineer를 꿈꾸는 한사랑입니다.</h1>
          <h2 className="text-2xl md:text-2xl text-gray-600 mb-6">컴퓨터공학과 4학년 (재학)</h2>
          <p className="text-lg mb-8">
            문제 해결에 열정을 가진 개발자를 지향합니다. 
            웹 개발과 인공지능에 관심이 많으며, 사용자 경험을 향상시키는 서비스 개발에 관심이 있습니다.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://github.com/Sarang-Han" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://junalis.tistory.com/" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-500 transition-colors">
              <SiTistory />
            </a>
            <a href="mailto:hangpfm0518@ewhain.net" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-blue-500 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-50 h-50 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
            <Image 
              src="/images/profile.png" 
              alt="프로필 이미지" 
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}