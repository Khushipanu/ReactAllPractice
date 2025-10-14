function Product({title,price,features}){
    //style
    let styles={backgroundColor:price>3000?"yellow":""}
   
           return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            {price>3000 && <p>Discount of 5% </p>}

        </div> 
    ) 

    }
    
 

export default Product;