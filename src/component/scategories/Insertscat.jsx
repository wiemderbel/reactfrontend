import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


const Insertscat = () => {


  const [imagescategorie,setImagescategorie]=useState("")
  const [nomscategorie,setNomscategorie]=useState("")
  const navigate = useNavigate()


  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const scategorie ={
      nomscategorie:nomscategorie,
      imagescategorie:imagescategorie,
      
    }
    try {
        const res  = await axios.post("http://localhost:3001/api/scategorie",scategorie)
        .then(res =>{
        console.log(res.data)
        navigate ("/listscat")
        })
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='container mt-5  w-50'>
    <Form  >
    
      <Form.Group as={Col} className='mb-3' md="8">
        <Form.Label>Nom</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="nom"
          value={nomscategorie}
          onChange={(e)=>setNomscategorie(e.target.value)}
        />
      </Form.Group>
    
      <Form.Group className='mb-3' as={Col} md="8">
        <Form.Label>Image</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="image" 
        required
        value={imagescategorie}
        onChange={(e)=>setImagescategorie(e.target.value)}
      />
      </Form.Group>

     
    
   
    
    <Button className='mx-2' variant="success" onClick={(e)=> handleSubmit(e)}  type="submit">Ajouter</Button>
    <Link variant="secondary" className='btn btn-secondary' to={"/listscat"}  >Annuler</Link>
  </Form>
  </div>
  )
}

export default Insertscat
