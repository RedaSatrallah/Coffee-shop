import DarkNavbar from "../../components/layouts/DarkNavbar";
import Footer from "./Footer";
export default function PeachLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-peach-light">
        <DarkNavbar /> {children}
        <Footer />
      </div>
    </>
  );
}
