





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    if (file.id === id) {
        tmp = file;
        return false;
    }
};
var argument2 = function (m) {
 callbackArguments.push(arguments) 

    var ch1 = m.charAt(0);
    var ch2 = m.charAt(m.length - 1);
    if (ch1 === ch2 && (ch1 === '"' || ch1 === '\'')) {
        m = m.substr(1, m.length - 2).replace('\\"', '"');
    }
    membersOnly[m] = false;
};
var argument3 = [460,823,607,59];
var argument4 = function (gPoint) {
 callbackArguments.push(arguments) 

    gPoint.setAttribute('cx', Number(gPoint.getAttribute('cx')) + that.movedRX);
    gPoint.setAttribute('cy', Number(gPoint.getAttribute('cy')) + that.movedRY);
};
var argument5 = 1.3950753906008608e+308;
var argument6 = r_1;
var argument7 = function (todo) {
 callbackArguments.push(arguments) 

    if (!todo.done)
        $scope.todos.push(todo);
};
var base_0 = [213,893,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,893,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,893,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,893,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test199.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)