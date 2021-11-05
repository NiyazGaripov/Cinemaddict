import {renderComponent} from '../utils/render';
import {Comments} from '../components/comments';
import {NewComment} from '../components/new-comment';

export class CommentController {
  constructor(container, commentsModel, onDataChange) {
    this._container = container;
    this._commentsModel = commentsModel;
    this._commentsComponent = null;
    this._newComment = null;
    this._commentsControllers = [];
    this._showingCommentsCount = 0;
    this._onDataChange = onDataChange;
  }

  render() {
    this._commentsComponent = new Comments(this._commentsModel.getComments());
    this._newComment = new NewComment();

    renderComponent(this._container, this._commentsComponent);
    renderComponent(this._container, this._newComment);

    this._commentsComponent.deleteButtonClickHandler(this._onDeleteButtonClick);
  }

  _onDeleteButtonClick(evt) {
    evt.preventDefault();

    this._onDataChange(this._commentsComponent._comments, null);
  }
}
