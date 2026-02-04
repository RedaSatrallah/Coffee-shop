import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import BestSellers from "./LandingPageComp/BestSellers";
import HeroSection from "./LandingPageComp/HeroSection";
import HowItWorks from "./LandingPageComp/HowItWorks";
import ProductSection from "./LandingPageComp/ProductSection";
import WhyUs from "./LandingPageComp/WhyUs";

export default  function LandingPage(){
    return<>    
        <Navbar/> 
        <HeroSection/>  
        <BestSellers/> 
        <ProductSection/>
        <HowItWorks/>
        <WhyUs/>
        <Footer/>
    </>
}