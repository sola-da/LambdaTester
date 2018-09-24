





var callbackArguments = [];
var argument1 = function (i, elm) {
 callbackArguments.push(arguments) 

    var template = $(elm).html().trim();
    var output = $.mustache(template, view, partials);
    return $(output).get();
};
var argument2 = {"3":"$u","25":"-","705":"J","1.0701348070306915e+308":"",":S":"%;","18{":655,"":""};
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    s.property = key;
    return s;
};
var argument4 = 1.5286608293205034e+308;
var argument5 = null;
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    return makeSeries(prop);
};
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    if (typeof e === 'string') {
        return ' ' + e.trim();
    } else {
        return e.toCSS();
    }
};
var argument8 = false;
var base_0 = [783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)