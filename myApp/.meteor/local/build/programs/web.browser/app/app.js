var require = meteorInstall({"client":{"template.reminders.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.reminders.js                                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.body.addContent((function() {                               // 2
  var view = this;                                                   // 3
  return "";                                                         // 4
}));                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                      // 6
                                                                     // 7
///////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/template.main.js                                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.body.addContent((function() {                               // 2
  var view = this;                                                   // 3
  return [ HTML.Raw('<h1>Welcome to the Work Tracker</h1>\n    \n    \n    <ul>\n        <li><a href="reminders.html">Reminders</a></li>\n        <li><a href="">Views</a></li>\n       <!-- <li><a href=""></a></li> -->\n        <li style="float:right"><a class="active" href="">About Company</a></li>\n    </ul>\n    \n    <br>\n    <br>\n    \n    <input id="task"><button id="add" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">Add</i></button>\n    \n    <div id="todos"></div>\n    \n    '), HTML.SCRIPT({
    src: "main.js"                                                   // 5
  }) ];                                                              // 6
}));                                                                 // 7
Meteor.startup(Template.body.renderToDocument);                      // 8
                                                                     // 9
///////////////////////////////////////////////////////////////////////

},"main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// client/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
function saveUserInput() {                                           // 1
    var UserInput = document.getElementById("task");                 // 2
    var todos = document.getElementById("todos");                    // 3
}                                                                    //
                                                                     //
function print(UserInput) {                                          // 6
    UserInput.append();                                              // 7
}                                                                    //
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.reminders.js");
require("./client/template.main.js");
require("./client/main.js");