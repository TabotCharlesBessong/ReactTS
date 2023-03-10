import { InitialState } from "../Types";
import {configureStore, createSlice} from '@reduxjs/toolkit'
import { getHomePageVideos } from "./reducers/getHomePageVideos";

const initialState: InitialState = {
	videos: [],
	currentPlayingVideo: null,
	searchTerm: "",
	searchResult: [],
	nextPageToken: null,
	recommendedVideos:[],
};

const YoutubeSlice = createSlice({
  name:'youtubeApp',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(getHomePageVideos.fulfilled,(state,action) => {
      state.videos = action.payload.parsedData
      state.nextPageToken = action.payload.nextPageToken
    })
  }
})

export const store = configureStore({
  reducer:{
    youtubeApp:YoutubeSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch