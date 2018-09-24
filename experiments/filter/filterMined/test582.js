





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument2 = ["twf","7hd","In","p","geUE","F","M","Sg"];
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return item['level'] === groupLevel;
};
var argument4 = null;
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument7 = 3.6985111301903724e+307;
var argument8 = function (event) {
 callbackArguments.push(arguments) 

    return event.pid === processId && event.name === event_name && typeof event.args !== 'undefined' && typeof event.args.data !== 'undefined';
};
var base_0 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test582.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)