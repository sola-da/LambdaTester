





var callbackArguments = [];
var argument1 = function (eventType) {
 callbackArguments.push(arguments) 

    window.addEventListener(eventType, function handleNetworkEvent(event) {
        radio.handle('network.' + event.message);
    });
};
var argument2 = false;
var argument3 = 59;
var argument4 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument5 = 714;
var argument6 = function (item, name) {
 callbackArguments.push(arguments) 

    strings[key] = strings[key].replace(new RegExp('{' + name + '}', 'g'), additionalGlobals[name]);
};
var argument7 = [969,126,-1,25,25,893,655];
var argument8 = function (value, name) {
 callbackArguments.push(arguments) 

    if (name === 'view' || name === 'init' || name === 'as') {
        return;
    }
    utils.prop(view, name, value);
};
var argument9 = false;
var argument10 = r_3;
var base_0 = [893,595,242,714,403,627,705,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,595,242,714,403,627,705,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,595,242,714,403,627,705,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,595,242,714,403,627,705,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)