function getTitle(tab) {
  if (tab !== undefined && tab !== null) {
    if ("title" in tab) {
      return tab.title;
    }
  }

  return undefined;
}

function getURL(tab) {
  if (tab !== undefined && tab !== null) {
    if ("url" in tab) {
      return tab.url;
    }
  }

  return undefined;
}

function buildTweetURL(title, url) {
  if ((title !== undefined && title !== null) && (url !== undefined && url !== null)) {
    return "http://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(title) + '%20' + encodeURIComponent(url);
  }

  return undefined;
}

(function() {
  chrome.contextMenus.create({
    "id": "twiffy_ctxmenu",
    "type": "normal",
    "title": "twify",
    "contexts": ["page"]
  });
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var title = getTitle(tab);
    var url = getURL(tab);

    if (title !== undefined && url !== undefined && /^http/.test(url)) {
      var openURL = buildTweetURL(title, url);

      if (openURL !== undefined) {
        chrome.tabs.create({ "url": openURL });
      }
    }
  });
})();
