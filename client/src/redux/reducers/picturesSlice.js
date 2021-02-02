import { createSlice } from '@reduxjs/toolkit';

export const picturesSlice = createSlice({
	name: 'pictures',
	initialState: {
		pictures: [],
		visibleAddModal: false,
		visibleDeleteModal: false,
		isActionFlag: false,
		newPictures: [],
		_id: null
	},
	reducers: {
		getAllPicture: (state, action) => {
			state.pictures = action.payload.data;
			state.newPictures = action.payload.data;
			state.isActionFlag = false;
		},
		getPictureByTitle: (state, action) => {
			state.pictures = action.payload.data;
		},		
		showHideAddModel: (state) => {
			state.visibleAddModal = !state.visibleAddModal;
			state.isActionFlag = true;
		},
		showHideDeleteModel: (state, action) => {
			state.visibleDeleteModal = !state.visibleDeleteModal;
			state._id = action?.payload?._id;
			state.isActionFlag = true;
		}
  },
});

export const { getAllPicture,
	showHideAddModel,
	showHideDeleteModel,
	getPictureByTitle
	} = picturesSlice.actions;
export const selectPictures = state => state.pictures;
export default picturesSlice.reducer;