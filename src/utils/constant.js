export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};

export const USER_ICON =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const NOW_PLAYING_MOVIES =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TOP_RATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const RATED_MOVIES_LIST =
  "https://api.themoviedb.org/3/genre/tv/list?language=en";

export const MOVIE_DETAIL = "https://api.themoviedb.org/3/movie/";
export const MOVIE_VIDEOS = "https://api.themoviedb.org/3/movie/";
