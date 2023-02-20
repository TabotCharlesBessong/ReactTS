import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Navbar, Sidebar } from "../components";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";

type Props = {};

const Home = (props: Props) => {
	const dispatch = useAppDispatch();
	const videos = useAppSelector((state) => state.youtubeApp.videos);

	useEffect(() => {
		dispatch(getHomePageVideos(false));
		console.log(videos, "videos");
		// console.log(getHomePageVideos(false))
	}, [dispatch]);
	return (
		<div className="max-h-screen overflow-hidden">
			<div style={{ height: "7.5vh" }} className="">
				<Navbar />
			</div>
			<div style={{ height: "92vh" }} className="flex">
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll
						dataLength={videos.length}
						next={() => dispatch(getHomePageVideos(true))}
						hasMore={videos.length < 500}
						loader={<Spinner />}
						height={650}
					>
						<div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
							{videos.map((item:HomePageVideos) => (
								<Card data={item} key={item.videoId} />
							))}
						</div>
					</InfiniteScroll>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
};

export default Home;
