class Api::AnimeController < ApplicationController
  def index
    @anime = Anime.all.includes(:episodes)
    # @anime = Anime.select('animes.*, COUNT(episodes.id) AS episode_count').joins(:episodes).group('animes.id')
  end

  def show
    @anime = Anime.includes(:episodes).find_by(id: params[:id])
  end
end
