import React, { useRef, useState } from "react";
import melody from "../assets/melodyplayer.cyber.mp3";
import "./style.scss";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);


  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="player-wrapper flex justify-center items-center gap-1">
      <audio ref={audioRef} src={melody} loop />
      <button
        className="shadow-md rounded-full bg-gradient-to-r from-black via-black/80 to-black/90 shadow-white w-14 h-14 text-white"
        onClick={togglePlay}>
        {playing ? "Pause" : "Play"}
      </button>

      <div className={`bars-container ${playing ? "bars-container--playing" : ""}`}>
        <div className="bar" style={{ animationDelay: "0.1s" }}></div>
        <div className="bar" style={{ animationDelay: "0s" }}></div>
        <div className="bar" style={{ animationDelay: "0.2s" }}></div>
        <div className="bar" style={{ animationDelay: "0.0s" }}></div>
        <div className="bar" style={{ animationDelay: "0.3s" }}></div>
      </div>
    </div>
  );
};

export default Player;
