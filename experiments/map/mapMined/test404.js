





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    a = a.cloneNode(deep != undefined ? deep : true);
    a.$events = null;
    return a;
};
var argument2 = null;
var argument3 = null;
var argument4 = function (index, element) {
 callbackArguments.push(arguments) 

    return element.form == form && element.name == name && element || null;
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument6 = true;
var argument7 = function (li) {
 callbackArguments.push(arguments) 

    return that.tabs.index(li);
};
var base_0 = ["h","?[R","g#ab","k"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","?[R","g#ab","k"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","?[R","g#ab","k"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","?[R","g#ab","k"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test404.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)