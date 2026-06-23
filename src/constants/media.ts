import type { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
  {
    title: "Student Week 2026",
    thumbnail: "/media-insights/student_week_1.png",
    videoUrl: "https://www.youtube.com/watch?v=ko-o0A6Cx7c",
    type: "video",
    category: "Student Life",
  },
  {
    title: "Sports Week 2026",
    thumbnail: "/media-insights/sports_week_2.png",
    videoUrl: "https://www.youtube.com/watch?v=oQpaKxrjte4",
    type: "video",
    category: "Sports",
  },
  {
    title: "Qawali Night 2026",
    thumbnail: "/media-insights/qawali_night_2026.png",
    videoUrl: "https://www.youtube.com/watch?v=DFOUeIgR_0U",
    type: "video",
    category: "Culture",
  },
  {
    title: "Heroes of the Mountains",
    thumbnail: "/media-insights/heros_of_the_mountains.png",
    videoUrl: "https://www.youtube.com/watch?v=30zKsP4O6vA",
    type: "video",
    category: "Documentary",
  },
];

export const HERO_VIDEO_URL = MEDIA_ITEMS[0].videoUrl;
