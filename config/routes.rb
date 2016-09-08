Rails.application.routes.draw do

  root to: "static_pages#root"
  namespace :api, format: { default: :json } do
    resources :users, only: [:create] do
      resources :libraries, only: [:create, :index] do
        resources :library_links, only: [:create]
      end
    end
    resources :library_links, only: [:destroy]
    resources :libraries, only: [:destroy, :show]
    resources :games, only: [:create, :destroy, :index, :update, :show] do
      resources :ratings, only: [:create]
      resources :reviews, except: [:new, :edit]
    end
    resource :session, only: [:create, :destroy]
  end

  get 'api/users/:user_id/games/pages/:page', to: 'api/games#user_index'
  get 'api/games/pages/:page', to: 'api/games#page_index'
  get 'api/games/search/pages/:page', to: 'api/games#search'
  get 'api/libraries/:library_id/pages/:page', to: 'api/games#library_index'
  delete 'api/libraries/:library_id/games/:game_id', to: 'api/library_links#spec_delete'
  post 'api/users/:user_id/libraries/:name', to: 'api/library_links#spec_create'
end
