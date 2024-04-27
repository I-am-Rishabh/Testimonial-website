import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => { 
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center" >
      
      
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className=" bg-violet-400 h-[4px]  mx-auto w-[200px] mt-1 "></div>
        <Testimonial reviews={reviews}></Testimonial>{/*component hai thats why only one tag
        answer: yes it and work in single tag as well as pair tag  eg  <tag/> and <tag></tag> both  are correct*/}
      </div>
    
     </div>);
};

export default App;
