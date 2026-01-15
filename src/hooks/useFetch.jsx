import { useEffect, useState } from "react";

const useFetch = () => {
    const [productlist, setProductList] = useState([]);
    const [isError, setIsError] = useState([false]);   //initial case ma false
    const [isLoading, setIsLoading] = useState([false]);
    const getData = async () => {

        try {
            setIsLoading(true);
            let res = await fetch('https://dummyjson.com/recipes')
            res = await res.json();

            console.log(res)
            setProductList(res);
            setIsLoading(false);
            setIsError(false);
        }

        catch (error) {
            console.log(error);
            setIsError(true);
            setIsLoading(false);
        }

    };

    useEffect(() => {
        getData();
    }, []);

    return {
        productlist,
        isError,
        isLoading
    };

};

export default useFetch