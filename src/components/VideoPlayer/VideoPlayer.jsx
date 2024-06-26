import React, { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef(null);

  //Function to pause the video and update play state
  const closePlayer = (e) => {
    if(e.target === player.current) {
      setPlayState(false);
    }
  };

  // useEffect to handle cleanup (pause video)
  useEffect(() => {
    const videoElement = player.current.querySelector('video');
    if (!playState && videoElement) {
      videoElement.pause();
    }
  }, [playState]);

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer