import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cardarticle from './Cardarticle'

const Viewarticle = () => {
  const [articles,setArticles]=useState({})
  const {id} = useParams()

  useEffect(() => { // use effect kima ng on init fel angular oi9t tlodi l page
    loadArticles();
    },[]);

    const loadArticles = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/article/${id}`)
        setArticles(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div>
      <Cardarticle articles={articles}/>
    </div>
  )
}

export default Viewarticle
