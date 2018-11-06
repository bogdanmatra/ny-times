# ny-times
A simple single page application which shows the latest 10 articles about a topic.

* Endpoint: https://developer.nytimes.com/article_search_v2.json

### Feature List
* User opens the link (hosted [here](https://bogdanmatra.github.io/ny-times)) and the most recent 10 articles for `Amsterdam` appear.
* The user can change the topic and hit `Enter` or click the `Search` button to show up the 10 results for his new topic.
* If no topic is selected the search will show the most recent 10 articles.
* A loader is shown when articles are loading.
* Most recent articles are always shown first.
* The user can click on an article and a summary is shown in a modal. Clicking the link icon opens the article on the New York Times website.


### Application Structure (dependency tree)

```
$http
    \
   NYTimesService  $uibModal  $scope
              \       |        /
              ArticlesController
```

### Tests

* Prerequisites: Install Node.js - https://nodejs.org
* How to run tests: `npm install && npm test`
* Tests documentation: https://code.angularjs.org/1.5.11/docs/guide/unit-testing
* **OBS**: Ony 4 unit tests written for `ArticlesController.js` as a proof of concept (see `ArticlesController.spec.js`).

* Manually tested on browsers: *Chrome*, *Firefox*, *Safari* on desktop Mac OS X and *Chrome*, *Safari* mobile browsers (Android and iOS).


### Other technical references

Framework used:
* Angular JS: https://code.angularjs.org/1.5.11/docs/guide

Other 3rd party libraries:
* Bootstrap CSS: https://getbootstrap.com
* Angular Bootstrap: https://angular-ui.github.io/bootstrap/
* Loader inspired from: https://www.w3schools.com/howto/howto_css_loader.asp
* Icon: https://favicon.io/emoji-favicons/newspaper
* Icon: https://favicon.io/emoji-favicons/rolled-up-newspaper
* Font: https://smartfonts.com/olde-english.font
* Background Image (acquired with licence): https://stock.adobe.com/ro/images/seamless-vector-pattern-with-book-pages/116108513