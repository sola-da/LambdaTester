





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
    };
};
var argument2 = null;
var argument3 = function (timePoint) {
 callbackArguments.push(arguments) 

    return timePoint.clone();
};
var argument4 = r_1;
var argument5 = null;
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument7 = false;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    return typeof e == 'string' ? e : e.join('');
};
var argument9 = null;
var base_0 = [242,25,655,627,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,25,655,627,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,25,655,627,595]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test370.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)