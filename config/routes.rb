Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :anime, only: [:index, :show]
    resources :lists, only: [:index]
    resources :episodes, only: [:show]
    resources :navbar, only: [:index]
    resources :saved_anime, only: [:show, :create, :destroy]
  end
end
