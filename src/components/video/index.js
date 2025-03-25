"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import styles from "./index.module.scss";
import { clsx } from "@/utils/functions";

const VideoComponent = (props, ref) => {
  const {
    src,
    className,
    hideButton = false,
    autoPlay = true,
    muted = true,
    loop = false,
    playCountLimit = 1,
    poster = "", // תמונת קדימון אופציונלית
  } = props;

  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(!autoPlay);
  const [playCount, setPlayCount] = useState(0);

  // חשיפת הפונקציות לשליטה בווידאו דרך ref
  useImperativeHandle(ref, () => ({
    pause: pauseVideo,
    play: playVideo,
    reset: resetVideo,
    isPaused: isPaused,
  }));

  // החזרת הווידאו לפריים הראשון
  const resetVideo = () => {
    if (videoRef.current && videoRef.current.readyState >= 1) {
      videoRef.current.currentTime = 0;
    }
  };

  // עצירת הווידאו
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  // הפעלת הווידאו
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Auto-play was prevented by the browser:", err);
        setIsPaused(true);
      });
      setIsPaused(false);
    }
  };

  const togglePlayPause = (e) => {
    // נוסיף לוג לבדיקה
    console.log("Button clicked, current state:", isPaused);
    e?.preventDefault(); // מוודא ביטול ברירת המחדל
    e?.stopPropagation(); // מונע התפשטות האירוע

    if (isPaused) {
      playVideo();
    } else {
      pauseVideo();
    }
  };

  // אירוע סיום הווידאו
  const handleVideoEnded = () => {
    setPlayCount((prevCount) => {
      const newCount = prevCount + 1;
      // אם הגענו למספר ההפעלות המקסימלי
      if (newCount >= playCountLimit && !loop) {
        pauseVideo();
        resetVideo();
      } else if (loop) {
        // אם loop מופעל, הווידאו ימשיך לנגן אוטומטית
        playVideo();
      }
      return newCount;
    });
  };

  // אתחול הווידאו כשהוא מוכן
  useEffect(() => {
    const initVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = muted;

        if (autoPlay && playCount < playCountLimit) {
          playVideo();
        } else {
          setIsPaused(true);
        }
      }
    };

    initVideo();
  }, [autoPlay, muted, playCount, playCountLimit]);

  return (
    <div className={clsx(styles.videoWrapper, className)}>
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay
        playsInline
        preload="metadata"
        muted={muted}
        loop={loop}
        poster={poster}
        onEnded={handleVideoEnded}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!hideButton && (
        <button
          className={styles.videoButton}
          onClick={togglePlayPause}
          aria-label={isPaused ? "הפעל וידאו" : "עצור וידאו"}
        >
          {isPaused ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

const Video = forwardRef(VideoComponent);
export default Video;
