import Hero from "../components/Hero";
import ProductIntro from "../components/ProductIntro";
import News from "../components/News";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { getSortedPostsData } from "../lib/posts";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen">
      <Hero />
      <ProductIntro />
      <News posts={allPostsData} />
      <ContactForm />
      <Footer />
    </main>
  );
}