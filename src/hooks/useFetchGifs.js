import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => { //Prácticamente una función que devuelve algo, en este caso un objeto

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => { //El hook useEffect sirve para disparar efectos secundarios, proceso a ejecutar cuando algo suceda, en este caso se ejecuta cuando el componente se carga por primera vez
        getImages(); //No es buena práctica poner la llamada a una función dentro de un Functional Component, pues se va estar ejecutando cada que se renderice el componente
    }, []); //Las llaves vacías significa que se dispara la primera vez que se crea el componente (indica dependencias vacías).

    return {
        // images: [images],
        images,
        // isLoading: false
        isLoading
    }
}
