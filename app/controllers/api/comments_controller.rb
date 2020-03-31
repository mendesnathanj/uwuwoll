class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end

  end

  def update
    @comment = Comment.find_by(id: params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.user = nil
    @comment.content = ''
    @comment.save

    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:parent_id, :user_id, :episode_id, :content, :spoiler)
  end
end
