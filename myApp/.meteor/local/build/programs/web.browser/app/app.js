var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/main.html                                                                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
module.exports = require("./template.main.js");                                                           // 1
                                                                                                          // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/template.main.js                                                                                //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
                                                                                                          // 1
Template.body.addContent((function() {                                                                    // 2
  var view = this;                                                                                        // 3
  return HTML.Raw('<h1>Welcome to the Work Tracker</h1>\n    \n    \n    <ul>\n        <li><a href="">Reminders</a></li>\n        <li><a href="">Views</a></li>\n        <li><a href=""></a></li>\n        <li style="float:right"><a class="active" href="">About Company</a></li>\n    </ul>');
}));                                                                                                      // 5
Meteor.startup(Template.body.renderToDocument);                                                           // 6
                                                                                                          // 7
Template.__checkName("hello");                                                                            // 8
Template["hello"] = new Template("Template.hello", (function() {                                          // 9
  var view = this;                                                                                        // 10
  return "";                                                                                              // 11
}));                                                                                                      // 12
                                                                                                          // 13
Template.__checkName("info");                                                                             // 14
Template["info"] = new Template("Template.info", (function() {                                            // 15
  var view = this;                                                                                        // 16
  return "";                                                                                              // 17
}));                                                                                                      // 18
                                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var","./main.html",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// client/main.js                                                                                         //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
var _templating = require('meteor/templating');                                                           // 1
                                                                                                          //
var _reactiveVar = require('meteor/reactive-var');                                                        // 2
                                                                                                          //
require('./main.html');                                                                                   // 4
                                                                                                          //
if (Meteor.isClient) {                                                                                    // 6
    _templating.Template.messages.helpers({                                                               // 7
        messages: function () {                                                                           // 8
            function messages() {                                                                         // 8
                return Messages.find({}, { sort: { time: -1 } });                                         // 9
            }                                                                                             //
                                                                                                          //
            return messages;                                                                              //
        }()                                                                                               //
    });                                                                                                   //
                                                                                                          //
    _templating.Template.input.events = {                                                                 // 13
        'keydown input#message': function () {                                                            // 14
            function keydownInputMessage(event) {                                                         // 14
                if (event.which == 13) {                                                                  // 15
                    if (Meteor.user()) var name = Meteor.user().profile.name;else var name = 'Anonymous';
                    var message = document.getElementById('message');                                     // 20
                    if (message.value != '') {                                                            // 21
                        Messages.insert({                                                                 // 22
                            name: name,                                                                   // 23
                            message: message.value,                                                       // 24
                            time: Date.now()                                                              // 25
                        });                                                                               //
                                                                                                          //
                        document.getElementById('message').value = '';                                    // 28
                        message.value = '';                                                               // 29
                    }                                                                                     //
                }                                                                                         //
            }                                                                                             //
                                                                                                          //
            return keydownInputMessage;                                                                   //
        }()                                                                                               //
                                                                                                          //
    };                                                                                                    //
}                                                                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");