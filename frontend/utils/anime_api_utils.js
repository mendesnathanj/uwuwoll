export const fetchAllAnime = () => (
  $.ajax({
    method: 'GET',
    url: '/api/anime'
  })
);

export const fetchAnime = slug => (
  $.ajax({
    method: 'GET',
    url: `/api/anime/${slug}`
  })
);
