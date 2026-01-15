import useFetch from "../hooks/useFetch";
function Menu() {
  const { productlist, isError, isLoading } = useFetch();

  console.log(productlist?.recipes)
  if (isLoading) {
    return (
      <div  className="w-96 p-5 mt-10 m-auto text-2xl  italic" >
        <h1> loading......... </h1>{" "}
      </div>
    );
  }

  return (
    <div>
      {!isError && productlist?.recipes?.length > 0 ? (
        <div className=" flex flex-wrap gap-5 justify-center px-10 p-5">
          {productlist?.recipes?.map((item) => {
            return <div  key={item.id} className="border w-60 shadow-gray-600 flex flex-col justify-center items-center shadow rounded-2xl p-2">
              <img
                className="w-full  rounded-2xl "
                src={item.image}
                alt="product_image"
              />
              <h1 className="text-xl">{item.title}</h1>
                  <h1  className="text-xl" >Rs.{item.caloriesPerServing}</h1>
            </div>;
          })}
        </div>
      ) : (
        <div> Product Not found </div>
      )}
    </div>
  );
}

export default Menu;