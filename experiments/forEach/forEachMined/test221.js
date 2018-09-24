





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    if (!visited[model.cid]) {
        model.onLoad(options, visited);
    }
};
var argument2 = false;
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    updateValues(id);
};
var argument4 = function (fieldError) {
 callbackArguments.push(arguments) 

    var attrName = fieldError.field, message = fieldError.message;
    if (!_.isArray(errors[attrName]))
        errors[attrName] = [];
    errors[attrName].push(message);
};
var argument5 = true;
var argument6 = function (stat) {
 callbackArguments.push(arguments) 

    if (stat instanceof AST_SimpleStatement)
        seq.push(stat.body);
    else
        push_seq(), ret.push(stat);
};
var base_0 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)