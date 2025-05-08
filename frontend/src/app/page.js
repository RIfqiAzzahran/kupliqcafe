// app/page.js
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/hero3";
import Button from './components/Button';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="">
      <div className="w-full min-h-screen flex flex-col justify-center items-center p-6 bg-[url('/images/img_coffeeimage.png')] bg-cover bg-center">
        <div className="flex justify-start items-start w-full px-24">
          <Hero />
        </div>
      </div>
      
      <div className="bg-white pt-5 ">
        <div className="flex justify-start items-start w-full px-45">
          <Hero2 />
        </div>
      </div>

      <div className="bg-white">
        <img src="/images/img_coffee_blast.png" alt="Coffee Splash" className="w-[500px] h-auto" />
      </div>  

      <div className="bg-white pb-20">
        <div className="flex justify-start items-start w-full px-45">
          <Hero3 />
        </div>
      </div>

      <div className="bg-white">
        <img src="/images/img_coffee_blast_2.png" alt="Coffee Splash" className="w-[500px] h-auto" />
      </div> 

    </div>
  );
};

export default Home;
