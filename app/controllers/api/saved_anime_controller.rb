class Api::SavedAnimeController < ApplicationController
  def show
    @saved_anime = SavedAnime.find_by(id: params[:id])
  end

  def create
    @saved_anime = SavedAnime.new(list_id: current_user.list.id, anime_id: params[:id])

    if @saved_anime.save
      render :show
    else
      render json: @saved_anime.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @saved_anime = current_user.saved_anime.find_by(anime_id: params[:id])
    @saved_anime.destroy
    render :show
  end
end
