import {
  FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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
  videos: JSX.Element[];
}> = ({ videos }) => {
  const carousel = useRef<AliceCarousel>(null);

  return (
    <div className="VideosCarousel">
      <div
        className="VideosCarousel__arrow VideosCarousel__arrow--prev"
        onClick={(e) => carousel.current?.slidePrev(e)}
      >
        <svg width="30px" height="30px">
          <polygon points="30,0 30,30, 0,15" />
        </svg>
      </div>
      <AliceCarousel
        key="carousel"
        infinite
        items={videos}
        disableButtonsControls
        mouseTracking
        ref={carousel}
      />
      <div
        className="VideosCarousel__arrow VideosCarousel__arrow--next"
        onClick={(e) => carousel.current?.slideNext(e)}
      >
        <svg width="30px" height="30px">
          <polygon points="0,0 30,15, 0,30" />
        </svg>
      </div>
    </div>
  );
};

const VideosCarouselWrapper: FC<{
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

  const videoIFrames = videoIds.map((id) => {
    return (
      <iframe
        className="VideosCarousel__iframe"
        key={id}
        src={"https://youtube.com/embed/".concat(id)}
      />
    );
  });

  return (
    <div className="VideosCarouselWrapper">
      {getFinalTitle(title, "VideosCarousel__title")}
      <VideosCarousel videos={videoIFrames} />
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
        <VideosCarouselWrapper title={title} {...{ videoList }} />
      ))}
      <Footer />
    </div>
  );
};

export default Videos;
