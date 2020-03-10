class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.friendly.find(params[:id])
  end
end
