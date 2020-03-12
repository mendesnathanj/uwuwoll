export const createSavedAnime = id => (
  $.ajax({
    method: 'POST',
    url: '/api/saved_anime',
    data: { id }
  })
);

export const deleteSavedAnime = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/saved_anime/${id}`
  })
);
