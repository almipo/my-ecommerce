import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../data.json'
import ItemList from './ItemList';



//console.log(data)

const ItemListContainer = () => {

    const {category} = useParams();
    const catFilter = data.filter ((dat) => dat.category === category)
    
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
    
    console.log(category)
    
    return (
        <div className='catalogo'>
            {category ? <ItemList data={catFilter} /> : <ItemList data={data} /> }
         </div>
        );
    };


export default ItemListContainer