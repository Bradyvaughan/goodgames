class Api::RatingsController < ApplicationController


  def create
    oldrating = Rating.find_by({user_id: rating_params[:user_id], game_id: params[:game_id]})
    oldrating.destroy if oldrating

    @rating = Rating.new({user_id: rating_params[:user_id], num: rating_params[:num], game_id: params[:game_id]})

    unless @rating.save
      render(json: "Rating could not be saved", status: 403)
    end
  end

  def rating_params
    params.require(:rating).permit(:user_id, :num)
  end
end
