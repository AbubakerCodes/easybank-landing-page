import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Articles from "../components/Articles";


function Home () {
    return (
        <>
         <HeroSection />
        <Features />
        <Articles />
        </>
    );
}
export {Home};