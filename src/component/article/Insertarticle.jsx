import axios from 'axios';
import  { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';



const Insertarticle = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);
  }

  const [reference,setReference]=useState("")
  const [marque,setMarque]=useState("")
  const [designation,setDesignation]=useState("")
  const [prix,setPrix]=useState(0)
  const [qtestock,setQtestock]=useState(0)
  const [imageart,setImageart]=useState("")
  const [scategorieID,setScategorieID]=useState("")

  const [scategories,setScategories]=useState([])

  const navigate = useNavigate()

  //methode pour recuperer la liste des scat
  const getscat  = async () =>{
    try {
      const res= await axios.get("http://localhost:3001/api/scategorie")
      setScategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getscat()
  })

const handleSubmite =async(e) =>{
  e.preventDefault()
  const article = {
    reference:reference,
    marque:marque,
    designation:designation,
    prix:prix,
    qtestock:qtestock,
    imageart:imageart,
    scategorieID:scategorieID
  }
  try {
    const res = await axios.post("http://localhost:3001/api/article",article)
      .then(res  => {
        console.log(res.data)
        navigate ("/listart")
    })
  } catch (error) {
    console.log(error)
  }
}
  
  
  return (
    <div className="container w-50 mt-5 offset-md-3 border rounded p-4 mt-2 shadow">
      <h4 className='text-center mb-4'>Ajout Article</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit}  >
      <Row className="mb-3">
        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Reference"
            value={reference}
            onChange={(e)=>setReference(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom03">
          <Form.Control 
          type="text" 
          placeholder="Designation" 
          required
          value={designation}
          onChange={(e)=>setDesignation(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Designation.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom02">
          <Form.Control
            required
            type="text"
            placeholder="Marque"
            value={marque}
            onChange={(e)=>setMarque(e.target.value)}
            
          />
        </Form.Group>

        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Control 
          type="text" 
          placeholder="Image" 
          required
          value={imageart}
          onChange={(e)=>setImageart(e.target.value)} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Image.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Control 
          type="number" 
          placeholder="Prix" 
          required 
          value={prix}
          onChange={(e)=>setPrix(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Prix.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom03">
          <Form.Control 
          type="number" 
          placeholder="Quantite stock" 
          required
          value={qtestock}
          onChange={(e)=>setQtestock(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Designation.
          </Form.Control.Feedback>
        </Form.Group>

      

        <Form.Select as={Col} md="6" aria-label="Default select example"
         type="text" 
         required
         value={scategorieID}
        onChange={(e)=>setScategorieID(e.target.value)}
        >
        <option >--- choisir scategories --- </option>
      {scategories.map((scat,index)=> 
      <option value={scat._id}>{scat.nomscategorie}</option> )}
    
        </Form.Select>

      </Row>
      
      <Button onClick={(e)=> handleSubmite(e)}  className='mx-2' variant="success" type="submit">Valider </Button>
      <Link variant="secondary" className="btn btn-secondary " to="/listart">Annuler </Link>

    </Form>
    </div>
  )
}

export default Insertarticle
