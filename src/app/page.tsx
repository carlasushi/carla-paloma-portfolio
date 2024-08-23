// src/app/page.tsx
import React from 'react';
import Header from '../components/Header';
import Bio from '../components/Bio';
import Table from '../components/Table';
import Footer from '../components/Footer';
import FadeInSection from '../components/FadeInSection';
import MoreAboutCarla from '../components/MoreAboutCarla';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <FadeInSection>
        <Bio />
      </FadeInSection>
      <FadeInSection>
        <Table />
      </FadeInSection>
      <FadeInSection>
        <MoreAboutCarla />
      </FadeInSection>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
