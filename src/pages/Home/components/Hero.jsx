import { useState } from 'react';
import React from 'react';
import './Hero.css';
import imgs from '../../../assets/intermediate-swimming.jpg'

import iMgfb from '../../../assets/footbal.jpg';
import ProductCard from '../components/ProductCard';
import homepic from '../../../assets/Gemini_Generated_Image_6fzx506fzx506fzx.jfif'
function Hero() {
    
    const [Products,setProducts] = useState([
       {id:1,
        name:'choe',
        price:200,
        quantity:30,
        image:"https://images.footballfanatics.com/germany-national-team/dfb-adidas-originals-handball-spezial-trainers-white-unisex_ss5_p-203406755+pv-1+u-krihbroxwowxcwbh5g3h+v-rqbixduo6rzuydpbsssr.jpg?_hv=2&w=1018"
       },
       {
        id:2,
        name:'shirt',
        price:300,
        quantity:20,
        image:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/0ccf400ce2574115aeab452e577cd78b_9366/ALL_SZN_Fleece_Kapuzenjacke_Schwarz_IX3809_01_laydown.jpg"
       },
       {
        id:3,
        name:'bag',
        price:100,
        quantity:10,
        image:"https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ce3c8cb64f749859f4cfb235259bd0f_9366/Terrex_Winter_Leather_Mid_Cut_Rain.Rdy_Cold.Rdy_Wanderschuh_Braun_JR5297_HM1.jpg"
       }
    ])
    
    function Remove(id){
       setProducts(Products.filter(item=>item.id !== id))
    }

    function AddCard(){
setProducts([...Products,{id:4,name:'backpack',price:100,quantity:90}])
    }

    function onIncrease(id){
        setProducts(  Products.map(item=>
            item.id === id ? {...item, quantity :  item.quantity + 1} : item
        ))
      
    }
    
    function onDecrease(id) {
        setProducts(Products.map(item=> 
            item.id === id && item.quantity > 0 ? {...item, quantity : item.quantity - 1} : item
        ))    
        
    }
    
    
    
    return(
        <section>
         
                <div className='heroSection'>
      <div className='boxAbout'>
        <img src={homepic} alt="" />
      </div>
           
           <div className='secondbox'>
            <p style={{color:'grey',fontSize:'small'}}> THE WAY ABOVE MAY KILL YOU</p>
            <h1>Welcome to the Sandbox</h1>
            <p>This project is an interactive deep dive into React state <br />
            From dynamically adding new elements to updating lists without mutating the original data, <br />
            this playground is dedicated to mastering immutable state updates.
            </p>

            <button className='firstbtn'>explore your cards</button>
           </div>
        </div>
<div className='controls'>
      <div className='total' >  Total : {Products.reduce((total,e)=> total + e.quantity,0)} </div>
<button className='inputadd' onClick={AddCard}>Add a card</button>
</div>
  
<div className='conta2'>
   
      {
        Products.map((item)=>(
          <ProductCard key={item.id} name={item.name} price={item.price} quantity={item.quantity} img={item.image}
          onIncrease={()=>onIncrease(item.id)}
          onDecrease={()=>onDecrease(item.id)}
          rm={()=>Remove(item.id)}
          total={ Products.reduce((total,e)=> total + e.quantity,0) }
          
          />
        ))
      }


</div>

       
        </section>
    
       
    )
}

export default Hero