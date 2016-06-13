var require = meteorInstall({"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.main.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.body.addContent((function() {                               // 2
  var view = this;                                                   // 3
  return HTML.Raw('<h1>Welcome to the Work Tracker</h1>\n    \n    \n    <ul>\n        <li><a href="">Reminders</a></li>\n        <li><a href="">Views</a></li>\n       <!-- <li><a href=""></a></li> -->\n        <li style="float:right"><a class="active" href="">About Company</a></li>\n    </ul>\n    \n    <br>\n    <br>\n    <input>');
}));                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                      // 6
                                                                     // 7
Template.__checkName("hello");                                       // 8
Template["hello"] = new Template("Template.hello", (function() {     // 9
  var view = this;                                                   // 10
  return "";                                                         // 11
}));                                                                 // 12
                                                                     // 13
Template.__checkName("info");                                        // 14
Template["info"] = new Template("Template.info", (function() {       // 15
  var view = this;                                                   // 16
  return "";                                                         // 17
}));                                                                 // 18
                                                                     // 19
///////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");