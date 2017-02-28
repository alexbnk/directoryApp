app.factory('directoryFactory', function () {

var change = function(id,fn,ln) {
      console.log(id,fn,ln);
      //people.splice(id,1,{firstName:firstName, lastName:lastName);
};
var deleteThis = function(id) {
  people.splice(id,1);
};

var people = [
{firstName: "Bob",
lastName : "Longbeard"},
{firstName: "John",
lastName : "The Ripper"},
{firstName: "Olivia",
lastName : "Newton"},
{firstName: "Jeff",
lastName : "Barsky"},
{firstName: "Jason",
lastName : "Donovan"},
{firstName: "Kylie",
lastName : "Minouge"}
  ];

return {people: people,
        change: change,
        delete: deleteThis
  };

})
