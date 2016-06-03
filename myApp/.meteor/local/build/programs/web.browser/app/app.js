var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/main.html                                                                      //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.exports = require("./template.main.js");                                          // 1
                                                                                         // 2
///////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/template.main.js                                                               //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.body.addContent((function() {                                                   // 2
  var view = this;                                                                       // 3
  return [ HTML.Raw('<h1>Welcome to the Work Tracker</h1>\n    \n    \n    <ul>\n        <li><a href="">Reminders</a></li>\n        <li><a href="">Views</a></li>\n        <li><a href=""></a></li>\n        <li style="float:right"><a class="active" href="">About Company</a></li>\n    </ul>\n    \n     '), HTML.UL("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));                                         // 5
  }, function() {                                                                        // 6
    return [ "\n        ", Spacebars.include(view.lookupTemplate("task")), "\n      " ];
  }), "\n    ") ];                                                                       // 8
}));                                                                                     // 9
Meteor.startup(Template.body.renderToDocument);                                          // 10
                                                                                         // 11
Template.__checkName("hello");                                                           // 12
Template["hello"] = new Template("Template.hello", (function() {                         // 13
  var view = this;                                                                       // 14
  return "";                                                                             // 15
}));                                                                                     // 16
                                                                                         // 17
Template.__checkName("info");                                                            // 18
Template["info"] = new Template("Template.info", (function() {                           // 19
  var view = this;                                                                       // 20
  return "";                                                                             // 21
}));                                                                                     // 22
                                                                                         // 23
///////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/main.js                                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
var _templating = require('meteor/templating');                                          // 1
                                                                                         //
var _reactiveVar = require('meteor/reactive-var');                                       // 2
                                                                                         //
require('./main.html');                                                                  // 4
                                                                                         //
_templating.Template.body.helpers({});                                                   // 6
///////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");