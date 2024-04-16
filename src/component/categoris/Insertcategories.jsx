import  axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Insertcategories = () => {

  const [validated, setValidated] = useState(false);

  const [nomcategorie,setNomcategorie] = useState ("")
  const [imagecategorie, setImagecategorie] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }else {
      const categorie = {
        nomcategorie:nomcategorie,
        imagecategorie:imagecategorie,
      }
      try {
        const res = await axios.post("http://localhost:3001/api/categorie",categorie) 
          .then(res =>{
          console.log(res.data)
          navigate ("/listcat")
        })

      } catch (error) {
        console.log(error)
      }
    }

    setValidated(true); }

  return (
    <div className='container mt-5  w-50'>
      <Form noValidate validated={validated} >
      
        <Form.Group as={Col} className='mb-3' md="8">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="nom"
            value={nomcategorie}
            onChange={(e)=>setNomcategorie(e.target.value)}
          />
        </Form.Group>
      
        <Form.Group className='mb-3' as={Col} md="8">
          <Form.Label>Image</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="image" 
          required
          value={imagecategorie}
          onChange={(e)=>setImagecategorie(e.target.value)}
        />
        </Form.Group>
       
      
     
      
      <Button onClick={(e)=> handleSubmit(e)} className='mx-2' variant="success"  type="submit">Ajouter</Button>
      <Link variant="secondary" className='btn btn-secondary' to={"/listcat"} >Annuler</Link>
    </Form>
    </div>
  )
}

export default Insertcategories
