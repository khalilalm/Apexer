import React, { Component } from 'react'
import analysis from "../images/analysis.png"
export const News_Item =({ image, title, subtitle}) =>{
    
        return (
            <div class="flex items-center ">
            <img class=" pt-1 rounded-md self-center w-200 h-200  mx-1" src={image} />
            <div class=" pb-5 flex flex-col ">
              <strong class="text-white-300">{title}</strong>
              <span class="text-black-900">{subtitle}</span>
              <br />
              <div class="flex flex-row">
                <img class="object-bottom w-5 h-5 rounded-full mx-1" src={analysis} />
                <strong>575</strong>
              </div>
              
            </div>
          </div>
        )
    
}
 
export default News_Item;
