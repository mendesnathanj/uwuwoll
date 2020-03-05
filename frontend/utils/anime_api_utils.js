export const fetchAllAnime = () => (
  $.ajax({
    method: 'GET',
    url: '/api/anime'
  })
);

export const fetchAnime = animeId => (
  $.ajax({
    method: 'GET',
    url: `/api/anime/${animeId}`
  })
);
