import React from 'react'
import data from '../data.json'
import ItemList from './ItemList';



//console.log(data)


const ItemListContainer = () => {
    const sartenes = sartenes
    
    const getData = () =>{
        return new Promise ((resolve, reject)=>{
            if (data.lenght == 0){
                reject (new Error("no hay datos"));
            }
            setTimeout(()=>{
                resolve(data);
            },2000)
        });
    };
    
    async function fetchingData(){
        try{
            const dataFetched = await getData();
            console.log(dataFetched);
        } catch (err){
            console.log(er);
        }
    }
    
    fetchingData()
    
    
    return (
        <div>
            <ItemList sartenes={sartenes}/>
        </div>
    )
}

export default ItemListContainer