import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";


function Filter() {
  const navigate = useNavigate();
  const { productlist, isError, isLoading } = useFetch();
  const [filterItem, setFilterItem] = useState([]);
console.log(productlist?.recipes)
  const filterProduct = (cuisine = "American") => {
    let filterItems = productlist?.recipes?.filter((item) => {
      return item.cuisine == cuisine;
    });
    setFilterItem(filterItems);
  };
  useEffect(() => {
    filterProduct();
  }, []);

  return (
    <section className="   bg-white gap-y-5 flex flex-col justify-center items-center p-8">
      <div className="text-center  space-y-4 ">
        <h1 className="text-[39px]">
          Our <span className="text-[#D95103]"> Most Popular</span> Recipes
        </h1>
        <p className="text-[20px]  ">
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>
      </div>
      <div className="space-x-3   ">
        <button
        onClick={()=>{
          filterProduct("American")
        }}
        className="border border-black w-24 rounded-4xl font-bold p-2 ">
          American
        </button>
        <button
        onClick={()=>{
          filterProduct("Italian")
        }}
        className="border border-black w-20 rounded-4xl font-bold p-2 ">
          Italian
        </button>
        <button
        onClick={()=>{
          filterProduct("Indian")
        }}
        className="border border-black w-20 rounded-4xl font-bold p-2 ">
          Indian
        </button>
      </div>
      <div className=" p-2    ">
        {!isError && !isLoading && filterItem?.length > 0 ? (
          <div  className=" flex flex-wrap gap-5 justify-center px-10 p-5" >
            {filterItem?.map((item) => {
              return (
                <div  className="bg-white w-60 shadow-gray-600 flex flex-col justify-center items-center shadow rounded-2xl p-2" >
                  <img className="w-full  rounded-2xl " src={item.image} alt="product_image" />
                  <h1  className="text-xl" >{item.name}</h1>
                  <h1  className="text-xl" >Rs.{item.caloriesPerServing}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1> Product Not found </h1>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/menu");
          }}
          className="bg-[#0C6967] text-[20px]  flex   justify-center items-center  p-5 mt-4 text-white rounded-[100px] "
        >
          Explore Food Menu
          <BsArrowRightShort size={25} />
        </button>
      </div>
    </section>
  );
}

export default Filter;