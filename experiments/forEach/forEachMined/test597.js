





var callbackArguments = [];
var argument1 = function (t) {
 callbackArguments.push(arguments) 

    J(this, t);
};
var argument2 = true;
var argument3 = function (items) {
 callbackArguments.push(arguments) 

    items = items.filter(function (item) {
        return item['cols'];
    });
    if (items.length) {
        var sortedGroup = items.sort(compare('level', 'desc')), lastLevel = sortedGroup[0].level;
        if (level < lastLevel) {
            level = lastLevel;
        }
    }
};
var argument4 = function (part) {
 callbackArguments.push(arguments) 

    part = part.split('=');
    var key = part.shift().toLowerCase();
    var value = part.join('=').trim();
    if (key === 'user') {
        username = value;
    } else if (key === 'auth') {
        value = value.split(/\s+/);
        if (value.shift().toLowerCase() === 'bearer') {
            accessToken = value.join(' ');
        }
    }
};
var argument5 = r_2;
var argument6 = "C{=";
var argument7 = function (elm) {
 callbackArguments.push(arguments) 

    result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
};
var argument8 = true;
var argument9 = null;
var base_0 = [242,618,242,-100,1.7976931348623157e+308,59,59,783,213,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,618,242,-100,1.7976931348623157e+308,59,59,783,213,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,618,242,-100,1.7976931348623157e+308,59,59,783,213,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,618,242,-100,1.7976931348623157e+308,59,59,783,213,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test597.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)