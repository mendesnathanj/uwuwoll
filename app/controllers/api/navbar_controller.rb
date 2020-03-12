class Api::NavbarController < ApplicationController
  def index
    @anime = Anime.all.includes(:seasons, :episodes)
  end
end
