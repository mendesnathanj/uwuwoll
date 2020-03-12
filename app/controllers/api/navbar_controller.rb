class Api::NavbarController < ApplicationController
  def index
    @anime = Anime.all.includes(:episodes)
  end
end
