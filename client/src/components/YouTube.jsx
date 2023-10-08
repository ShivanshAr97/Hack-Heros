// import React, { useState } from "react";
// import axios from "axios";

// const YoutubeIntegration = () => {
//   const [videoId, setVideoId] = useState("");
//   const [videoTitle, setVideoTitle] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleSearch = async (query) => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search`,
//         {
//           params: {
//             q: query,
//             part: "snippet",
//             maxResults: 1,
//             key: "AIzaSyA92wEsPxfWT6gQOVkbtH4F-Q9PoqbX_is", // Replace with your own API key
//           },
//         }
//       );

//       const firstVideo = response.data.items[0];
//       setVideoId(firstVideo.id.videoId);
//       setVideoTitle(firstVideo.snippet.title);
//     } catch (error) {
//       console.error("Error searching for videos:", error);
//     }
//   };

//   const playVideo = () => {
//     setIsPlaying(true);
//   };
//   return (
//     <div>
//       <h1>YouTube Audio Player</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Search for a video..."
//           onChange={(e) => setVideoTitle(e.target.value)}
//         />
//         <button onClick={() => handleSearch(videoTitle)}>Search</button>
//       </div>
//       {videoId && (
//         <div>
//           <h2>{videoTitle}</h2>
//           <div>
//             <iframe
//               title="YouTube Video"
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${videoId}`}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default YoutubeIntegration;

import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import ReactPlayer from "react-player";

const YoutubeIntegration = () => {
  const [videoId, setVideoId] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //   // Initialize with a default video
  //   searchVideos("React JS Tutorial");
  // }, []);

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
    <div>
      <h1>YouTube Integration</h1>
      <div>
        <input
          type="text"
          placeholder="Search for videos..."
          onChange={(e) => searchVideos(e.target.value)}
        />
      </div>
      <div className="video-list">
        {videoList.map((video) => (
          <div key={video.id.videoId}>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              onClick={() => handleVideoSelect(video.id.videoId)}
            />
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
      <div>
        {isPlaying ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={playVideo}>Play Audio</button>
        )}
      </div>
      <div className="video-player">
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
