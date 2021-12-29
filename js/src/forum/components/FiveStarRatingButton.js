import app from 'flarum/common/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import classList from 'flarum/common/utils/classList';
import FiveStarRatingModal from './FiveStarRatingModal';
import Tooltip from 'flarum/common/components/Tooltip';

export default class FiveStarRatingButton extends Component {
  view() {
    return (
      <Tooltip text="{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.button.tooltip')}">
        <Button
          className={classList([
            'Button',
            'hasIcon',
            'Button--icon',
            'Button--link',
          ])}
          icon={'fas fa-star'}
          onclick={this.FiveStarRatingButtonClicked.bind(this)}
        >
          <span className="Button-label">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.button.label')}</span>
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
    e.preventDefault();

    // Open dialog
    app.modal.show(FiveStarRatingModal, {});
  }
}
