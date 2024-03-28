import { FC, useEffect, useMemo, useState } from "react";

import { Header } from "../../components/header/header.component";
import { Footer } from "../../components/footer/footer.component";
import { MainHero } from "../../components/main-hero/main-hero.component";
import { useSpringCarousel } from "react-spring-carousel";

import banner from "../../../assets/vid/videos_banner.mp4";

import { useVideosPlaylists } from "../../hooks/useData";

import "./videos.style.scss";

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

const getSlideItemClassName = (currentItem: number, videoItem: number) => {
  const base = "VideosCarousel__item__";

  if (videoItem === 0) {
    return base + "inactive";
  }

  if (videoItem === currentItem) {
    return base + "active";
  }

  if (videoItem === currentItem - 1) {
    return base + "prev";
  }

  if (videoItem === currentItem + 1) {
    return base + "next";
  }

  return base + "inactive";
};

const VideosCarousel: FC<{
  videos: JSX.Element[];
}> = ({ videos }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const {
    carouselFragment,
    thumbsFragment,
    slideToItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    withThumbs: true,
    itemsPerSlide: innerWidth < 1200 ? 1 : 3,
    gutter:
      innerWidth >= 1200 ? 8 : innerWidth >= 400 ? -0.1 * innerWidth : -10,
    startEndGutter: innerWidth >= 1200 ? 0 : 24,
    items: videos.map((video, i) => ({
      id: i,
      renderItem: (
        <div key={video.key} className={getSlideItemClassName(currentItem, i)}>
          {video}
        </div>
      ),
      renderThumb:
        i > 0 ? (
          <p
            className={i === currentItem ? "__active" : ""}
            onClick={() => slideToItem(i)}
          >
            •
          </p>
        ) : null,
    })),
  });

  const handleSlide = (to: "prev" | "next") => {
    if (to === "prev") {
      const prev = currentItem - 1;
      if (prev < 1) {
        return;
      } else {
        slideToItem(prev);
      }
    }

    if (to === "next") {
      const next = currentItem + 1;
      if (next < 1) {
        return;
      } else {
        slideToItem(next);
      }
    }
  };

  useListenToCustomEvent((event: any) => {
    if (event.eventName === "onSlideStartChange") {
      setCurrentItem(event.nextItem.id);
    }

    if (event.eventName === "onDrag") {
      slideToItem(event.nextItem.id);
    }
  });

  useEffect(() => {
    slideToItem(3);
    const timeout = setTimeout(() => {
      slideToItem(1);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="VideosCarousel">
      <div
        className="VideosCarousel__arrow VideosCarousel__arrow--prev"
        onClick={() => handleSlide("prev")}
      >
        <svg width="30px" height="30px">
          <polygon points="30,0 30,30, 0,15" />
        </svg>
      </div>
      <div className="VideosCarousel__carousel-wrapper">
        {carouselFragment}
        {thumbsFragment}
      </div>
      <div
        className="VideosCarousel__arrow VideosCarousel__arrow--next"
        onClick={() => handleSlide("next")}
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
        return response.items.map(
          ({ snippet: { resourceId } }: any) => resourceId.videoId,
        );
      });
    return videos;
  }, [setVideoIds]);

  useEffect(() => {
    fetchedVideos.then((data) => setVideoIds([""].concat(data)));
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
      {videoIFrames.length > 0 && <VideosCarousel videos={videoIFrames} />}
    </div>
  );
};

const Videos: FC = () => {
  const playlists = useVideosPlaylists();

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
