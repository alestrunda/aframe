# Aframe

Tiny Sass framework, mostly to enhance bootstrap (for version 3.x, version 4.x already includes some of these features).

It's pretty simple and straightforward, I find it handy for small to mid websites as it makes the development a bit quicker.

## What's included

* bootstrap 1/5 column (e.g. `.col-md-12-5`)
* responsive bootstrap columns spacing (e.g. `.responsive-column-lg`)
* single spacing classes (e.g. `.margin-30`)
* few basic classes (e.g. `.circle`)
* few sass mixins (e.g. `@include clearfix`)
* responsive text aligning (e.g. `.text-xs-center`)

There are 2 files in `dest/` - the scss file should be included to the project's sass stylesheets. But linking directly the CSS file is also possible, but of course in this case we lose the mixins part.
