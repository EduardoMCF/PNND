import React, {useState, useEffect} from 'react';
import './Listing.css';
import ItemList from '../components/ItemList.js';
import Navbar from '../components/Navbar.js';

const Listing = () => {
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(1);
  const menuItens = [{section:'List',route:'/'}, {section:'Annotate',route:'/annotate'}];

  useEffect(() => {
    const getData = async () => {
      let response = await fetch('http://localhost:3006/annotations');
      let data = await response.json();
      setItens(data);
      setLoading(0);
    }
    
    getData()
  },[]);

  return (
    <div className="App">
      <Navbar menu={menuItens}/>
      <div className="queries">
        <input type="text" placeHolder="Search..."/>
        <select name="orderBy">
          <option value="Rating">Rating</option>
          <option value="Data">Data</option>
          <option value="Quantidade">Quantidade de marcações</option>
        </select>
        <select name="order">
          <option value="asc">Ascending</option>
          <option value="dsc">Descending</option>
        </select>
      </div>
      <section className="itens"> 
        {loading ? <h1>Loading</h1> : <ItemList itens = {itens}/>}
      </section>
    </div> 
  );
}

export default Listing;
