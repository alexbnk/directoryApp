app.factory('todoFactory', function () {

var change = function(id) {
      console.log(id);
      //people.splice(id,1,{firstName:firstName, lastName:lastName);
};
var deleteThis = function(id) {
  tasks.splice(id,1);
};

var add = function(o,t,n,p,s) {
  var creationTime = Date();
  tasks.push({created: creationTime, owner:o,text:t,note:n,priority:p,status:false})
};

var tasks = [
{created: Date(),
owner : "alex",
text  : "This is a sample task",
note  : "just a note",
priority: 5,
status:false},
{created: Date(),
owner : "alex",
text  : "This is a DONE task",
note  : "just a note",
priority: 5,
status:true}
  ];

return { tasks: tasks,
        change: change,
        delete: deleteThis,
        add: add
  };

})
