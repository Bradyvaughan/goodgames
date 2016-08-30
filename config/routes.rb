Rails.application.routes.draw do

  root to: "static_pages#root"
  namespace :api, format: { default: :json } do
    resources :users, only: [:create]
    resources :games, only: [:create, :destroy, :index, :update, :show]
    resource :session, only: [:create, :destroy]
  end
end
