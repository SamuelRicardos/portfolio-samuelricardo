
'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


export default function Hero() {
    const {scrollY} = useScroll();
    const y   =useTransform(scrollY, [0, 500], [0, 100]);
    return (
        <section className="min-h-screen relative overflow-hidden bg-black">
            <ParticleCanvas/>
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative group lg:w-1/2"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-6xl md:text-8xl font-bold bg-gradient-to-r
        from-primary via-secondary to-tertiary 
        bg-clip-text text-transparent mb-6"
                        >

                            Full Stack

                            <br />

                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="bg-gradient-to-r from-primary via-secondary
        to-tertiary bg-clip-text text-transparent"
                            >
                                Developer
                            </motion.span>

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.1 }}
                            className="text-xl text-content/80 mb-8"
                        >

                            Speciliazing in React, Node.js, and Cloud Architecture.
                            Building scalable application with modern tech stacks.

                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border
       border-white/10 hover:border-primary/30 transition-all group"
                        >
                            <span className="text-content group-hover:text-primary transition-colors">
                                Explore Work
                            </span>
                            <div
                                className="absolute inset-0 bg-gradient-to-r 
        from-primary/10 to-tertiary/10 opacity-0
        group-hover:opacity-100 transition-opacity"
                            />

                        </motion.button>

                    </motion.div>
                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="lg:w-1/2 relative"
                        style={{y}}
                    >
                        <div className="realtive w-full aspect-square group">
                            {/* Animated Border */}
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'mirror'
                                }}
                                className="absoulte inset-0 rounded-3xl
                                    bg-gradient-to-r from-primary/30
                                via-secondary/30 to-tertiary/30
                                 opacity-50"
                            />
                            {/* Floating Animation */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="realtive w-full aspect-square 
                                rounded-3xl overflow-hidden
                                border border-white/10 bg-surface 
                                backdrop-blur-sm"
                            >
                                <Image src="/portfolio.jpg"
                                    alt="Avatar"
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100
                                            transition-transform duration-500" />
                                <div
                                    className="absoulte inset-0 bg-gradient-to-t
                                        from-black/60 to-transparent"
                                />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.6
                                    }}
                                    className="absolute bottom-8 left-8"
                                >

                <div className="text-2xl font-bold text-content">
                    Based in
                    <motion.span
                      className="block bg-gradient-to-r
                       from-primary to-secondary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'mirror'
                      }}
                      style={{
                        backgroundSize: '200% 200%'
                      }}
                    >
                      San Francisco, CA
                    </motion.span>
                  </div>
                 </motion.div>

                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}