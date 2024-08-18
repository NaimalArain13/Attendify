import HeroSection from "./component/attendifyHero";
import NavBar from "./component/navbar1";

export default function HomePage(){
 
  return(
    <div className="min-h-screen bg-slate-100">
      <NavBar prop={{prop:false}}/>
      <HeroSection />
    </div>
    
    
  )
}