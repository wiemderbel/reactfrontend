import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const Viewcategories = ({ show, handleClose,catId,cat }) => {
  const[categories,setCategories] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    loadCategoris()
  },[]);

  const loadCategoris = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/categorie/${id}`)
      setCategories(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Détails Categoris</Modal.Title>
        </Modal.Header>
        <Modal.Body>{categories.nomcategorie}</Modal.Body>
        <Modal.Body className='text-center'>
        <Card style={{ width: '26rem' }}>
      <Card.Img variant="top" src={categories.imagecategorie} />
      <Card.Body>
        <Card.Title>{cat.nomcategorie}</Card.Title>
       
      </Card.Body>
    </Card> 
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>
  
      </div>
  )
}

export default Viewcategories
