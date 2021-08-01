import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
// import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import classList from 'flarum/common/utils/classList';
import Tooltip from 'flarum/common/components/Tooltip';
// import ItemList from 'flarum/common/utils/ItemList';
// import Modal from 'flarum/common/components/Modal';
import styleSelectedText from 'flarum/common/utils/styleSelectedText';

export default class FiveStarRatingButton extends Component {
  view() {
    return (
      <Tooltip text="5 Star Rating">
        <Button
            className={classList([
                'Button',
                'hasIcon',
                'fof-upload-button',
                'Button--icon',
                'Button--link',
            ])}
            icon={'fas fa-star'}
            onclick={this.FiveStarRatingButtonClicked.bind(this)}
        >
            <span className="Button-label">5 Star Rating Label</span>
        </Button>
      </Tooltip>
    );
  }

  /**
   * Event handler for FiveStarRating button being clicked
   *
   * @param {PointerEvent} e
   */
  FiveStarRatingButtonClicked(e) {
    styleSelectedText(app.composer.editor.el, { prefix: '[fivestar rating=', suffix: ']' });
  }
}
