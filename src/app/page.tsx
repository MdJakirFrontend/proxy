import Count from "@/modules/core/components/sections/Count";
import CustomersChoose from "@/modules/core/components/sections/CustomersChoose";
import Hero from "@/modules/core/components/sections/Hero";
import VisitGuide from "@/modules/core/components/sections/VisitGuide";
import Proxy from "@/modules/core/components/sections/Proxy";
import Faq from "@/modules/core/components/sections/Faq";
import Work from "@/modules/core/components/sections/Work";
import Feature from "@/modules/core/components/sections/Feature";
import Header from "@/modules/core/components/sections/Header";
import Footer from "@/modules/core/components/sections/Footer/Index";


export default function Home() {
  return (
    <main>
      <Header></Header>
      <Hero></Hero>
      <CustomersChoose></CustomersChoose>
      <Count></Count>
      <Feature></Feature>
      <Work></Work>
      <VisitGuide></VisitGuide>
      <Faq></Faq>
      <Proxy></Proxy>
      <Footer></Footer>
    </main>
  );
}
