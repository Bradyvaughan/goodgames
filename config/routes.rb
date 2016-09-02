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
    resources :games, only: [:create, :destroy, :index, :update, :show]
    resource :session, only: [:create, :destroy]
  end
end
