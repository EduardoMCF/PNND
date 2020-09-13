import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ itens }) => (
		<section className="List">
			{itens.map(({id, tumb, tags, rating}) => <Item key={id} tumb={tumb} tags={tags} rating={rating} />)}
		</section>
)

export default ItemList;