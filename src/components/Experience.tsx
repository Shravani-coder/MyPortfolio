
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const FlipkartExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Flipkart — Software Developer Intern
          </h2>
          <p className="text-sm text-gray-600">
            SDE Intern • May 2025 – Jul 2025 • Bengaluru, India
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-10"
        >
          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* LEFT: Text content */}
            <div className="md:col-span-3 text-gray-700">

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Project — OpenDiffy Extension (API Regression Testing)
              </h3>
              <p className="text-sm mb-5">
                Built an end-to-end pipeline to capture, persist and report API diffs so QA could detect regressions faster.
              </p>

              {/* Use-case */}
              <p className="font-medium text-gray-900 mb-1">Use-case</p>
              <p className="text-sm mb-4">
                Compare API versions by replaying traffic and surface regressions without affecting production.
              </p>

              {/* Tech stack */}
              <p className="font-medium text-gray-900 mb-1">Tech stack</p>
              <p className="text-sm mb-5">
                Python, MongoDB (buffer), MySQL (analytics), Next.js + Tailwind (dashboard), OpenDiffy.
              </p>

              {/* Problems & Solutions */}
              <p className="font-medium text-gray-900 mb-2">Problems & Solutions</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Ephemeral runs lost data → Persisted raw diffs to MongoDB and analytics to MySQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Poor traceability → Added dual IDs (RunID + RequestID).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Manual reporting → Automated ingestion & report generation using Python.</span>
                </li>
              </ul>

              {/* Impact */}
              <p className="font-medium text-gray-900 mt-5 mb-1">Impact</p>
              <p className="text-sm">
                Saved ~10+ developer-hours per cycle and sped up regression triage by ~40% via dashboarded metrics.
              </p>

              {/* Key contributions */}
              <p className="text-sm mt-5 text-gray-800">
                <strong>Key contributions:</strong> Extended OpenDiffy, implemented RunID + RequestID traceability,
                integrated MongoDB + MySQL, automated ingestion & built dashboard.
              </p>
            </div>

            {/* RIGHT: Image placeholder */}
            <div className="md:col-span-2">
              <div className="w-full h-64 md:h-full rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
               <img
      src="/assets/img/My_Image.jpeg"
      alt="Flipkart Internship"
      className="w-full h-full object-cover"
    />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlipkartExperience;

