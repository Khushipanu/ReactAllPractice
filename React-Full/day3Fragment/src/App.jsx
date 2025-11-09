import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'
import Errormsg from './components/errormsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'
const App = () => {
  
  // let [text,setText]=useState("value entered by user")
  let [foodItems,setFoodItems]=useState(['Dal','Roti','Dosa','Salad','Paneer'])
//each child in a list must have a unique property
const onKeyDown=(e)=>{
  if(e.key==='Enter'){
    let newFoodItem=e.target.value;
    let newItems=[...foodItems,newFoodItem]
    e.target.value='';
    setFoodItems(newItems);
    console.log(newFoodItem)
  }
  console.log(e.target.value)
  
}
  
return (
  <> 
  <Container>
     <h1>Healthy Food</h1>
     <Errormsg items={foodItems}/>
     <FoodInput handleKeyDown={onKeyDown}/>
     <FoodItems items={foodItems}/>
  </Container> 
  {/* <Container>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, labore? Recusandae, quod ipsa. Qui eligendi incidunt nam! Autem necessitatibus odit debitis placeat incidunt! Nobis reiciendis iure ea id doloremque est.
    Voluptate quibusdam aliquam, deserunt culpa, quod magnam fuga recusandae ex accusantium esse corrupti impedit porro, quisquam architecto? Sapiente suscipit sint asperiores itaque alias neque, reiciendis ducimus. Atque error modi dolorem.
    Similique perferendis itaque repellat facere repudiandae? Repudiandae culpa omnis suscipit vitae ducimus voluptatibus corporis amet, officia totam fuga saepe consectetur voluptatem assumenda dolore commodi molestiae veniam hic, at cum reprehenderit.
    Eum, consequuntur. Doloremque sint temporibus maxime dolores. Unde, quis iste. Sunt ad, beatae debitis reiciendis ex eum veniam eius earum sequi, explicabo, sit asperiores quidem deserunt a sed nulla ab?
    Beatae ea deleniti expedita enim harum sint fuga, sapiente laborum. Voluptas modi consectetur ullam reiciendis amet unde nesciunt cumque tenetur quas dolore. Deleniti veritatis nobis sunt, aliquid quo quidem sed!</p>

  </Container> */}
  </>
   
  )
}

export default App
