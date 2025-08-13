import Twify from './twify';

const TWIFY_ACTION_TWEET_ID  = 'twify_ctxmenu_tweet';
const TWIFY_ACTION_TWEET_TITLE = 'Xでポスト';
const TWIFY_ACTION_SEARCH_ID = 'twify_ctx_menu_search';
const TWIFY_ACTION_SEARCH_TITLE = 'Xで検索';

chrome.contextMenus.create({
  contexts: [chrome.contextMenus.ContextType.PAGE, chrome.contextMenus.ContextType.LINK],
  id: TWIFY_ACTION_TWEET_ID,
  title: TWIFY_ACTION_TWEET_TITLE,
});

chrome.contextMenus.create({
  contexts: [chrome.contextMenus.ContextType.PAGE, chrome.contextMenus.ContextType.SELECTION],
  id: TWIFY_ACTION_SEARCH_ID,
  title: TWIFY_ACTION_SEARCH_TITLE,
});

chrome.contextMenus.onClicked.addListener((info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) => {
  const twify: Twify = new Twify(info, tab as chrome.tabs.Tab);

  switch (info.menuItemId) {
    case TWIFY_ACTION_TWEET_ID: {
      twify.post();
      break;
    }
    case TWIFY_ACTION_SEARCH_ID: {
      twify.search();
      break;
    }
  }
});
