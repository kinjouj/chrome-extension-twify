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

  return null;
}

function buildTweetURL(title, url) {
  if ((title !== undefined && title !== null) && (url !== undefined && url !== null)) {
    return "http://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(title) + '%20' + encodeURIComponent(url);
  }

  return undefined;
}

(function() {

  chrome.contextMenus.create({
    "id": "twify_ctxmenu_tweet",
    "type": "normal",
    "title": "twify",
    "contexts": ["page", "selection"]
  });

  chrome.contextMenus.create({
    "id": "twify_ctxmenu_search",
    "type": "normal",
    "title": "TwitterでこのURLを検索",
    "contexts": ["page"]
  });

  chrome.contextMenus.onClicked.addListener(function(info, tab) {

    if (info.menuItemId === "twify_ctxmenu_tweet") {
      var title = null;

      if ("selectionText" in info) {
        title = info.selectionText;
      } else {
        title = getTitle(tab);
      }

      var url = getURL(tab);

      if (title !== null && url !== undefined && /^http/.test(url)) {
        var openURL = buildTweetURL(title, url);

        if (openURL !== undefined) {
          chrome.tabs.create({ "url": openURL });
        }
      }
    } else if (info.menuItemId === "twify_ctxmenu_search") {
      var url = getURL(tab);
      chrome.tabs.create({ "url": "https://twitter.com/search?q=" + url });
    }
  });
})();
