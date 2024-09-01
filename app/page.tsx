"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FirstSection from '@/components/first-section';
import SecondSection from '@/components/second-section';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <FirstSection/>
      <SecondSection/>
    </main>
  );
}
