import React from 'react'
import data from '../data.json'
import ItemList from './ItemList';



//console.log(data)

const ItemListContainer = ({greeting}) => {
   
    const getData = () =>{
        return new Promise ((resolve, reject)=>{
            if (data.lenght == 0){
                reject (new Error("no hay datos"));
            }
            setTimeout(()=>{
                resolve (data);
            },2000)
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
                <div>
                    <h1>{greeting}</h1>
                    
                    <ItemList data={data}/>
                </div>
        )
    }


export default ItemListContainer