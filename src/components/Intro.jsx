import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from "react-icons/si";

export default function Intro() {
  return (
    <section id="profile" className="min-h-[80vh] flex items-center justify-center py-12 md:py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-1"
        >
          <div className="relative w-64 h-64 overflow-hidden border-2 border-gray-200 rounded-full shadow-md">
            <Image
              src="/images/mypic.jpg"
              fill={true}
              style={{ objectFit: 'cover' }}
              alt="내 프로필 이미지"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center order-2 md:text-left flex-1"
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-7">
            <span className="inline-block ">안녕하세요,</span><br />
            <span className="inline-block ">Product Engineer를 꿈꾸는</span><br />
            <span className="inline-block ">한사랑입니다.</span>
          </h1>
          <p className="text-lg mb-7">
            문제 해결에 열정을 가진 개발자를 지향합니다.<br />
            사용자 경험을 향상시키는 서비스 개발에 관심이 있습니다.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}