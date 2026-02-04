import Footer from "../Layouts/Footer";
import Navbar from "../Layouts/Navbar";
import BestSellers from "../components/LandingPageComp/BestSellers";
import HeroSection from "../components/LandingPageComp/HeroSection";
import HowItWorks from "../components/LandingPageComp/HowItWorks";
import ProductSection from "../components/LandingPageComp/ProductSection";
import WhyUs from "../components/LandingPageComp/WhyUs";

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