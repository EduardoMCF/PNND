import React from 'react';
import './Item.css';

const Item = ({tumb, tags, rating}) => (
	 	<div className="Item">
	 		<img src={tumb} className="tumb"/>
	 		<ul className='tagsrating'>
	 			<li>
			 		<ul className="tags"> 
			 			{tags.map(tag => <li className='tag'>{tag}</li>)}
			 		</ul>
			 	</li>
			 	<li>
			 		<div className="rating"> Rating : {rating} </div>
	 			</li>
	 		</ul>
	 		<div className='buttons'>
		 		<button className="edit"> Edit </button>
		 		<button className="fav"> Fav </button>
	 		</div>
	 	</div>
)

export default Item;