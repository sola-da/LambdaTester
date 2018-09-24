





var callbackArguments = [];
var argument1 = function (np) {
 callbackArguments.push(arguments) 

    stype._addPropertyCore(NavigationProperty.fromJSON(np));
};
var argument2 = function (propName) {
 callbackArguments.push(arguments) 

    target[propName] = source[propName];
};
var argument3 = 1.0302428570304664e+308;
var argument4 = r_1;
var argument5 = function (error, index) {
 callbackArguments.push(arguments) 

    karmakWebpack._error('...');
    karmakWebpack._error(index + 1 + ': ' + error.message);
    karmakWebpack._error('Module: ' + error.module.userRequest);
    karmakWebpack._error('\n' + error.details);
};
var argument6 = true;
var argument7 = r_2;
var argument8 = function (value, key) {
 callbackArguments.push(arguments) 

    if (value)
        xhr.setRequestHeader(key, value);
};
var argument9 = "";
var base_0 = [893,-100,-100,618,627,714,460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,-100,618,627,714,460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,-100,618,627,714,460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,-100,618,627,714,460]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test420.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)