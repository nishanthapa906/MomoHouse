import { useSearchParams } from "react-router-dom";
function Success() {
  const [searchParams] = useSearchParams();
  let res = searchParams.get("data");
  res = atob(res);
  res = JSON.parse(res);
  console.log(res);
  const { status, total_amount, transaction_code } = res;
  console.log(status, total_amount, transaction_code);

  return (
    <div  className="border w-[400px]  shadow rounded-2xl p-3 m-auto mt-10 bg-white flex  flex-col justify-center  items-center" >
      <div className="bg-white">
        <img  className="w-72" src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="image" />
      </div>

      <div  className="pl-2 space-y-2 bg-white" >
        <h1 className="text-2xl  font-bold font-serif"  > Payment is Success !</h1>
        <h1 className="text-2xl  font-bold font-serif"  >Status:-{status}</h1>
        <h1 className="text-2xl  font-bold font-serif"  >Total Amount:-Rs.{total_amount}</h1>
        <h1 className="text-2xl  font-bold font-serif"  >Transaction code:-{transaction_code}</h1>
      </div>
    </div>
  );
}

export default Success;