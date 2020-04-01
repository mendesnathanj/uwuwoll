class Api::EpisodesController < ApplicationController
  def show
    @episode = Episode.includes(anime: [:comments]).friendly.find(params[:id])
  end
end
