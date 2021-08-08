const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "44d74a10460e9a32f8546bed31d47780";
async function fetchWithErrorHandling(url = "", connfig = {}) {
  const response = await fetch(url, connfig);
  return response.ok ? response.json() : Promise(new Error("Not Found"));
}

export function fetchTrend() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchMovies(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

export function fetchCast(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}