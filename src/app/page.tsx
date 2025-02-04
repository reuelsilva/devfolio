"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useScroll from "./hooks/useScroll";

export default function Home() {
  useScroll();

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}
