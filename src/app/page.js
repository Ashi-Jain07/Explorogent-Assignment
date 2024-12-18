import FAQs from "./pages/FAQs";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Intro from "./pages/Intro";


export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <FAQs />
      <Footer />
    </div>
  );
};