export const findCurrentUser = state => (
  state.session.id ? state.entities.users[state.session.id] : null
);

export const findAnime = (state, animeId) => (
  state.entities.anime[animeId]
);

export const findSeasonsFromAnimeId = (state, animeId) => {
  const anime = findAnime(state, animeId);
  if (!anime) return [ ];

  return anime.seasonIds.map(id => state.entities.seasons[id]);
};

export const findEpisodesFromAnimeId = (state, animeId) => {
  const anime = findAnime(state, animeId);
  if (!anime) return [ ];

  return anime.episodeIds.map(id => state.entities.episodes[id]);
};

export const findSavedAnime = (state) => {
  const list = findList(state);
  const savedAnime = Object.values(state.entities.savedAnime)
                      .filter(anime => anime.listId === list.id);

  return savedAnime.map(saved => state.entities.anime[saved.animeId]);
};

const findList = state => (
  Object.values(state.entities.lists)
    .filter(list => list.userId === findCurrentUser(state).id)[0]
);
