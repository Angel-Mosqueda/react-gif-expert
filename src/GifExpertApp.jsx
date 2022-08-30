import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; //si la categoria existe, no se inserta
        console.log(newCategory)
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* esta forma oculta la implementacion y es un poco mas dificil de entender como funciona le compoenente */}
            {/* <AddCategory setCategories={setCategories}/>  */}
            {/* Forma mas optima: */}
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    ))
                }
        </>
    )
}
