Rails.application.routes.draw do
  resources :surveys
  root 'surveys#index'

  devise_for :users
end
