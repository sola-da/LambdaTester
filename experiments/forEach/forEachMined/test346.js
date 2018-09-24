





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item = '<li><b>' + item + ':</b> {{' + item + '}}</li>';
    newArray.push(item);
};
var argument2 = function (handler) {
 callbackArguments.push(arguments) 

    handler.apply(this, args);
};
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    item = path.join(dir, item);
    remove.removeSync(item);
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function (expr) {
 callbackArguments.push(arguments) 

    expr._validate(entityType, usesNameOnServer);
};
var base_0 = [100,213,969,82,618,823,59,59,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,213,969,82,618,823,59,59,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,213,969,82,618,823,59,59,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,213,969,82,618,823,59,59,82]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test346.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)