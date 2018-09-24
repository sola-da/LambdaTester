





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return [
        '(typeof i',
        i,
        '!==\'number\'||i',
        i,
        '<0)?this._shape',
        i,
        ':i',
        i,
        '|0'
    ].join('');
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return vars.format.value(d, vars.y.value);
};
var argument5 = false;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    return this[key];
};
var argument7 = {"":""};
var argument8 = null;
var argument9 = function (str) {
 callbackArguments.push(arguments) 

    return color(name, str);
};
var argument10 = r_0;
var argument11 = r_1;
var base_0 = ["q",")0CG",783,"A",-100,-1,607,"w","JE"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test603.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)