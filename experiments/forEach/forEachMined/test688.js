





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (a.indexOf(e) < 0)
        a.push(e);
};
var argument2 = ["5",")","[","&nb","M","7ko","$","Q:"];
var argument3 = function (onLoad) {
 callbackArguments.push(arguments) 

    onLoad && onLoad(module);
};
var argument4 = true;
var argument5 = 3.3794996760718543e+307;
var argument6 = function (sym) {
 callbackArguments.push(arguments) 

    return sym.getName();
};
var argument7 = false;
var argument8 = null;
var argument9 = function (option) {
 callbackArguments.push(arguments) 

    option.selected = isDefined(items.get(option.value));
};
var argument10 = r_3;
var base_0 = [213,403,1.7976931348623157e+308,59,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,403,1.7976931348623157e+308,59,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,403,1.7976931348623157e+308,59,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,403,1.7976931348623157e+308,59,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test688.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)