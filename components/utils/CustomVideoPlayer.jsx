'use client'
import React, { useState, useRef } from 'react';

const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullScreen(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    videoRef.current.currentTime = 0;
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressBarClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
    const progressBarWidth = progressBar.offsetWidth;
    const seekTime = (clickPosition / progressBarWidth) * duration;

    videoRef.current.currentTime = seekTime;
  };

  return (
    <div className='relative h-full'>
        {!isPlaying && (
        <div className='absolute flex h-full w-full justify-center items-center'>
          <svg
            className='scaling fill-white'
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
          </svg>
        </div>
      )}
      <video
        ref={videoRef}
        onClick={handlePlayPause}
        className="w-auto h-full z-20 object-bottom"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <div className='absolute controls flex md:gap-6 bottom-8 md:left-6 px-5 md:px-0  w-full md:w-auto justify-between '>
          <button className='playerButton' onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button className='playerButton' onClick={handleMuteUnmute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
        <div className='absolute cursor-pointer bottom-0 left-0 right-0'>
          <div
            className='bgAlmostWhiteLight h-2'
            onClick={handleProgressBarClick}
          >
            <div
              className='bgAlmostWhite h-2'
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
