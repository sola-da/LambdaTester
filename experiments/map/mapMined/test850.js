





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return $$.query(domain, children);
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    var labels = options.labels;
    var units = options.units;
    return {
        units: r[units],
        labels: r[labels],
        hexcolor: r.hexcolor
    };
};
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return value === target ? null : value;
};
var argument4 = 403;
var argument5 = "";
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument7 = null;
var base_0 = [705,-1,0,460,618,627,0,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-1,0,460,618,627,0,823]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-1,0,460,618,627,0,823]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-1,0,460,618,627,0,823]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test850.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)