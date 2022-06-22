import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GiffApp = () => {

  const [categories, setCategories] = useState([ 'Los simpson' ]);
  
  const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories]);
  }

  return (
    <>
      <h1>GiffApp</h1>

      <AddCategory 
        onNewCategory={ newCategory => onAddCategory(newCategory) }
      />

      {
        categories.map( category => 
          <GifGrid 
            key={ category }
            category={ category }
          />
        )
      }
    
    
    </>
  )
}

