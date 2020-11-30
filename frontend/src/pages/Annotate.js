import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

import Navbar from '../components/Navbar.js';
import ReactImageAnnotate from "react-image-annotate";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

import './Annotate.css'

const Annotate = () => {
	const {id} = useParams();
	console.log('ID is ' + id);
	const [image, setImage] = useState('');
	const [annotationParams, setAnnotationParams] = useState({});
	const [loading, setLoading] = useState(1);
	const menuItens = [{section:'List',route:'/'}, {section:'Annotate',route:'/annotate/2'}];
	
	useEffect(async () => {
		const getData = async () => {
			let response = (id === undefined ? 'capybara.jpg' : 'cows.jpg')
			//let response = await fetch(id === undefined : 
			setImage(response);
			setLoading(0);
			console.log('resp',response);
			
			//let data = await response.json();
			//setItens(data);
			//setLoading(0);
		}
		
		getData()
		console.log('img '+ image);
	},[]);
	
	const submit = () => {
		const tumb = '';
		const submitData = JSON.stringify();

		const request = {
			method: 'post',
			headers:{'Content-Type': "application/json"},
			body: submitData
		}

		fetch('http://localhost:3006/annotations', request)
		.then(response => console.log(response))
	}

	const textInputStyle = {
		id: 'description',
		label: 'Description',
		color: 'secondary',
		style: {width: '80%'}
	}
	const buttonStyle = {
		id: 'submit',
		onClick: submit,
		startIcon: <SendIcon/>,
		variant: 'contained',
		color: 'secondary',
		style: {width: '15%'}
	}

	var test = {};
	const save = (data) => {
		console.log(data.images);
		console.log(JSON.stringify(data.images[0].regions))
		test = data.images;
		console.log(JSON.stringify(test.regions));
	}
	


	return (
		<div className='bg'>
			<Navbar menu={menuItens}/>
			{loading ? <h1> Loading </h1> : (
			<section className='annotate'>
				<ReactImageAnnotate 
					labelImages
					regionClsList={['Human','Animal','Object','Other']}
					regionTagList={['Man','Woman','Child','Cat','Dog','Aligator']}
					onExit={save}
					images={[
						{
							src: 'cows.jpg',
							name: "Image",
							regions: []
						}
					]}
					
				/>
				<Box display='flex' justifyContent='center' mt={2}>
					<TextField {...textInputStyle}/>

				</Box>
				<Box display='flex' justifyContent='center' mt={2}>
					<Button {...buttonStyle}> SEND </Button>
				</Box>
			</section>)
			}
		</div>
	)
}

export default Annotate;