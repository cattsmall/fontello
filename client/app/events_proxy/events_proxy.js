'use strict';


/*global $, N*/


module.exports.init = function () {
  $(function () {
    $('body').on('click.N.data-api', '[data-on-click]', function () {
      N.emit($(this).data('on-click'), this);
    });
  });
};
