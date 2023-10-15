import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import ReactPlayer from "react-player";

const YoutubeIntegration = () => {
  const [videoId, setVideoId] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const searchVideos = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=AIzaSyA92wEsPxfWT6gQOVkbtH4F-Q9PoqbX_is`
      );

      setVideoList(response.data.items);
    } catch (error) {
      console.error("Error searching videos:", error);
    }
  };

  const handleVideoSelect = (videoId) => {
    setVideoId(videoId);
    setAudioUrl(`https://www.youtube.com/watch?v=${videoId}`);
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const stopVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">YouTube Integration</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for videos..."
          onChange={(e) => searchVideos(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {videoList.map((video) => (
          <div key={video.id.videoId} className="text-center">
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              onClick={() => handleVideoSelect(video.id.videoId)}
              className="cursor-pointer"
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {isPlaying ? (
          <button
            onClick={stopVideo}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={playVideo}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Play Audio
          </button>
        )}
      </div>
      <div className="mt-8">
        {videoId && (
          <div>
            <YouTube videoId={videoId} />
            {/* <ReactPlayer url={audioUrl} controls playing={isPlaying} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default YoutubeIntegration;
