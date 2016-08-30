class Api::GamesController < ApplicationController

  def create
    @game = Game.new(game_params)
    if @game.save
      render :show
    else
      render(json: @game.errors.full_messages, status 422)
    end
  end

  def index
    @games = Game.all
  end

  def show
    @game = Game.find_by_id(params[:id])
    @game ? render :show : render(json: "Game not found.", status 404)
  end

  def update
    @game = Game.find_by_id(params[:id])
    if @game.update(game_params)
      render :show
    else
      render(json: @game.errors.full_messages, status 422)
    end
  end

  def destroy
    @game = Game.find_by_id(params[:id])

    @game ? @game.destroy : render(json: "Game not found", status 404)
  end

  def game_params
    params.require(:game).permit(:published_on, :title, :cover,
      :description, :avg_rating)
  end
end
