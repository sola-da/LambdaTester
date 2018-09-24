





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    data[key] = settings.get(key);
};
var argument2 = "{";
var argument3 = true;
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1)
        children.push(element);
};
var argument5 = false;
var argument6 = function (event) {
 callbackArguments.push(arguments) 

    if (domain.hidden)
        event.hidden = true;
    api[domain.domain + '.' + (event.name || event.id)] = event;
};
var argument7 = {"1.7522599687829822e+308":"4"};
var argument8 = [618,0,893,843,607,595];
var argument9 = function (needle) {
 callbackArguments.push(arguments) 

    if (typeList.indexOf(needle) == -1) {
        hasType = false;
        return false;
    }
};
var base_0 = ["K-b>","n"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K-b>","n"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K-b>","n"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K-b>","n"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test474.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)