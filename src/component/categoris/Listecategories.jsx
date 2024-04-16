import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Viewcategories from './Viewcategories';

const Listecategories = ({cat,catId}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

const handleClose = () => setShow(false);

  const [categories, setCategories] = useState ([]);

  useEffect(()=>{
    loadCategoris();
  },[])

  const loadCategoris = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categorie")
      setCategories(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error)
    }
  }
  const handelDelete = async ( id ) => {
    try {
      await axios.delete(`http://localhost:3001/api/categorie/${id}`)
      loadCategoris();
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <div className="container">
        <Link to="/inscat">ajouter</Link>
      <Table className='mt-3 text-center align-middle'  striped>
      <thead>
        <tr>
        <th>Image</th>
          <th>Nom </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        categories.map((cat,index)=>(
          <tr key={index}>
          <td><img src={cat.imagecategorie}  width={80} height={80} /></td>
          <td>{cat.nomcategorie}</td>
          <td>
                <Button className="btn btn-info" onClick={() => setShow(true)}>
                  <i className="fa-solid fa-eye"></i>
                </Button>
                <Viewcategories show={show} handleClose={() => setShow(false)} cat={cat} catId={cat._id} />

            <Link className="btn btn-success mx-2" to={`/editcat/${cat._id}`} > 
            <i className="fa-solid fa-pen-to-square"></i>
            </Link>
            <Button onClick={()=> handelDelete(cat._id)}  variant="danger">
            <i className="fa-solid fa-trash-can"></i>
            </Button>
          </td>
        </tr>
        ))
      }
      </tbody>
    </Table>
      </div>
  )
}

export default Listecategories
