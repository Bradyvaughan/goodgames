class Api::LibrariesController < ApplicationController

  def index
    @libraries = User.find_by_id(params[:user_id]).libraries
  end

  def show
    @library = Library.find_by_id(params[:id])
    if @library
      render: show
    else
      render(json: "Library not found", status: 404)
    end
  end

  def create
    @library = Library.new({name: library_params[:name],
      description: library_params[:description], user_id: params[:user_id])
    if @library.save
      render :show
    else
      render(json: @library.errors.full_messages, status: 422)
    end
  end

  def destroy
    @library = Library.find_by_id(params[:id])

    if @library
      @library.destroy
    else
      render(json: "Library not found", status: 404)
    end
  end

  def library_params
    params.require(:library).permit(:name, :description)
  end
end
