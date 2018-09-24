





var callbackArguments = [];
var argument1 = function (target, key) {
 callbackArguments.push(arguments) 

    if (_.isFunction(target)) {
        return target;
    } else {
        return d3.interpolate(cmp.state[key], target);
    }
};
var argument2 = "";
var argument3 = function (x) {
 callbackArguments.push(arguments) 

    return x[prop];
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    return parseInt(c + c, 16);
};
var argument7 = null;
var argument8 = null;
var argument9 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    return item;
};
var argument10 = null;
var argument11 = ["Pb","m",618,595,":;ti!"];
var base_0 = ["P3",5e-324,"d","Kke<",618,"*","(j",49]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P3",5e-324,"d","Kke<",618,"*","(j",49]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P3",5e-324,"d","Kke<",618,"*","(j",49]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P3",5e-324,"d","Kke<",618,"*","(j",49]
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
require("fs").writeFileSync("./experiments/map/mapMined/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)