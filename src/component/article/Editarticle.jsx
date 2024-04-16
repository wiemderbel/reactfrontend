import axios from "axios"
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


      

const Editarticle = () => {
  const navigate=useNavigate();

  const [article,setArticle]=useState({
    reference:"",
    designation:"",
    marque:"",
    prix:0,
    qtestock:0,
    imageart:"",
    scategorieID:""
    })
    
  const [scategories,setScategories]=useState([])
  
  const {id} = useParams()

  useEffect(()=> {
    getscat()
    loadArticle()
  },[])
  
  const getscat  = async () =>{
    try {
      const res= await axios.get("http://localhost:3001/api/scategorie")
      setScategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const loadArticle = async() => {
    try {
      const res = await axios.get(`http://localhost:3001/api/article/${id}`)
      setArticle(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const onInputChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
    };
  
    const onSabmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:3001/api/article/${id}`, article);
      navigate("/listart");
      };
  return (
    <div className="container w-50 mt-5 offset-md-3 border rounded p-4 mt-2 shadow">
      <h4 className='text-center mb-4'>Modifier Article</h4>
      <Form  onSubmit={(e) => onSabmit(e)}   >
      <Row className="mb-3">
        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            placeholder="Reference"
            name="reference"
            value={article.reference}
            onChange={(e) => onInputChange(e)}
          />
        </Form.Group>

        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustom03">
          <Form.Control 
          type="text" 
          placeholder="Designation" 
          required
          name="designation"
          value={article.designation}
          onChange={(e) => onInputChange(e)}
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
            name="marque"
            value={article.marque}
            onChange={(e) => onInputChange(e)}
            
          />
        </Form.Group>

        <Form.Group as={Col} md="6" className='mb-3' controlId="validationCustom04">
          <Form.Control 
          type="text" 
          placeholder="Image" 
          required
          name="imageart"
          value={article.imageart}
          onChange={(e) => onInputChange(e)}
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
          name="prix"
          value={article.prix}
          onChange={(e) => onInputChange(e)}
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
          value={article.qtestock}
          onChange={(e) => onInputChange(e)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Designation.
          </Form.Control.Feedback>
        </Form.Group>

      

        <Form.Select as={Col} md="6" aria-label="Default select example"
         type="text" 
         required
         value={article.scategorieID}
         onChange={(e) => onInputChange(e)}
        >
        <option >--- choisir scategories --- </option>
      {scategories.map((scat,index)=> 
      <option key={index} value={scat._id}>{scat.nomscategorie}</option> )}
    
        </Form.Select>

      </Row>
      
      <Button  className='mx-2' variant="success" type="submit">Enregistrer </Button>
      <Link variant="secondary" className="btn btn-secondary " to="/listart">Annuler </Link>

    </Form>
    </div>
  )
}

export default Editarticle
