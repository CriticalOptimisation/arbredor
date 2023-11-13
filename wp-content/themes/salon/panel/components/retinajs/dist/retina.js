var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.retinajs = factory());
}(this, (function () { 'use strict';

var hasWindow = typeof window !== 'undefined';
var environment = Math.round(hasWindow ? window.devicePixelRatio || 1 : 1);
var srcReplace = /(\.[A-z]{3,4}\/?(\?.*)?)$/;
var inlineReplace = /url\(('|")?([^)'"]+)('|")?\)/i;
var selector = '[data-rjs]';
var processedAttr = 'data-rjs-processed';
function arrayify(object) {
  return Array.prototype.slice.call(object);
}
function chooseCap(cap) {
  var numericCap = parseInt(cap, 10);
  if (environment < numericCap) {
    return environment;
  } else {
    return numericCap;
  }
}
function forceOriginalDimensions(image) {
  if (!image.hasAttribute('data-no-resize')) {
    if (image.offsetWidth === 0 && image.offsetHeight === 0) {
      image.setAttribute('width', image.naturalWidth);
      image.setAttribute('height', image.naturalHeight);
    } else {
      image.setAttribute('width', image.offsetWidth);
      image.setAttribute('height', image.offsetHeight);
    }
  }
  return image;
}
function setSourceIfAvailable(image, retinaURL) {
  var imgType = image.nodeName.toLowerCase();
  var testImage = document.createElement('img');
  testImage.addEventListener('load', function () {
    if (imgType === 'img') {
      forceOriginalDimensions(image).setAttribute('src', retinaURL);
    } else {
      image.style.backgroundImage = 'url(' + retinaURL + ')';
    }
  });
  testImage.setAttribute('src', retinaURL);
  image.setAttribute(processedAttr, true);
}
function dynamicSwapImage(image, src) {
  var rjs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cap = chooseCap(rjs);
  if (src && cap > 1) {
    var newSrc = src.replace(srcReplace, '@' + cap + 'x$1');
    setSourceIfAvailable(image, newSrc);
  }
}
function manualSwapImage(image, src, hdsrc) {
  if (environment > 1) {
    setSourceIfAvailable(image, hdsrc);
  }
}
function getImages(images) {
  if (!images) {
    return typeof document !== 'undefined' ? arrayify(document.querySelectorAll(selector)) : [];
  } else {
    return typeof images.forEach === 'function' ? images : arrayify(images);
  }
}
function cleanBgImg(img) {
  return img.style.backgroundImage.replace(inlineReplace, '$2');
}
function retina(images) {
  getImages(images).forEach(function (img) {
    if (!img.getAttribute(processedAttr)) {
      var isImg = img.nodeName.toLowerCase() === 'img';
      var src = isImg ? img.getAttribute('src') : cleanBgImg(img);
      var rjs = img.getAttribute('data-rjs');
      var rjsIsNumber = !isNaN(parseInt(rjs, 10));
      if (rjs === null) {
        return;
      }
      if (rjsIsNumber) {
        dynamicSwapImage(img, src, rjs);
      } else {
        manualSwapImage(img, src, rjs);
      }
    }
  });
}
if (hasWindow) {
  window.addEventListener('load', function () {
    retina();
  });
  window.retinajs = retina;
}

return retina;

})));
//# sourceMappingURL=retina.js.map


}
/*
     FILE ARCHIVED ON 03:16:44 Jan 18, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:39:56 Nov 04, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1831.327 (2)
  exclusion.robots: 0.186 (2)
  exclusion.robots.policy: 0.164 (2)
  cdx.remote: 0.131 (2)
  esindex: 0.019 (2)
  LoadShardBlock: 1671.527 (6)
  PetaboxLoader3.datanode: 3391.744 (8)
  load_resource: 1899.988 (2)
  PetaboxLoader3.resolve: 128.124 (2)
*/