import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Projects() {
  // 프로젝트 데이터
  const projects = [
    {
      id: 1,
      title: '프로젝트 제목 1',
      period: '2024.01 - 2024.03',
      description: '이 프로젝트는 사용자 경험을 개선하기 위한 웹 애플리케이션입니다. React와 Node.js를 활용하여 개발했으며, 실시간 데이터 처리와 반응형 디자인을 구현했습니다. 주요 기능으로는 실시간 알림, 사용자 인증, 데이터 시각화 등이 있습니다. 이 프로젝트를 통해 웹 애플리케이션의 전반적인 개발 과정을 경험하고, 팀원들과 함께 협업하는 방법을 배웠습니다.',
      role: '프론트엔드 개발 담당, UI/UX 디자인, API 연동',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: '/images/mypic.jpg',
      github: 'https://github.com/Sarang-Han/project1',
      demo: 'https://project1-demo.com'
    },
    {
      id: 2,
      title: '프로젝트 제목 2',
      period: '2023.09 - 2023.12',
      description: '인공지능을 활용한 데이터 분석 도구입니다. Python과 TensorFlow를 사용했으며, 사용자가 쉽게 데이터를 분석할 수 있는 인터페이스를 제공합니다. 이 프로젝트를 통해 머신러닝 모델을 웹 서비스에 통합하는 방법과 데이터 처리 파이프라인을 구축하는 경험을 쌓았습니다. 대용량 데이터셋을 효율적으로 처리하기 위한 알고리즘 최적화 작업도 진행했습니다.',
      role: '백엔드 개발, 머신러닝 모델 구현, 데이터 처리',
      tech: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: '/images/mypic.jpg',
      github: 'https://github.com/Sarang-Han/project2',
      demo: 'https://project2-demo.com'
    },
    {
      id: 3,
      title: '프로젝트 제목 3',
      period: '2023.06 - 2023.08',
      description: '모바일 환경에 최적화된 서비스 플랫폼입니다. React Native를 사용하여 개발했으며, 사용자 중심의 UI/UX를 구현했습니다. 오프라인 모드 지원, 푸시 알림, 실시간 데이터 동기화 등 모바일 앱에 필요한 주요 기능들을 구현했습니다. 앱 스토어에 배포하는 과정과 사용자 피드백을 바탕으로 한 개선 작업도 경험했습니다.',
      role: '모바일 앱 개발, 사용자 인터페이스 디자인, 테스트 및 배포',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      image: '/images/mypic.jpg',
      github: 'https://github.com/Sarang-Han/project3'
    }
  ];

  // 컨테이너 애니메이션
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // 개별 프로젝트 애니메이션
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-2 text-center"
        >
          프로젝트
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 mb-12 text-center"
        >
          직접 개발한 주요 프로젝트들을 소개합니다
        </motion.p>

        <motion.div 
          className="flex flex-col space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={projectVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative">
                  <div className="relative h-64 md:h-full w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-3/5 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <div className="flex items-center text-gray-500 mt-1 md:mt-0">
                      <FaCalendarAlt className="mr-1" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {project.role && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-1">담당 역할</h4>
                      <p className="text-gray-600">{project.role}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}