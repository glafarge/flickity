/*jshint strict: false */
/*global requirejs: false*/

// /*
// bower components
requirejs.config({
  baseUrl: '../../bower_components'
});

requirejs( [ '../js/flickity' ], function( Flickity ) {
  new Flickity('#gallery');
});
// */

/*
// pkgd
requirejs( [
  '../../dist/flickity.pkgd.js'
], function( Flickity ) {
  new Flickity('#gallery');
});
// */
