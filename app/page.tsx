import HeroSection from "./component/attendifyHero";
import NavBar from "./component/navbar1";
import Dashboard from "./dashboard/page";

export default function HomePage(){
 
  return(
    <div className="min-h-screen bg-slate-100">
      <NavBar prop={{prop:false}}/>
      <HeroSection />
      <Dashboard prop={{prop:true}}/>
    </div>
    
  )
}