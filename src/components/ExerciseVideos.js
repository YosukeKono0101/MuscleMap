import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchYoutubeVideos } from "../utils/api";

const VideoContainer = styled.div`
  text-align: center;
  margin: 1rem;

  h2 {
    color: #c4161c;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8ox rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  iframe {
    width: 100%;
    height: 225px;
    border-radius: 5px;
  }
`;

function ExerciseVideos({ exerciseName }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetchYoutubeVideos(exerciseName);
      setVideos(data.contents);
    };

    fetchVideos();
  }, [exerciseName]);

  return (
    <VideoContainer>
      <h2>Exercise Videos</h2>
      <VideoGrid>
        {videos.slice(0, 3).map((video) => (
          <VideoCard key={video.video.videoId} className="video-card">
            <iframe
              src={`https://www.youtube.com/embed/${video.video.videoId}`}
              title={video.video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4>{video.video.title}</h4>
          </VideoCard>
        ))}
      </VideoGrid>
    </VideoContainer>
  );
}

export default ExerciseVideos;
