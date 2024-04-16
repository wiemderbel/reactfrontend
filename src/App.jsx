import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listearticle from './component/article/Listearticle';
import Editcategories from './component/categoris/Editcategories';
import Insertscat from './component/scategories/Insertscat';
import Editarticle from './component/article/Editarticle';
import Insertarticle from './component/article/Insertarticle';
import Viewarticle from './component/article/Viewarticle';
import Viewcategories from './component/categoris/Viewcategories';
import Insertcategories from './component/categoris/Insertcategories';
import Listecategories from './component/categoris/Listecategories';
import EditScat from './component/scategories/EditScat';
import Listscat from './component/scategories/Listscat';
import Viewscat from './component/scategories/Viewscat';
import Menu from './component/Menu';
import ListArticleCard from './component/article/ListArticleCard';



function App() {
  

  return (
    <>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/listart" element={<Listearticle/>}/>
          <Route path='/editart/:id' element={<Editarticle/>}/>
          <Route path='/insart' element={<Insertarticle/>}/>
          <Route path='/viart/:id' element={<Viewarticle/>}/>

          <Route path='/editcat/:id' element={<Editcategories/>}/>
          <Route path='/vicat/:id' element={<Viewcategories/>}/>
          <Route path='/inscat' element={<Insertcategories/>}/>
          <Route path='/listcat' element={<Listecategories/>}/>

          <Route path='/insertscat' element={<Insertscat/>}/>
          <Route path='/editscat/:id' element={<EditScat/>}/>
          <Route path='/listscat' element={<Listscat/>}/>
          <Route path='/viscat/:id' element={<Viewscat/>}/>

          <Route path="/listartcard" element={<ListArticleCard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
