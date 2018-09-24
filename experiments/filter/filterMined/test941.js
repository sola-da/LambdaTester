





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d3.select(this).node().classList[1] !== liClass;
};
var argument2 = [783,-100];
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = {"9":"","2.054280853230646e+307":705,"1.092055920184184e+308":"9","D*":"_,","-1":"","1.5006173041072314e+308":1.17688893626583e+308,"3.89396742965358e+307":""};
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    return !!item;
};
var argument7 = 618;
var argument8 = r_0;
var argument9 = function (handler) {
 callbackArguments.push(arguments) 

    return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
};
var argument10 = r_0;
var base_0 = [25,242,655,823,82,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,242,655,823,82,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test941.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)