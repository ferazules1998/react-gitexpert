import { useState } from "react";

export const AddCategory=({onNewCategory})=>{

    const [inputValue, setinputValue]= useState('');

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setinputValue(event.target.value);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //setCategorias
        //setCategorias(categorias => [inputValue, ...categorias]);
        onNewCategory(inputValue.trim());
        setinputValue("");
    }

    return(
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type='text'
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />  
        </form>
        
    )

}