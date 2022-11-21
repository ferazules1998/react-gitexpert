import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp=()=>{

    const [categorias, setCategorias]= useState(['Overwatch']);

    const onAddCategoria = (onNewCategory) => {
        if(categorias.includes(onNewCategory)) return;

        console.log(onNewCategory);
        //categorias.push(onNewCategory);
        //categorias.push('Valorant');
        setCategorias([onNewCategory, ...categorias]);
    }
    console.log(categorias);

    return(
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            //setCategorias={setCategorias}
                onNewCategory={(event)=>onAddCategoria(event)}
                currentCategories={categorias}
            />

                    {categorias.map( (categorias) => (
                    <GifGrid 
                    key={categorias} 
                    categoria={categorias}/>
                    )
                    )}

        </>
    )

}