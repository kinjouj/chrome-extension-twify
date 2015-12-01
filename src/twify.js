const TWIFY_ACTION_TWEET = "twify_ctxmenu_tweet";
const TWIFY_ACTION_SEARCH = "twify_ctxmenu_search";

class Twify {

  constructor(info, tab) {
    this.id = info.menuItemId;
    this.url = tab.url;

    if ("selectionText" in info) {
      this.title = info.selectionText;
    } else {
      this.title = tab.title;
    }
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getUrl() {
    return this.url;
  }
}

chrome.contextMenus.create({
  "id": TWIFY_ACTION_TWEET,
  "title": "TwitterでこのURLをツイート",
  "contexts": ["page", "selection"]
});

chrome.contextMenus.create({
  "id": TWIFY_ACTION_SEARCH,
  "title": "Twitterで検索",
  "contexts": ["page", "selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  let twify = new Twify(info, tab);

  if (twify.getId() === TWIFY_ACTION_TWEET) {
    let title = encodeURIComponent(twify.getTitle());
    let url = encodeURIComponent(twify.getUrl());

    chrome.tabs.create({
      "url": `https://twitter.com/intent/tweet?source=webclient&text=${title}%20${url}`
    });
  } else if (twify.getId() === TWIFY_ACTION_SEARCH) {
    var q = "selectionText" in info ? twify.getTitle() : twify.getUrl();
    chrome.tabs.create({ "url": `https://twitter.com/search?q=${q}` });
  }
});
