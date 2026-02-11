export default function Filters()
{
    return(
    <div className="w-[100px] h-auto bg-white ml-10 rounded-md"> 
        <div className="grid grid-rows-8 gap-5">
       <div className="flex gap-2"> <img src="../assets/filter.png" className="w-6 h-6"></img>
        <p className="font-semibold font-instrument-sans ">Filter</p>
        <p className="font-semibold font-instrument-sans text-gray-700 text-sm ml-[30px]">Clear</p>
        </div>

                <p className="font-normal font-instrument-sans ">Roast Level</p>



        </div>
    </div>
        );
}