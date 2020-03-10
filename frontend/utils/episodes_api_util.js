export const fetchEpisode = episodeId => (
  $.ajax({
    method: 'GET',
    url: `/api/episodes/${episodeId}`
  })
);
