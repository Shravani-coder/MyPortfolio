// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Trophy, Code, Terminal, Medal, GitBranch, GraduationCap } from 'lucide-react';

// const Achievements = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const achievements = [
//     {
//       icon: Trophy,
//       title: 'National Level Examinations',
//       description:
//         'Top ranks in JEE Main 2023 (AIR 3660), JEE Advanced 2023 (AIR 6461) and NTSE Scholarship Rank 126.',
//       color: 'from-yellow-400 to-orange-500',
//       bgColor: 'from-yellow-50 to-orange-50',
//     },
//     {
//       icon: Code,
//       title: 'Competitive Programming',
//       description:
//         'CodeChef 3-Star (#544, #259, #459) and Codeforces Specialist (Max Rank #2860 in Div 1+2).',
//       color: 'from-blue-400 to-cyan-500',
//       bgColor: 'from-blue-50 to-cyan-50',
//     },
//     {
//       icon: Terminal,
//       title: 'DS & Algorithms',
//       description:
//         'LeetCode Rating 1853 (Knight) (Biweekly Contest 429, Rank 2609) demonstrating strong problem-solving skills.',
//       color: 'from-green-400 to-teal-500',
//       bgColor: 'from-green-50 to-teal-50',
//     },
//     {
//       icon: Medal,
//       title: 'Hackathons',
//       description:
//         'Semi-Finalist in Novartis NEST Hackathon – Selected among Top 42 National Teams from over 32k participants.',
//       color: 'from-purple-400 to-pink-500',
//       bgColor: 'from-purple-50 to-pink-50',
//     },
//     ,
//     {
//       icon: GraduationCap,
//       title: 'Academic Excellence',
//       description: 'CGPA: 8.75. Achieved 10/10 in DSA, OOPs, and OS. Secured 9/10 in DBMS, Computer Networks, and Linear Algebra.',
//       color: 'from-purple-500 to-pink-500',
//       bgColor: 'from-purple-50 to-pink-50',
//     },
//   ];

//   return (
//     <section id="achievements" className="py-20 bg-white" ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
//           <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {achievements.map((achievement, index) => {
//             const Icon = achievement.icon;
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className={`group relative bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
//               >
//                 <div
//                   className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <Icon size={32} className="text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code, Terminal, Medal, GitBranch, GraduationCap } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Trophy,
      title: 'National Level Examinations',
      description:
       <>Secured All‑India Rank 4158 in JEE Advanced.<br />Achieved 98.15 percentile in JEE Main.<br />Qualified for NTSE Stage 2 (top 0.5%).</>,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
    },
    {
      icon: Code,
      title: 'Competitive Programming',
      description:
        <>CodeChef 3‑Star (peak rating 1610).<br />Codeforces Specialist (max rank #2860).<br />Regular contest participation and consistent problem‑solving.</>,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Terminal,
      title: 'Data Structures & Algorithms',
      description:
        <>Solved 400+ problems on LeetCode.<br />Scored 9/10 in the DSA course.<br />Strong algorithmic fundamentals and practical coding ability.</>,
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description:
        <>School topper with 97.8% in Class 10.<br />CGPA 9.08 (3rd sem) and 8.67 (4th sem).<br />Top scores in core CS subjects (10/10 in OOPs, 9/10 in Computer Networks & Operating Systems).</>,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: Medal,
      title: 'Hackathons & Major Competitions',
      description:
        <>Top 25 National Finalist at Flipkart Runway 2025 (top 0.05%).<br />National Semi‑Finalist at Tata Steel Women of Mettle (Top 1.3%).<br />2nd Prize at DESIS Ascend Hackathon & Semi‑Finalist at Flipkart Grid 7.0.</>,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: GitBranch,
      title: 'Programs & Scholarships',
      description:
        <>Selected for D.E. Shaw’s DESIS Ascend Educare Program.<br />Chosen for Google Student Launchpad 2025.<br />Named Reliance Undergraduate Scholar (Top 200 nationwide).</>,
      color: 'from-indigo-400 to-violet-500',
      bgColor: 'from-indigo-50 to-violet-50',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${achievement.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
