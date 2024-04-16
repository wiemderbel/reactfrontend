import  axios  from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Listscat = () => {
  const [scategories,setScategories] = useState([])

  useEffect(() => { // use effect kima ng on init fel angular oi9t tlodi l page
    loadScat();
    }, []);

  const loadScat = async () =>{
    try {
      const res = await axios.get("http://localhost:3001/api/scategorie")
      setScategories(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handelDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3001/api/scategorie/${id}`)
        loadScat();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container mt-5">
      <Link to={"/insertscat"}>Ajouter</Link>
      <table className="table striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            scategories.map((scat,index )=>(
              <tr key={index}>
                  <td><img src={scat.imagescategorie} width={80} height={80}  alt="" /></td>
                  <td>{scat.nomscategorie}</td>
                  <td>
                  <Link
                    className="btn btn-info "  to={`/viscat/${scat._id}`}>
                      <i className="fa-solid fa-eye"></i>
                    </Link>

                    <Link className="btn btn-success mx-2" to={`/editscat/${scat._id}`} > 
                    <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
            
                    <Button onClick={()=>handelDelete(scat._id)}  variant="danger">
                    <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Listscat
