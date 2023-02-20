
export interface InitialState  {
  videos:HomePageVideos[]
  currentPlayingVideo:CurrentPlaying | null
  searchTerm:string
  searchResult:[]
  nextPageToken:string | null
  recommendedVideos:RecommendedVideos[]
}

export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}