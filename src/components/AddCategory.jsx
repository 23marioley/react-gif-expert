import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); //Hace que no se recargue la página, ya que ese es el evento por default que provoca un submit de un formulario
        if(inputValue.trim().length <= 1) return; //Para insertar una categoría debe de haber más de un caracter en el input
        // setCategories(categories => [inputValue, ...categories]); //Cuando se pasa un hook se puede usar la función de set y lo que tiene categories
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
