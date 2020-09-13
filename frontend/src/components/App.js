import React from 'react';
import './App.css';
import ItemList from './ItemList.js';
import Navbar from './Navbar.js';

const App = () => {
  const itens = [
    {id : 1, tumb : 'cows.jpg', tags : ['cow'], rating : 4.2},
    {id : 2, tumb : 'man_and_dog.jpg', tags : ['man','dog'], rating : 4.9},
    {id : 3, tumb : 'celtinha.png', tags : ['car'], rating : 2.3}
  ];
  const menuItens = [{section:'Tela1',href:'#'}, {section:'Tela2',href:'#'}, {section:'Tela3',href:'#'}];

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
        <ItemList itens = {itens}/>
      </section>
    </div> 
  );
}

export default App;
