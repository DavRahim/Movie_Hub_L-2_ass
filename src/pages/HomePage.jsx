import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Banner />
    </div>
  );
}
