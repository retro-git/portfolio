import Link from "next/link";
// import Header from "./Header";
// import Footer from "./Footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}