export const findCurrentUser = state => {
  return state.session.id ? state.entities.users[state.session.id] : null
};

export const findAnime = (state, slug) => {
  if (!state.slugs.anime[slug]) return undefined;
  return state.entities.anime[state.slugs.anime[slug].id]
};

export const findEpisode = (state, slug) => {
  if (!state.slugs.episodes[slug]) return undefined;

  return state.entities.episodes[state.slugs.episodes[slug].id];
}

export const findRandomAnime = state => {
  let anime = Object.values(state.entities.anime);
  if (anime.length === 0) return '';

  let randomAnime = anime[Math.floor(Math.random() * anime.length)];

  let episode = Object.values(state.entities.episodes).find(ep => {
    let season = state.entities.seasons[ep.seasonId];
    return (
      ep.episodeNum === 1 &&
      ep.animeId === randomAnime.id
      // &&
      // (ep.seasonId === null || season.seasonNum === 1 )
      );
    });

  console.log(randomAnime);
  console.log(episode);

  if (!episode) return '';

  return `/anime/${randomAnime.slug}/${episode.slug}`;
}

export const findSeasonsFromAnimeSlug = (state, slug) => {
  const anime = findAnime(state, slug);
  if (!anime) return [ ];

  return anime.seasonIds.map(id => state.entities.seasons[id]);
};

export const findEpisodesFromAnimeSlug = (state, slug) => {
  const anime = findAnime(state, slug);
  if (!anime) return [ ];

  return anime.episodeIds.map(id => state.entities.episodes[id]);
};

export const findSavedAnime = state => {
  const list = findList(state);
  const savedAnime = Object.values(state.entities.savedAnime)
                      .filter(anime => anime.listId === list.id);

  return savedAnime.map(saved => state.entities.anime[saved.animeId]);
};

export const findSavedEpisodes = state => {
  const savedAnime = findSavedAnime(state);

  return savedAnime.map(anime => (
    anime.episodeIds.map(id => (
      state.entities.episodes[id]
    ))
  )).flat();
}

const findList = state => (
  Object.values(state.entities.lists)
    .filter(list => list.userId === findCurrentUser(state).id)[0]
);
