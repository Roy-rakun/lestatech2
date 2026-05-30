import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface MuxBackgroundVideoProps {
  playbackId: string;
}

export default function MuxBackgroundVideo({ playbackId }: MuxBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = `https://stream.mux.com/${playbackId}.m3u8`;
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((err) => {
          console.warn("Hls.js autoplay interrupted: ", err);
          // Try to play again
          video.muted = true;
          video.play().catch(() => {});
        });
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          console.warn("Hls.js fatal error, switching to direct MP4 fallback");
          setUseFallback(true);
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native HLS support (Safari)
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch((err) => {
          console.warn("Native Safari autoplay was interrupted: ", err);
          video.muted = true;
          video.play().catch(() => {});
        });
      });
    } else {
      // Fallback directly to high quality progressive MP4
      setUseFallback(true);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [playbackId]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950 select-none">
      {/* 
        This is an overlay to match the high-contrast professional background. 
        We use a smart fade from left to right to ensure text legibility while keeping the video highly visible.
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/45" />
      
      {/* Structural technical matrix motif in background */}
      <div className="absolute inset-0 z-10 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {useFallback ? (
        <video
          ref={videoRef}
          src={`https://stream.mux.com/${playbackId}/medium.mp4`}
          className="absolute inset-0 object-cover w-full h-full scale-[1.01]"
          loop
          muted
          autoPlay
          playsInline
          referrerPolicy="no-referrer"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full scale-[1.01]"
          loop
          muted
          autoPlay
          playsInline
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
}
