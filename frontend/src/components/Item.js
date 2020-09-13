import React from 'react';
import './Item.css';

const Item = ({tumb, tags, rating}) => (
	 	<div className="Item">
	 		<img src={tumb}/>
	 		<ul> 
	 			<h3>Tags:</h3> 
	 			{tags.map(tag => <li>{tag}</li>)}
	 		</ul>
	 		<div className="rating"> Rating : {rating} </div>
	 		<button className="edit"> Edit </button>
	 		<button className="fav"> Fav </button>
	 	</div>
)

export default Item;