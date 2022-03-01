(function() {
  /**
   * Setting util functions
   */
  var setEffects = function(element, className) {
    var e = $(element);
    if (!e.hasClass(className)) {
      e.addClass(className);
    }
  };
  var removeEffects = function(element, className) {
    var e = $(element);
    if (e.hasClass(className)) {
      e.removeClass(className);
    }
  };
  var showElement = function(element) {
    var e = $(element);
    if (e.hasClass('hide')) {
      e.removeClass('hide');
    }
    e.addClass('show');
  }
  var hideElement = function(element) {
    var e = $(element);
    if (e.hasClass('show')) {
      e.removeClass('show');
    }
    e.addClass('hide');
  };
  var setAudioPlay = function() {
    var _audioWrapper = $('#audioWrapper');
    var _audio = $('#audio')[0];
    if (!_audio) {
      return;
    }
    if (_audio.paused) {
      _audio.play();
      setEffects(_audioWrapper, 'rotate');
    } else {
      _audio.pause();
      _audio.currentTime = 0;
      removeEffects(_audioWrapper, 'rotate');
    }
  };

  /**
   * Setting background fade in
   */
  setEffects(document.getElementById('root'), 'fade-in');

  /**
   * Setting start
   */
  $('#start').click(function() {
    setAudioPlay();
    hideElement('#start');
    showElement('#article');
    var lineElements = document.getElementsByClassName('line');
    if (!lineElements || lineElements.length < 1) {
      return;
    }
    for (var i = 0; i < lineElements.length; i++) {
      (function(i) {
        setTimeout(function() {
          setEffects(lineElements[i], 'fade-in');
        }, i * 1500);
      })(i);
    }
  });

  /**
   * Setting audio play
   */
  $('#audioWrapper').click(function() {
    setAudioPlay();
  });
})();