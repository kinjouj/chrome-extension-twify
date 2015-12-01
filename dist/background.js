(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TWIFY_ACTION_TWEET = "twify_ctxmenu_tweet";
var TWIFY_ACTION_SEARCH = "twify_ctxmenu_search";

var Twify = (function () {
  function Twify(info, tab) {
    _classCallCheck(this, Twify);

    this.id = info.menuItemId;
    this.url = tab.url;

    if ("selectionText" in info) {
      this.title = info.selectionText;
    } else {
      this.title = tab.title;
    }
  }

  _createClass(Twify, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.url;
    }
  }]);

  return Twify;
})();

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

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  var twify = new Twify(info, tab);

  if (twify.getId() === TWIFY_ACTION_TWEET) {
    var title = encodeURIComponent(twify.getTitle());
    var url = encodeURIComponent(twify.getUrl());

    chrome.tabs.create({
      "url": "https://twitter.com/intent/tweet?source=webclient&text=" + title + "%20" + url
    });
  } else if (twify.getId() === TWIFY_ACTION_SEARCH) {
    var q = "selectionText" in info ? twify.getTitle() : twify.getUrl();
    chrome.tabs.create({ "url": "https://twitter.com/search?q=" + q });
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5saW51eGJyZXcvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHdpZnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQSxJQUFNLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDO0FBQ2pELElBQU0sbUJBQW1CLEdBQUcsc0JBQXNCLENBQUM7O0lBRTdDLEtBQUs7QUFFVCxXQUZJLEtBQUssQ0FFRyxJQUFJLEVBQUUsR0FBRyxFQUFFOzBCQUZuQixLQUFLOztBQUdQLFFBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMxQixRQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7O0FBRW5CLFFBQUksZUFBZSxJQUFJLElBQUksRUFBRTtBQUMzQixVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDakMsTUFBTTtBQUNMLFVBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztLQUN4QjtHQUNGOztlQVhHLEtBQUs7OzRCQWFEO0FBQ04sYUFBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7K0JBRVU7QUFDVCxhQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUNqQjs7O1NBdkJHLEtBQUs7OztBQTBCWCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUN6QixNQUFJLEVBQUUsa0JBQWtCO0FBQ3hCLFNBQU8sRUFBRSxvQkFBb0I7QUFDN0IsWUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztDQUNsQyxDQUFDLENBQUM7O0FBRUgsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7QUFDekIsTUFBSSxFQUFFLG1CQUFtQjtBQUN6QixTQUFPLEVBQUUsWUFBWTtBQUNyQixZQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO0NBQ2xDLENBQUMsQ0FBQzs7QUFFSCxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBUyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzVELE1BQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzs7QUFFakMsTUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssa0JBQWtCLEVBQUU7QUFDeEMsUUFBSSxLQUFLLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDakQsUUFBSSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O0FBRTdDLFVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ2pCLFdBQUssOERBQTRELEtBQUssV0FBTSxHQUFHLEFBQUU7S0FDbEYsQ0FBQyxDQUFDO0dBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxtQkFBbUIsRUFBRTtBQUNoRCxRQUFJLENBQUMsR0FBRyxlQUFlLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEUsVUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLG9DQUFrQyxDQUFDLEFBQUUsRUFBRSxDQUFDLENBQUM7R0FDcEU7Q0FDRixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc3QgVFdJRllfQUNUSU9OX1RXRUVUID0gXCJ0d2lmeV9jdHhtZW51X3R3ZWV0XCI7XG5jb25zdCBUV0lGWV9BQ1RJT05fU0VBUkNIID0gXCJ0d2lmeV9jdHhtZW51X3NlYXJjaFwiO1xuXG5jbGFzcyBUd2lmeSB7XG5cbiAgY29uc3RydWN0b3IoaW5mbywgdGFiKSB7XG4gICAgdGhpcy5pZCA9IGluZm8ubWVudUl0ZW1JZDtcbiAgICB0aGlzLnVybCA9IHRhYi51cmw7XG5cbiAgICBpZiAoXCJzZWxlY3Rpb25UZXh0XCIgaW4gaW5mbykge1xuICAgICAgdGhpcy50aXRsZSA9IGluZm8uc2VsZWN0aW9uVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZSA9IHRhYi50aXRsZTtcbiAgICB9XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG5cbiAgZ2V0VXJsKCkge1xuICAgIHJldHVybiB0aGlzLnVybDtcbiAgfVxufVxuXG5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gIFwiaWRcIjogVFdJRllfQUNUSU9OX1RXRUVULFxuICBcInRpdGxlXCI6IFwiVHdpdHRlcuOBp+OBk+OBrlVSTOOCkuODhOOCpOODvOODiFwiLFxuICBcImNvbnRleHRzXCI6IFtcInBhZ2VcIiwgXCJzZWxlY3Rpb25cIl1cbn0pO1xuXG5jaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gIFwiaWRcIjogVFdJRllfQUNUSU9OX1NFQVJDSCxcbiAgXCJ0aXRsZVwiOiBcIlR3aXR0ZXLjgafmpJzntKJcIixcbiAgXCJjb250ZXh0c1wiOiBbXCJwYWdlXCIsIFwic2VsZWN0aW9uXCJdXG59KTtcblxuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oaW5mbywgdGFiKSB7XG4gIGxldCB0d2lmeSA9IG5ldyBUd2lmeShpbmZvLCB0YWIpO1xuXG4gIGlmICh0d2lmeS5nZXRJZCgpID09PSBUV0lGWV9BQ1RJT05fVFdFRVQpIHtcbiAgICBsZXQgdGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQodHdpZnkuZ2V0VGl0bGUoKSk7XG4gICAgbGV0IHVybCA9IGVuY29kZVVSSUNvbXBvbmVudCh0d2lmeS5nZXRVcmwoKSk7XG5cbiAgICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgICAgXCJ1cmxcIjogYGh0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0P3NvdXJjZT13ZWJjbGllbnQmdGV4dD0ke3RpdGxlfSUyMCR7dXJsfWBcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0d2lmeS5nZXRJZCgpID09PSBUV0lGWV9BQ1RJT05fU0VBUkNIKSB7XG4gICAgdmFyIHEgPSBcInNlbGVjdGlvblRleHRcIiBpbiBpbmZvID8gdHdpZnkuZ2V0VGl0bGUoKSA6IHR3aWZ5LmdldFVybCgpO1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IFwidXJsXCI6IGBodHRwczovL3R3aXR0ZXIuY29tL3NlYXJjaD9xPSR7cX1gIH0pO1xuICB9XG59KTtcbiJdfQ==
