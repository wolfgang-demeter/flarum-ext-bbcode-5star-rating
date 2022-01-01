import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';

export default class FiveStarRatingModal extends Modal {
  view() {
    return (
      <div className={`Modal modal-dialog bbcode-fivestar-rating-modal`}>
        <div className="Modal-content">
          <div className="Modal-header">
            <h3 className="App-titleControl App-titleControl--text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.headline')}</h3>
          </div>

          <div className="Modal-body">
            <div class="bbcode-fivestar-rating-buttons">
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 0 })} className="Button hasIcon">
                <span class="icons"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_0')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 1 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_1')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 2 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_2')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 3 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_3')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 4 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_4')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 5 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_5')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 6 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_6')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 7 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_7')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 8 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_8')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 9 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_9')}</span>
              </Button>
              <Button onclick={this.onSelect.bind(this, { fiveStarRating: 10 })} className="Button hasIcon">
                <span class="icons"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                <span class="text">{app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.stars_10')}</span>
              </Button>
            </div>

            <Button onclick={this.hide.bind(this)} className="Button">
              {app.translator.trans('flarum-ext-bbcode-5star-rating.forum.modal.cancel')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Add selected five star rating to composer
   */
  onSelect(rating) {
    this.hide();
    app.composer.editor.insertAtCursor('[fivestar rating=' + parseInt(rating.fiveStarRating) + ']\n');
  }
}
