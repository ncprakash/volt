'use client'
import Spline from '@splinetool/react-spline';
import Footer from '@/components/footer';
import Link from 'next/link';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Head from 'next/head';
console.log("KEY:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoHome AI | Smart Energy Optimization</title>
        <meta name="description" content="AI-powered environmental monitoring that saves energy while keeping you comfortable" />
      </Head>

      <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        {/* Spline Background Animation */}
        <div className="absolute inset-0 opacity-70">
          <Spline
            scene="https://prod.spline.design/ZHFDFHocpQQx2APu/scene.splinecode"
            className="h-full w-full"
          />
        </div>

        {/* Overlay content */}
        <div className="relative z-10 h-full w-full flex flex-col">
          {/* Auth Buttons on top right */}
          <header className="absolute top-4 right-4 z-20 flex gap-4">
            <SignedOut>
              <SignInButton>
                <button className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition-all border border-white/20">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          {/* Main content */}
          <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  Smart Home
                </span>
                <br />
                Energy Optimizer
              </h1>
              
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Our AI monitors your environment and intelligently controls appliances to reduce energy waste while maintaining perfect comfort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/home"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
                >
                Dashboard
                </motion.button></Link>
                <Link href={"/sign-in"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg border border-white/20"
                >
                  Sign in 
                </motion.button></Link>
              </div>
            </motion.div>
          </main>

          {/* Features grid */}
          <section className="pb-16 px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: '🌡️',
                  title: 'Real-time Monitoring',
                  description: 'Track temperature, humidity, motion and more'
                },
                {
                  icon: '⚡',
                  title: 'Energy Savings',
                  description: 'Reduce consumption by up to 40% automatically'
                },
                {
                  icon: '🤖',
                  title: 'AI Optimization',
                  description: 'Learns your preferences for perfect comfort'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
}