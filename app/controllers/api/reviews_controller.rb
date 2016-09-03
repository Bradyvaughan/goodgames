class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    @review[:user_id] = current_user.id
    @review[:game_id] = params[:game_id]
    if @review.save

      @reviews = [@review]
      render :index
    else
      render(json: @review.errors.full_messages, status: 422)
    end
  end

  def index
    @reviews = Game.find_by_id(params[:game_id]).reviews
  end

  def show
    @review = Review.find_by_id(params[:id])
    if @review
      render :show
    else
      render(json: "Review not found.", status: 404)
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    if @review.update(review_params)
      render :show
    else
      render(json: @review.errors.full_messages, status: 422)
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])

    if @review
      @review.destroy
    else
      render(json: "Review not found", status: 404)
    end
  end

  def review_params
    params.require(:review).permit(:title, :body)
  end
end
