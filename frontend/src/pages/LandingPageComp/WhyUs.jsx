import original from "../../assets/original.png";
import quality from "../../assets/quality-control.png";
import handshake from "../../assets/handshake.png";

export default function WhyUs() {
  return (
    <section className="bg-[#ffffff] py-20">
      <h2 className="text-center text-brown text-xl tracking-widest mb-12 font-semibold">
        WHY US ?
      </h2>
<div className="flex justify-center gap-8 ">
      <div className="flex-col ">
        <img src={original} alt="Original" className="w-[160px] h-[160px] ml-16" />
        <p className="font-instrument-sans text-sm w-[300px] font-thin text-center mt-5">
        Carefully sourced beans from the world’s finest coffee-growing regions, 
        chosen for their unique flavor and character.</p>
      </div>

        <div className="flex-col ">
        <img src={quality} alt="quality" className="w-[160px] h-[160px] ml-16" />
        <p className="font-instrument-sans text-sm w-[300px] font-thin text-center mt-5">
            Roasted in small batches to preserve aroma, freshness, and balance in every cup.</p>
      </div>

        <div className="flex-col ">
        <img src={handshake} alt="trust" className="w-[160px] h-[160px] ml-16" />
        <p className="font-instrument-sans text-sm w-[300px] font-thin text-center mt-5">
        Committed to transparency, consistency, and lasting relationships with growers and customers alike.</p>
      </div>
      </div>

      <div className="mx-[400px] my-16  flex flex-col items-center">
     <hr className=" border-t-1 w-[600px]  border-brown rounded-full" /> 
     <p className="text-3xl text-center w-full font-instrument-sans my-10 italic">Elevate your coffee experience.</p>
     <button className="bg-brown text-white rounded-lg px-5 py-2 font-instrument-sans font-medium ">Subscribe</button>
     </div>


     
      
    </section>
  );
}
