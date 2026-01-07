import React from 'react';
import Experiences from '../components/home/Experiences';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
        <audio autoPlay loop id="bg-audio">
          <source src="/audio/audio-clip.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Hero />
        <Highlights />
        <Experiences />
        <Testimonials />
    </>
  );

}
