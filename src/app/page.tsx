import Image from "next/image";
// src/app/page.tsx
import Header from '../components/Header';
import Bio from '../components/Bio';
import Table from '../components/Table';


// src/app/page.tsx
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Bio />
      <Table />
    </div>
  );
}
