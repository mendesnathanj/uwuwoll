class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.includes(:anime).friendly.find(params[:id])
  end
end
