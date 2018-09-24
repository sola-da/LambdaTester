





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item.draw(viewport.lighting);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    callback.call(context, key, key, entireSet);
};
var argument5 = function (pair) {
 callbackArguments.push(arguments) 

    var eq_idx = pair.indexOf('=');
    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();
    if ('"' == val[0]) {
        val = val.slice(1, -1);
    }
    if (undefined == obj[key]) {
        obj[key] = decode(val);
    }
};
var argument6 = "DA";
var argument7 = function (k) {
 callbackArguments.push(arguments) 

    console.log('Style added \'' + k + ': ' + now[k] + '\'', ev.target);
};
var argument8 = r_2;
var argument9 = [-1,"e",627,59,893,"n",-1,"z",122,242];
var base_0 = [607,242,49,5e-324,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,242,49,5e-324,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,242,49,5e-324,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,242,49,5e-324,843]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test395.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)