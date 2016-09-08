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
    @games = Game.all.includes(:libraries, :ratings)
  end

  def user_index
    @games = User.find_by_id(params[:user_id]).games.page(params[:page]).includes(:libraries, :ratings)
    render :index
  end

  def page_index
    @games = Game.page(params[:page])
    render :index
  end

  def library_index
    @library  = Library.find_by_id(params[:library_id])
    @games = @library.games.page(params[:page]).includes(:libraries, :ratings)
    render :index
  end

  def show
    @game = Game.find_by_id(params[:id])
    if @game
      @games = [@game]
      render :index
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

  def search
    @games = Game.where("title ILIKE :query", query: "%#{params[:name]}%")
    @games = @games.page(params[:page])
    render :index
  end

  def game_params
    params.require(:game).permit(:release_date, :title, :platform,
      :description, :cover)
  end
end
