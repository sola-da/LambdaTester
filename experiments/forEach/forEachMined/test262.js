





var callbackArguments = [];
var argument1 = function (branch) {
 callbackArguments.push(arguments) 

    toVisit.push({
        pos: pos + 1,
        ids: branch,
        ctx: newCtx
    });
};
var argument2 = function (k) {
 callbackArguments.push(arguments) 

    to[k] = from[k];
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function (field) {
 callbackArguments.push(arguments) 

    if (file.indexOf(field.jsFunctionName) < 0 && fieldIgnores.indexOf(field.jsFunctionName < 0)) {
        fieldsResult.push(field.jsFunctionName);
    }
};
var argument6 = function (methodName) {
 callbackArguments.push(arguments) 

    self[methodName] = function () {
        throw Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
    };
};
var base_0 = ["Y",893,"Q?",893,"S",843,"&",843,"IF"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y",893,"Q?",893,"S",843,"&",843,"IF"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y",893,"Q?",893,"S",843,"&",843,"IF"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Y",893,"Q?",893,"S",843,"&",843,"IF"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test262.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)