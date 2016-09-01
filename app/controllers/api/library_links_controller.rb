class Api::LibraryLinksController < ApplicationController

  def create
    @library_link = LibraryLink.new(
    {game_id: library_link_params[:game_id], library_id: params[:library_id]}
    )

    unless @library_link.save
      render(json: @library_link.errors.full_messages, status: 422)
    end
  end

  def destroy
    @library_link = LibraryLink.find_by_id(params[:id])

    if @library_link
      @library_link.destroy
    else
      render(json: "Game not in library!", status: 404)
    end
  end

  def library_link_params
    params.require(:library_link).permit(:game_id)
  end
end
