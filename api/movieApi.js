import axios from "axios";

export async function fetchMovies() {
  const response = await axios.get("https://api.example.com/movies");
  console.log('check data', response.data)
  return response.data;
}
