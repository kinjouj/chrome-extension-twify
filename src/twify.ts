export default class Twify {

  public url: string;
  public title: string;
  public isSelectionMode: boolean;

  constructor(info: chrome.contextMenus.OnClickData, tab?: chrome.tabs.Tab) {
    this.url = tab?.url as string;
    this.isSelectionMode = 'selectionText' in info;

    if (this.isSelectionMode) {
      this.title = info.selectionText as string;
    } else {
      this.title = tab?.title as string;
    }
  }

  public post(): void {
    const title = encodeURIComponent(this.title);
    const url   = encodeURIComponent(this.url);
    chrome.tabs.create({ url: `https://x.com/intent/tweet?source=webclient&text=${title}%20${url}` });
  }

  public search(): void {
    const text = this.isSelectionMode ? this.title : this.url;
    chrome.tabs.create({ url: `https://x.com/search?q=${text}` });
  }
}
