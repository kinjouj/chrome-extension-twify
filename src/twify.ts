const noop = (): void => {
  // noop
};

export default class Twify {
  private selectionText: string | undefined;
  private title: string | undefined;
  private url: string;

  constructor(info: chrome.contextMenus.OnClickData, tab: chrome.tabs.Tab) {
    this.selectionText = info.selectionText;
    this.title = 'linkUrl' in info ? undefined : this.selectionText ?? tab.title;
    this.url = info.linkUrl ?? tab.url;
  }

  public post(): void {
    const arr: string[] = [];

    if (this.title != null) {
      arr.push(encodeURIComponent(this.title));
      arr.push('%20');
    }

    arr.push(encodeURIComponent(this.url));
    const text = arr.join('');
    chrome.tabs.create({ url: `https://x.com/intent/tweet?source=webclient&text=${text}` }, noop);
  }

  public search(): void {
    const text = this.selectionText ?? this.url;
    chrome.tabs.create({ url: `https://x.com/search?q=${text}` }, noop);
  }
}
