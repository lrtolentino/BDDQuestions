$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Questions.feature");
formatter.feature({
  "line": 2,
  "name": "Set SkyBlue Background",
  "description": "",
  "id": "set-skyblue-background",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2566044800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Background:"
    },
    {
      "line": 5,
      "value": "# \tGiven User is on the Techfios test page"
    }
  ],
  "line": 8,
  "name": "Set SkyBlue Background",
  "description": "",
  "id": "set-skyblue-background;set-skyblue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is on the Techfios test page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Skyblue button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_Techfios_test_page()"
});
formatter.result({
  "duration": 525871700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Skyblue_button()"
});
formatter.result({
  "duration": 43784100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 136689500,
  "status": "passed"
});
formatter.after({
  "duration": 660244600,
  "status": "passed"
});
});