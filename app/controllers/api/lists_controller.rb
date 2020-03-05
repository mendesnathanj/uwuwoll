class Api::ListsController < ApplicationController
  def index
    @list = List.includes(:saved_anime).find_by(user_id: current_user.id)
  end
end
