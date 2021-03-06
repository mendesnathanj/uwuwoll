class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:identifier],
                                     params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ['wuh woh wong wogin!'], status: :unauthorized
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: { }
    else
      render json: ['pwease wogin to wogout'], status: :not_found
    end
  end
end
