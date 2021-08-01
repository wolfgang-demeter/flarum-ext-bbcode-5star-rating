import app from 'flarum/common/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import FiveStarRatingButton from './components/FiveStarRatingButton';

// We provide our extension code in the form of an "initializer".
// This is a callback that will run after the core has booted.
// app.initializers.add('wolfgang-demeter-bbcode-5star-rating', function(app) {
//   // Your Extension Code Here
//   console.log("BBCode 5 Star Rating is working! Well, in a very dirty first implementation at least...");
// });

extend(TextEditor.prototype, 'controlItems', function(items) {
  items.add(
    'fivestar-rating',
    FiveStarRatingButton.component(),
    -10
  );
});
