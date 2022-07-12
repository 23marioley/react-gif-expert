import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; //Por defecto se carga el index.js (archivo de barril) no es necesario especificarlo
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']); //Se crea hook con categorías

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;        
        //No usar push
        setCategories([...categories, newCategory]); //Opción 1
        // setCategories(cat => [...cat, 'Valorant']); //Opción 2
    }

    return (
        <>
            {/* {Título} */}
            <h1>GifExpertApp</h1>

            {/* {Input} */}
            <AddCategory 
                // setCategories={setCategories} //Al hacerlo de esta forma se oculta la implementación
                onNewCategory = {(value) => onAddCategory(value)}
            />

            {/* {Listado de Gif} */}
            {
                categories.map(category => (
                    <GifGrid 
                        key = {category}
                        category = {category} />
                ))
            }

            {/* {Gif Item} */}

        </>
    )
}
