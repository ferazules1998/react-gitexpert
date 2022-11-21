import { useEffect, useState } from "react";
import { getgifs } from "../helpers/getGifs";


export const useFetchGifs = (categoria) => {
    const [images, setImages]= useState([]);
    const [isLoading, setIsLoading]= useState(true);


    const getImages = async() => {
        const newImages = await getgifs (categoria);
        setImages(newImages);
        setIsLoading(false);
    }    

    useEffect( () => {
        getImages();
    } , [])

    return{
        images,
        isLoading
    }
}