# flarum-ext-bbcode-5star-rating
Insert Ratings into your posts in half-star increments.

## Installation
Run `composer require wolfgang-demeter/flarum-ext-bbcode-5star-rating` in Flarum's folder.

## Usage
| Stars | Code |
| --- | --- |
| 0 stars | `[fivestar rating=0]` |
| 0.5 stars | `[fivestar rating=1]` |
| 1 star | `[fivestar rating=2]` |
| 1.5 stars | `[fivestar rating=3]` |
| 2 stars | `[fivestar rating=4]` |
| 2.5 stars | `[fivestar rating=5]` |
| 3 stars | `[fivestar rating=6]` |
| 3.5 stars | `[fivestar rating=7]` |
| 4 stars | `[fivestar rating=8]` |
| 4.5 stars | `[fivestar rating=9]` |
| 5 stars | `[fivestar rating=10]` |

## Customize
This extension uses the defined secondary color (`@secondary-color`) of Flarum to highlight the rating by default. If you want to change the highlight color you can do so, by adding the following CSS custom property definition to your custom CSS in Flarum.
```css
:root {
    --bbcode-fivestar-rating-color: #ff79c6 !important;
}
```

## Screenshots
![grafik](https://user-images.githubusercontent.com/4437946/127745862-4725a2da-194d-47a9-8cb1-c53275168d4e.png)
