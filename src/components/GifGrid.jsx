import { GifItem } from "./GifItem";
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category); //Custom hook

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //And lógico:  If corto con una sóla condición, si isLoading es true crea el h2
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        // Se exparse image para usar todos sus atributos    
                        />
                    ))
                }
            </div>
        </>
    )
}
