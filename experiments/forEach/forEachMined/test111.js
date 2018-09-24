





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (attribute) {
 callbackArguments.push(arguments) 

    storeElement.removeAttribute(attribute.name);
};
var argument5 = false;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    appObj[property](item, value[item]);
};
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    if (a[group] instanceof Array && a[group].indexOf(e) >= 0) {
        present.push(e);
    } else if (typeof a[group] == 'string' && a[group] == e) {
        present.push(e);
    }
};
var argument8 = "";
var base_0 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test111.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)