$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US_IMG_Regression.feature");
formatter.feature({
  "id": "us-img-regression-test-cases",
  "description": "These test cases will be deployed against the US IMG Nikon Site",
  "name": "US IMG Regression Test Cases",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 108999,
  "status": "passed"
});
formatter.scenario({
  "id": "us-img-regression-test-cases;tc-img-check-1---fully-shipped-order",
  "tags": [
    {
      "name": "@US_IMG_Regression",
      "line": 4
    }
  ],
  "description": "",
  "name": "TC-IMG-Check-1 - Fully Shipped Order",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 1503",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "I navigate to the IMG cart",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "I proceed to check out",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I log in to SSO as a regular registered user",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I complete the order using a visa",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "arguments": [
    {
      "val": "1503",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 34442856577,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 12264588433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 38966588126,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 11424656691,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IMG",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "duration": 8180547908,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 18480117718,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:81"
});
formatter.result({
  "duration": 6352330652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:109"
});
formatter.result({
  "duration": 54422450183,
  "status": "passed"
});
formatter.after({
  "duration": 32912,
  "status": "passed"
});
formatter.before({
  "duration": 15571,
  "status": "passed"
});
formatter.scenario({
  "id": "us-img-regression-test-cases;tc-img-check-2---partially-shipped-order",
  "tags": [
    {
      "name": "@US_IMG_Regression",
      "line": 15
    }
  ],
  "description": "",
  "name": "TC-IMG-Check-2 - Partially Shipped Order",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 1503",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I have navigated to the IMG PDP of the regular product 2170",
  "keyword": "Given ",
  "line": 19
});
formatter.step({
  "name": "I add the product to the cart",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I navigate to the IMG cart",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I proceed to check out",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I complete the order using a visa",
  "keyword": "Then ",
  "line": 23
});
formatter.match({
  "arguments": [
    {
      "val": "1503",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 79006784,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 28002323645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2170",
      "offset": 55
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:17"
});
formatter.result({
  "duration": 37808945435,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:43"
});
formatter.result({
  "duration": 11488164483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IMG",
      "offset": 18
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:48"
});
formatter.result({
  "duration": 4904707877,
  "status": "passed"
});
formatter.match({
  "location": "FirstPurchaseFlow_steps.groovy:76"
});
formatter.result({
  "duration": 17234347065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "visa",
      "offset": 29
    }
  ],
  "location": "FirstPurchaseFlow_steps.groovy:109"
});
formatter.result({
  "duration": 30712298264,
  "status": "passed"
});
formatter.after({
  "duration": 23710,
  "status": "passed"
});
});