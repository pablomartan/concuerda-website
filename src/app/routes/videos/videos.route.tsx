import { FC, MouseEventHandler, useEffect, useMemo, useState } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { MainHero } from "../../components/main-hero/main-hero.component";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import banner from "../../../assets/vid/videos_banner.mp4";

import { useVideosPlaylists } from "../../hooks/useData";

import "react-alice-carousel/lib/alice-carousel.css";
import "./videos.style.scss";
import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_YOUTUBE_PLAYLIST_API;
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const getFinalTitle = (title: string, className: string) => {
  if (title.endsWith("solistas")) {
    const splitTitle = title.split(" ");
    const first = splitTitle.slice(0, 2).join(" ");
    const last = splitTitle.slice(2).join(" ");
    return (
      <h2 className={className ?? ""}>
        {first} <span>{last}</span>
      </h2>
    );
  }

  return <h2 className={className ?? ""}>{title}</h2>;
};

const VideosCarousel: FC<{
  title: string;
  videoList: string;
}> = ({ title, videoList }) => {
  const [videoIds, setVideoIds] = useState<string[]>([]);

  const fetchedVideos = useMemo(async () => {
    const videos = await fetch(
      `${API_URL}?playlistId=${videoList}&part=snippet&key=${API_KEY}`,
    )
      .then((data) => data.json())
      .then((response) => {
        console.log({
          response,
        });

        return response.items.map(
          ({ snippet: { resourceId } }: any) => resourceId.videoId,
        );
      });
    return videos;
  }, [setVideoIds]);

  useEffect(() => {
    fetchedVideos.then((data) => setVideoIds(data));
  }, [fetchedVideos]);

  const autoStop: MouseEventHandler<HTMLIFrameElement> = (e) => {
    console.log(e.target);
  };

  const videoIFrames = videoIds.map((id) => {
    return (
      <iframe
        key={id}
        src={"https://youtube.com/embed/".concat(id)}
        onDrag={autoStop}
      />
    );
  });

  return (
    <div className="VideosCarousel">
      {getFinalTitle(title, "VideosCarousel__title")}
      <AliceCarousel
        mouseTracking
        infinite
        items={videoIFrames}
        responsive={{
          300: {
            items: 1,
            itemsFit: "fill",
          },
          1024: {
            items: 3,
            itemsFit: "cover",
          },
        }}
      />
    </div>
  );
};

const Videos: FC = () => {
  const playlists = useVideosPlaylists();

  const navigate = useNavigate();

  useEffect(() => navigate("/videos"), []);

  const mainHeroProps = {
    hook: "vídeos",
    subtext: "Versiones únicas",
    pic: false,
    video: banner,
  };

  return (
    <div className="Videos">
      <Header />
      <MainHero {...mainHeroProps} />
      {playlists.map(({ title, videoList }) => (
        <VideosCarousel title={title} {...{ videoList }} />
      ))}
      <Footer />
    </div>
  );
};

export default Videos;
