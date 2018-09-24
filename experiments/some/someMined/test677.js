





var callbackArguments = [];
var argument1 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument2 = null;
var argument3 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Dispatcher' && pair[1] === 'express';
};
var argument4 = false;
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument6 = function (db) {
 callbackArguments.push(arguments) 

    return db.id === doc.id;
};
var argument7 = r_0;
var argument8 = "KP";
var base_0 = [783,969,783,126,655,100,618]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,783,126,655,100,618]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,969,783,126,655,100,618]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,969,783,126,655,100,618]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test677.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)