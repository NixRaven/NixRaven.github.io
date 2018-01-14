function translateTo(itemIds,toContent,lang) {
  for (i = 0; i < itemIds.length; i++) {
    document.getElementById(itemIds[i]).innerHTML = toContent[i];
    document.getElementById(itemIds[i]).lang = lang;
  }
}

function translateToContent(itemIds,toContent,lang) {
  for (i = 0; i < itemIds.length; i++) {
    document.getElementById(itemIds[i]).innerHTML = toContent[i];
    document.getElementById(itemIds[i]).lang = lang;
  }
}

function setLightboxImg(imgElem, lightboxImg, lightboxId) {
  document.getElementById(lightboxImg).src = document.getElementById(imgElem).src;
  document.getElementById(lightboxId).style.display = 'grid';
}
    
function initListeners() {
  if (document.getElementById(textElmnts[0]).addEventListener) {
    
    if (gallery) {
      // initiate lightbox event listener (use addEventListener
      document.getElementById(lightboxElem).addEventListener('click', function() {document.getElementById(lightboxElem).style.display = 'none';});
    
      // initiate gallery image event listeners (use addEventListener
      imgList.forEach(function(imgItem) {
        document.getElementById(imgItem).addEventListener('click', function() { setLightboxImg(imgItem,lightboxImg,lightboxElem);});
      });
    }
  } else if (document.getElementById(englishText[0]).attachEvent) {
    
    if (gallery) {
      // attach event to lightbox (use attachEvent)
      document.getElementById(lightboxElem).attachEvent('onclick', function() {document.getElementById(lightboxElem).style.display = 'none';});
    
      // attach events to gallery images (use attachEvent
      for (i = 0; i < imgList.length; i++) {
        document.getElementById(imgList[i]).attachEvent('onclick', (function() { setLightboxImg(imgLinks[i],lightboxImg,lightboxElem);}));
      }
    }
  }
}
    
function toEnglish() {
  translateTo(textElmnts, englishText,'en');
  
  if (document.getElementById('btnTranslate').addEventListener) {
    document.getElementById('btnTranslate').removeEventListener('click', toEnglish);
    document.getElementById('btnTranslate').addEventListener('click', toFrench);
  } else if (document.getElementById('btnTranslate').attachEvent) {
    document.getElementById('btnTranslate').attachEvent('onclick', toFrench);
  }
  
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('languageShaelynch.com','en');
  }
  if (content) {
    translateToContent(contentElmnts, englishContent,'en');
  }
}
    
function toFrench() {
  translateTo(textElmnts, frenchText,'fr');
  
  if (document.getElementById('btnTranslate').addEventListener) {
    document.getElementById('btnTranslate').removeEventListener('click', toFrench);
    document.getElementById('btnTranslate').addEventListener('click', toEnglish);
  } else if (document.getElementById('btnTranslate').attachEvent) {
    document.getElementById('btnTranslate').attachEvent('onclick', toEnglish);
  }
  
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('languageShaelynch.com','fr');
  }
  if (content) {
    translateToContent(contentElmnts, frenchContent,'fr');
  }
}

function initLang() {
  var lang = localStorage.getItem('languageShaelynch.com');
  if (lang === 'fr') {
    toFrench();
  } else {
    toEnglish();
  }
}

function isLang(thisId) {
  alert('isLang called by ' + thisId);
  var lang = localStorage.getItem('languageShaelynch.com');
  var thisItem = document.getElementById(thisId);
  if (lang === 'fr') {
    if (thisItem.getAttribute('lang') === 'fr') {
      thisItem.style.display = 'inline-block';
    } else {
      thisItem.style.display = 'none';
    }
  } else {
    if (thisItem.getAttribute('lang') === 'fr') {
      thisItem.style.display = 'none';
    } else {
      thisItem.style.display = 'inline-block';
    }
  }
}
        

function init() {
  initLang();
  initListeners();
}
