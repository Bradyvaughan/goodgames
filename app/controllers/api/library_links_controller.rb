class Api::LibraryLinksController < ApplicationController

  def create

    triple = ["Played", "Currently Playing", "To Play"]

    triple.map! do |lib_name|
      Library.find_by({user_id: params[:user_id], name: lib_name})
    end

    @library_link = LibraryLink.new(
    {game_id: library_link_params[:game_id], library_id: params[:library_id]}
    )

    @library = Library.find_by_id(params[:library_id])

    if triple.include?(@library)
      triple.each do |play_stat|
        link = LibraryLink.find_by({game_id: library_link_params[:game_id],
          library_id: play_stat.id})
        link.destroy if link
      end
    end

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

  def spec_delete
    @library_link = LibraryLink.find_by({game_id: params[:game_id], library_id: params[:library_id]})
    if @library_link
      @library_link.destroy
    else
      render(json: "Game not in library!", status: 404)
    end
  end

  def spec_create

    triple = ["Played", "Currently Playing", "To Play"]

    triple.map! do |lib_name|
      Library.find_by({user_id: params[:user_id], name: lib_name})
    end


    @library = Library.find_by({user_id: params[:user_id], name: params[:name]})
    @library_link = LibraryLink.new({game_id: library_link_params[:game_id], library_id: @library.id})

    if triple.include?(@library)
      triple.each do |play_stat|
        link = LibraryLink.find_by({game_id: library_link_params[:game_id],
          library_id: play_stat.id})
        link.destroy if link
      end
    end

    unless @library_link.save
      render(json: @library_link.errors.full_messages, status: 422)
    end
  end

  # def spec_destroy
  #   @library_link = LibraryLink.find_by_id(params[:id])
  #
  #   if @library_link
  #     @library_link.destroy
  #   else
  #     render(json: "Game not in library!", status: 404)
  #   end
  # end

  def library_link_params
    params.require(:library_link).permit(:game_id)
  end
end
