class Api::GamesController < ApplicationController

  def create
    @game = Game.new(game_params)
    if @game.save
      render :show
    else
      render(json: @game.errors.full_messages, status: 422)
    end
  end

  def index
    @games = Game.all
  end

  def user_index
    @games = User.find_by_id(params[:user_id]).games
    render :index
  end

  def show
    @game = Game.find_by_id(params[:id])
    if @game
      render :show
    else
      render(json: "Game not found.", status: 404)
    end
  end

  def update
    @game = Game.find_by_id(params[:id])
    if @game.update(game_params)
      render :show
    else
      render(json: @game.errors.full_messages, status: 422)
    end
  end

  def destroy
    @game = Game.find_by_id(params[:id])

    if @game
      @game.destroy
    else
      render(json: "Game not found", status: 404)
    end
  end

  def game_params
    params.require(:game).permit(:release_date, :title, :platform,
      :description, :avg_rating, :cover)
  end
end
