import axios from 'axios';
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Listearticle = () => {
  const [articles, setArticles] = useState([]); // nesna3 state inisialement vide

  useEffect(() => { // use effect kima ng on init fel angular oi9t tlodi l page
    loadArticles();
    }, []);

    const loadArticles = async () => { //methode pour afficher les article
      try {
        const res = await axios.get("http://localhost:3001/api/article");
        setArticles(res.data); 
        //console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    const handelDelete = async(id) =>{
      try {
        if(window.confirm ("Suprimer article ")){
        await axios.delete(`http://localhost:3001/api/article/${id}`); //altgr 7 bech tnejem yentrepretiha
        loadArticles();
        }
      } catch (error) {
        console.log(error);
      }
    }
    
  return (
    <div className="container mt-5">
      <div className='text-end' >
      <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
      <Link className="btn btn-outline-light bg-success" to="/insart">
      Ajouter article
      </Link>
      </div>
      </nav>
      </div>
      <Table className='mt-3 text-center align-middle shadow-sm p-3 mb-5 bg-body-tertiary rounded' striped>
      <thead>
        <tr>
          <th>Image</th>
          <th>Reference</th>
          <th>Designation</th>
          <th>Marque</th>
          <th>Quantite</th>
          <th>Prix</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { articles.map((art,index) =>(  //.map pour parcourir le tabl
          <tr key={index}>
          <td><img src={art.imageart} width={80} height={80}/></td>
          <td>{art.reference}</td>
          <td>{art.designation}</td>
          <td>{art.marque}</td>
          <td>{art.qtestock}</td>
          <td>{art.prix}</td>
          <td>

          <Link  
            className="btn btn-info "  to={`/viart/${art._id}`}>
              <i className="fa-solid fa-eye"></i>
            </Link>

            <Link className="btn btn-success mx-2" to={`/editart/${art._id}`} > 
            <i className="fa-solid fa-pen-to-square"></i>
            </Link>
            

            <Button onClick={()=> handelDelete(art._id)}  variant="danger">
            <i className="fa-solid fa-trash-can"></i>
            </Button>
          
          </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Listearticle
