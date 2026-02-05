import Footer from "../Layouts/Footer";
import NavbarC from "../Layouts/NavbarC";
import BestSellers from "../components/LandingPageComp/BestSellers";
import HeroSection from "../components/LandingPageComp/HeroSection";
import HowItWorks from "../components/LandingPageComp/HowItWorks";
import ProductSection from "../components/LandingPageComp/ProductSection";
import WhyUs from "../components/LandingPageComp/WhyUs";

export default  function Home(){
    return<>    
        <NavbarC/> 
        <HeroSection/>  
        <BestSellers/> 
        <ProductSection/>
        <HowItWorks/>
        <WhyUs/>
        <Footer/>
    </>
}