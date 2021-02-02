import React from 'react';
import { useSelector } from 'react-redux';
import './PhotoGrid.css';
import Photo from "../components/Photo";
import { selectPictures } from '../redux/reducers/picturesSlice';

function PhotoGrid() {
	const { pictures } = useSelector(selectPictures);

	return (
		<div className="photoGrid">
			{
				pictures.length > 0 && pictures.map((picture) => (
					<Photo
						key={picture._id}
						_id={picture._id}
						title={picture.title}
						url={picture.url}
				    />
				))
			}		
  		</div>
	)
}

export default PhotoGrid;
