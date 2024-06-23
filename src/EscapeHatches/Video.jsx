import { useRef, useState } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }
  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "pause" : "play"}</button>{" "}
      <br />
      <video
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        ref={ref}
        width={250}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
