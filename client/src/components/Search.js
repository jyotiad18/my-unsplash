import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { getPictureByTitle, selectPictures} from '../redux/reducers/picturesSlice';

function Search() {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState("");
	const { pictures, newPictures } = useSelector(selectPictures);

	const onSearchHandler = (e) => {
		if (e.key === 'Enter') {			
			if (searchInput === "")
			{
				dispatch(getPictureByTitle({ data: newPictures }));
			} else {
				const filterData = pictures.filter(picture => picture.title.toLowerCase().startsWith(searchInput));
				dispatch(getPictureByTitle({ data: filterData }));
			}				
  		}
		
	}
	return (
		<div className="search">
			<SearchIcon />
			<input type="text" placeholder="Search by name" value={searchInput}
				onChange={(e) => { setSearchInput(e.target.value) }}
				onKeyPress={onSearchHandler}
			/>
		</div>
	)
}

export default Search;
