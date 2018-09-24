





var callbackArguments = [];
var argument1 = function (model) {
 callbackArguments.push(arguments) 

    if (!visited[model.cid]) {
        model.onLoad(options, visited);
    }
};
var argument2 = function (e) {
 callbackArguments.push(arguments) 

    (i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e);
};
var argument3 = false;
var argument4 = 714;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    if (elem.getAttribute(a) !== null) {
        obj[a] = elem.getAttribute(a);
    }
};
var argument6 = 1.5490238156719779e+308;
var argument7 = r_2;
var argument8 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj) {
        for (var key in obj) {
            result[key] = obj[key];
        }
    }
};
var argument9 = null;
var base_0 = [157,783,-100,213,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,783,-100,213,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,783,-100,213,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,783,-100,213,655]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test717.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)