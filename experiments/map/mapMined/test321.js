





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e ? e[2] : null;
};
var argument2 = 1.3288484435214889e+308;
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.children[0];
};
var argument5 = null;
var argument6 = null;
var argument7 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.addClass(n, cssClass, args);
};
var argument8 = function (v, i) {
 callbackArguments.push(arguments) 

    var border = parseInt(v, 10) || 0, padding = parseInt(p[i], 10) || 0;
    return border + padding;
};
var argument9 = [0,122,-1];
var argument10 = r_2;
var base_0 = [460,-1,126,122]
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
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,126,122]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test321.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)