import ItemDetail from './ItemDetail'
import data from'../data.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ItemDetailContainer = () => {


    const getData = () =>{
        return new Promise ((resolve, reject)=>{
            if (data.lenght == 0){
                reject (new Error("no hay datos"));
            }
            setTimeout(()=>{
                resolve (data);
            })
            
        })
    
    };

    
    async function fetchingData(){
        try{
            const dataFetched = await getData();
            console.log(dataFetched);
        } catch (err){
            console.log(err);
        }
    }
    
    fetchingData()
    
    

    

  

  return (
    <>
    <ItemDetail data={data} />
    
    </>
  );
};

export default ItemDetailContainer