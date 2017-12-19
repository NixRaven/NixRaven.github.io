function translateTo(fromItemIds,toItemIds) {
  fromItemIds.forEach(function(elementFrom) {
    document.getElementById(elementFrom).style.display = 'none';
  });
  toItemIds.forEach(function(elementTo) {
    document.getElementById(elementTo).style.display = 'inline-block';
  });
}

function translateToContent(fromItemIds,toItemIds) {
  fromItemIds.forEach(function(elementFrom) {
    document.getElementById(elementFrom).style.display = 'none';
  });
  toItemIds.forEach(function(elementTo) {
    document.getElementById(elementTo).style.display = 'block';
  });
}

function setLightboxImg(imgClicked, lightboxImg, lightboxId) {
  document.getElementById(lightboxImg).src = document.getElementById(imgClicked).src;
  document.getElementById(lightboxId).style.display = 'block';
}
    
function initListeners() {
  if (document.getElementById(englishText[0]).addEventListener) {
    
    // initiate french/english button event listener (use addEventListener)
    document.getElementById('btnToFr').addEventListener('click', toFrench);
    document.getElementById('btnToEn').addEventListener('click', toEnglish);
    
    if (gallery) {
      // initiate lightbox event listener (use addEventListener
      document.getElementById(lightboxElem).addEventListener('click', function() {document.getElementById(lightboxElem).style.display = 'none';});
    
      // initiate gallery image event listeners (use addEventListener
      imgList.forEach(function(imgId) {
        document.getElementById(imgId).addEventListener('click', (function() { setLightboxImg(imgId,lightboxImg,lightboxElem);}));
      });
    }
  } else if (document.getElementById(englishText[0]).attachEvent) {
    
    // initiate french/english button event (use attachEvent)
    document.getElementById('btnToFr').attachEvent('onclick', toFrench);
    document.getElementById('btnToEn').attachEvent('onclick', toEnglish);
    
    if (gallery) {
      // attach event to lightbox (use attachEvent)
      document.getElementById(lightboxElem).attachEvent('onclick', function() {document.getElementById(lightboxElem).style.display = 'none';});
    
      // attach events to gallery images (use attachEvent
      imgList.forEach(function(imgId) {
        document.getElementById(imgId).attachEvent('onclick', (function() { setLightboxImg(imgId,lightboxImg,lightboxElem);}));
      });
    }
  }
}
    
function toEnglish() {
  translateTo(frenchText, englishText);
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('languageShaelynch.com','en');
  }
  if (content) {
    translateToContent(frenchContent, englishContent);
  }
}
    
function toFrench() {
  translateTo(englishText, frenchText);
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('languageShaelynch.com','fr');
  }
  if (content) {
    translateToContent(englishContent, frenchContent);
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
