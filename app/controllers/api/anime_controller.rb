class Api::AnimeController < ApplicationController
  def index
    @anime = Anime.all.includes(:episodes, seasons: :episodes)
  end

  def show
    @anime = Anime.includes(episodes: :comments, seasons: :episodes).friendly.find(params[:id])
  end
end
