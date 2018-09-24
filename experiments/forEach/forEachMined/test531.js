





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    if (!c3.data.xs[id]) {
        throw new Error('x is not defined for id = "' + id + '".');
    }
};
var argument2 = r_0;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    Traverse[key] = function (obj) {
        var args = [].slice.call(arguments, 1);
        var t = Traverse(obj);
        return t[key].apply(t, args);
    };
};
var argument4 = null;
var argument5 = -100;
var argument6 = function (object) {
 callbackArguments.push(arguments) 

    var stringObject = JSON.stringify(object).toLowerCase();
    if (stringObject.match(searchTerm.toLowerCase()))
        filteredList.push(object);
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    $(item).appendTo($('#userlist'));
};
var argument8 = true;
var base_0 = ["D","P|j4","it","G","(","meq","l","#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","P|j4","it","G","(","meq","l","#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","P|j4","it","G","(","meq","l","#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","P|j4","it","G","(","meq","l","#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)