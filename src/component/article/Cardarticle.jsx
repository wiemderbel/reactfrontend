import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cardarticle =  ({articles}) => {
  return (
    <div   className='container'  >
      <div className="row">
        <div className="col-md-4 offset-md-2 border rounded p-4 mt-4 mb-4 shadow">
        <Card   style={{ width: '18rem' }}>
      <h5 className="text-center m-4">Détails Article</h5>

      <Card.Img variant="top" src={articles.imageart}  />
      <Card.Body>
        <Card.Title>{articles.referance} </Card.Title>

        <Card.Text>
          {articles.designation}
        </Card.Text>
        <Card.Text>
        <b>Prix: {articles.prix} DT</b>
        </Card.Text>
        <Link className="btn btn-primary my-2" to={"/listart"}>
        Retour
        </Link>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
  )
}

export default Cardarticle
