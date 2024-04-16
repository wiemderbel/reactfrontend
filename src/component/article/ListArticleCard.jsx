
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardArt from './CardArt';


const ListArticleCard = () => {
   
    const [articles , setArticles]=useState([])

    useEffect (()=>{
        loadArticles()
    } ,[]) 

    const loadArticles = async() =>{
        try {
            const res = await axios.get("http://localhost:3001/api/article")
            .then(res =>{
                setArticles(res.data)
                console.log(res.data)
             })
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div className='container mt-5'>
       <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>

      {
        articles.map((art,index) =>(
          < CardArt index={index} art={art} />
        ))
      }
        </div>
    </div>
  )
}

export default ListArticleCard
