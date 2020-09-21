import React from 'react';
import Navbar from '../components/Navbar.js';
import './Annotate.css'

const Annotate = () => {
	const menuItens = [{section:'List',route:'/'}, {section:'Annotate',route:'/annotate'}];
	const submit = () => {
		const tags = document.getElementById('tags').value.split(',');
		const rating = parseFloat(document.getElementById('rating').value);
		const tumb = 'capybara.jpg';
		const submitData = JSON.stringify({tags, rating,tumb});

		const request = {
			method: 'post',
			headers:{'Content-Type': "application/json"},
			body: submitData
		}

		fetch('http://localhost:3006/annotations', request)
		.then(response => console.log(response))

	}

	return (
		<div className='bg'>
			<Navbar menu={menuItens}/>
			<section className='annotate'>
				<img src='capybara.jpg'/>
				<ul>
					<li>
						<label for="tags"> Tags </label>
						<input type='text' id='tags' placeholder='tag1, tag2, tag3...'/>
					</li>
					<li>
						<label for="rating"> Rating </label>
						<input type='text' id='rating' placeholder='0.0 - 5.0'/>
					</li>
				</ul>
				<input type="submit" value="Submit" onClick={submit}/>
			</section>
		</div>
	)
}

export default Annotate;