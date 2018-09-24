





var callbackArguments = [];
var argument1 = function (param, i) {
 callbackArguments.push(arguments) 

    if (i === params.length - 1)
        return param || null;
    return param ? decodeURIComponent(param) : null;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item.reduce(function (model, val, i) {
        model[headers[i]] = val;
        return model;
    }, {});
};
var argument5 = 1.2267221418993612e+308;
var argument6 = function (str, i) {
 callbackArguments.push(arguments) 

    return pad(++i, width) + ' |' + ' ' + str;
};
var argument7 = true;
var argument8 = 100;
var argument9 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var base_0 = ["R",843,969,"R","F",-1,"i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R",843,969,"R","F",-1,"i"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R",843,969,"R","F",-1,"i"]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R",843,969,"R","F",-1,"i"]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)