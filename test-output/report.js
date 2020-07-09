$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "search product sporting",
  "description": "",
  "id": "search-product-sporting",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "i am on the store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the requested product \"shoes\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_store_home_page()"
});
formatter.result({
  "duration": 8928373900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 29
    }
  ],
  "location": "SearchSteps.enter_the_requested(String)"
});
formatter.result({
  "duration": 188491400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search product online by pressing enter",
  "description": "",
  "id": "search-product-sporting;search-product-online-by-pressing-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "press enter",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select the brand \"PUMA\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select the size \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "i see the list of the requested product",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.press_enter()"
});
formatter.result({
  "duration": 6150794800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PUMA",
      "offset": 18
    }
  ],
  "location": "SearchSteps.select_the_brand(String)"
});
formatter.result({
  "duration": 1822914100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    }
  ],
  "location": "SearchSteps.select_the_size(String)"
});
formatter.result({
  "duration": 1676327300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 193192200,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 4113423500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "i am on the store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enter the requested product \"shoes\"",
  "keyword": "When "
});
formatter.match({
  "location": "SearchSteps.i_am_on_the_store_home_page()"
});
formatter.result({
  "duration": 7132858300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 29
    }
  ],
  "location": "SearchSteps.enter_the_requested(String)"
});
formatter.result({
  "duration": 176809000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search product online by pressing button",
  "description": "",
  "id": "search-product-sporting;search-product-online-by-pressing-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "click the button search",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "select the brand \"ASICS\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select the size \"9\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i see the list of the requested product",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "i close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.click_the_button_search()"
});
formatter.result({
  "duration": 4788397500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASICS",
      "offset": 18
    }
  ],
  "location": "SearchSteps.select_the_brand(String)"
});
formatter.result({
  "duration": 1917146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 17
    }
  ],
  "location": "SearchSteps.select_the_size(String)"
});
formatter.result({
  "duration": 1769465400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.I_see_the_list_of_the_requested_product()"
});
formatter.result({
  "duration": 225405100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.i_close_browser()"
});
formatter.result({
  "duration": 78321400,
  "status": "passed"
});
});