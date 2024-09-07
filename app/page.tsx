"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FirstSection from '@/components/first-section';
import SecondSection from '@/components/second-section';
import FinalSection from '@/components/final-section';
import Footer from '@/components/footer';

export default function Home() {

  return (
    <main className="flex min-h-screen bg-black flex-col">
      <FirstSection/>
      <SecondSection/>
      <FinalSection/>
      <Footer/>
    </main>
  );
}
