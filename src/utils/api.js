import axios from "axios";

const fetchData = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchExercises = async (searchTerm) => {
  let url = "https://exercisedb.p.rapidapi.com/exercises";
  if (searchTerm) {
    url += `/name/${searchTerm}`;
  }

  const options = {
    method: "GET",
    url: url,
    params: { limit: "30" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};

export const fetchExerciseDetail = async (exerciseId) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`;
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  };

  return fetchData(url, headers);
};

export const fetchSimilarExercises = async (target) => {
  const url = `https://exercisedb.p.rapidapi.com/exercises/target/${target}`;
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  };

  return fetchData(url, headers);
};

export const fetchYoutubeVideos = async (searchQuery) => {
  const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${searchQuery}&type=video`;
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  };

  return fetchData(url, headers);
};
