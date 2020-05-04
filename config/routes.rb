Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :anime, only: [:index, :show]
    resources :lists, only: [:index]
    resources :episodes, only: [:show]
    resources :navbar, only: [:index]
    resources :comments, only: [:create, :update, :destroy]
    resources :saved_anime, only: [:show, :create, :destroy]
  end

  get '/login', to: 'static_pages#root'
  get '/signup', to: 'static_pages#root'
  get '/anime', to: 'static_pages#root'
  get '/queue', to: 'static_pages#root'
  get '/anime/*all', to: 'static_pages#root'
end
