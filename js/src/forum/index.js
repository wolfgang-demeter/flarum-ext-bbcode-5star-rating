import app from 'flarum/common/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import FiveStarRatingButton from './components/FiveStarRatingButton';

extend(TextEditor.prototype, 'toolbarItems', function(items) {
  items.add(
    'fivestar-rating',
    FiveStarRatingButton.component(),
    -1
  );
});
