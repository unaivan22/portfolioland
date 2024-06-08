import { Asterisk, Github, Linkedin, MailCheck, SquareAsterisk, Twitter } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);

  const openExpand = () => {
    setIsExpanded(true);
  };

  const closeExpand = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeExpand();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeExpand();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div className="flex items-center justify-center h-screen relative">
      <motion.div
        ref={containerRef}
        className={`rounded-[32px] mylime shadow  pt-2 pb-2 overflow-hidden relative flex flex-col items-center justify-between ${
          !isExpanded ? 'cursor-pointer px-2' : 'px-4 pt-4'
        }`}
        initial={{ width: '90px', height: '52px' }}
        animate={{ width: isExpanded ? '380px' : '110px', height: isExpanded ? '220px' : '56px' }}
        transition={{ type: 'spring', stiffness: 1000, damping: 120 }}
        onClick={!isExpanded ? openExpand : undefined} // Only open when not expanded
      >
          <div className="flex items-center justify-between gap-x-2 w-full">
            <div className="flex gap-x-2 items-center">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1676385901184-b1884f3f2979?q=80&w=2458&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div>
                <div className='flex gap-x-1'>
                  <h5 className="text-sm font-semibold">Anna</h5>
                  {isExpanded && (
                  <h5 className="text-sm font-semibold">White</h5>
                  )}
                </div>
                {isExpanded && (
                <p className="text-xs opacity-50">Design Engineer</p>
                )}
              </div>
            </div>
            {isExpanded && (
            <Asterisk />
            )}
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 1 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-y-6 px-2 w-[360px] mx-auto py-4">
                <p className="text-xs">
                  As the lead design engineer at Parcal, I specialize in crafting and constructing user interfaces. Lately, my passions have extended to weightlifting, pickleball, and mastering the Chinese language.
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      variants={animations}
                      initial="initial"
                      animate="animate"
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex justify-between w-full gap-x-2 px-2">
                        <a href="https://twitter.com/" target="_blank" className="flex flex-col items-center gap-y-1">
                          <SquareAsterisk className="h-6 w-6 hover:-rotate-[24deg] transition ease-in-out delay-200" />
                          <p className="text-[.6rem]">Website</p>
                        </a>
                        <div className="divide-y bg-zinc-500 w-[1px] max-w-[2px] opacity-30"></div>
                        <a href="https://github.com/" target="_blank" className="flex flex-col items-center gap-y-1">
                          <Github className="h-6 w-6 hover:rotate-[24deg] transition ease-in-out delay-200" />
                          <p className="text-[.6rem]">Github</p>
                        </a>
                        <div className="divide-y bg-zinc-500 w-[1px] max-w-[2px] opacity-30"></div>
                        <a href="https://twitter.com/" target="_blank" className="flex flex-col items-center gap-y-1">
                          <Twitter className="h-6 w-6 hover:rotate-[24deg] transition ease-in-out delay-200" />
                          <p className="text-[.6rem]">Twitter (X)</p>
                        </a>
                        <div className="divide-y bg-zinc-500 w-[1px] max-w-[2px] opacity-30"></div>
                        <a href="https://linkedin.com/" target="_blank" className="flex flex-col items-center gap-y-1">
                          <Linkedin className="h-6 w-6 hover:rotate-[24deg] transition ease-in-out delay-200" />
                          <p className="text-[.6rem]">Linkedin</p>
                        </a>
                        <div className="divide-y bg-zinc-500 w-[1px] max-w-[2px] opacity-30"></div>
                        <a href="mailto:someone@example.com" className="flex flex-col items-center gap-y-1">
                          <MailCheck className="h-6 w-6 hover:rotate-[24deg] transition ease-in-out delay-200" />
                          <p className="text-[.6rem]">Mail me</p>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
