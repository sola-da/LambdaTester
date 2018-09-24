





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    return filters.all(function (filter) {
        return filter.compare(model);
    });
};
var argument2 = "^";
var argument3 = function (log) {
 callbackArguments.push(arguments) 

    return log.reactID.indexOf(rootID) === 0;
};
var argument4 = null;
var argument5 = "!";
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    if (r.cursor.row == row)
        return true;
    row = r.cursor.row;
};
var argument7 = false;
var argument8 = true;
var argument9 = function (id) {
 callbackArguments.push(arguments) 

    return hasTarget(c3.data.targets, id);
};
var argument10 = [25,627,843,655,213,5e-324,655,823];
var argument11 = null;
var base_0 = [607,595,607,618,627,-100,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,595,607,618,627,-100,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,595,607,618,627,-100,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,595,607,618,627,-100,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)