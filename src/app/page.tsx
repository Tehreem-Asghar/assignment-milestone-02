
import Image from "next/image";
 import { FeatureBooks } from "./components/featurebooks";
import Link from "next/link";

const Home = () => {
  return (
    
      <div className="relative">
        <div className="relative">
          <Image
            src={"/Images/homeSec.jpg"}
            alt="homeSec"
            height={200}
            width={400}
            className="h-96 w-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center p-4">
            <h1 className="sm:text-3xl md:text-4xl  lg:text-5xl font-bold font-serif mb-4">
            Master Coding with the Best Programming Books
            </h1>
            <p className=" max-w-2xl md:text-2xl lg:text-3xl">
            From beginner-friendly guides to expert-level programming references, explore our curated collection and take your coding skills to the next level. Start your journey to becoming a coding pro today!
            </p>
            <Link href={'/books'}> 
            <button className="h-auto w-auto p-2 bg-teal-600 rounded-full mt-4">Explore Books</button>
            </Link>
          </div>
        </div>
       <FeatureBooks/>
      
      </div>
     
   
  );
};

export default Home;
