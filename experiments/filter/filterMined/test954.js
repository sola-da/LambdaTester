





var callbackArguments = [];
var argument1 = function (ln) {
 callbackArguments.push(arguments) 

    return ln.indexOf('[') === 0 && ln.indexOf(']') > 0;
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    var d = new Date(fetchValue(vars, d, vars.time.value).toString());
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d.getTime() === ms;
};
var argument3 = ["6DOy"];
var argument4 = "";
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return ids.indexOf(id) >= 0;
};
var argument6 = r_2;
var argument7 = 157;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return 1;
};
var argument9 = null;
var argument10 = null;
var base_0 = [242,25,783,1.7976931348623157e+308,607,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,25,783,1.7976931348623157e+308,607,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,25,783,1.7976931348623157e+308,607,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,25,783,1.7976931348623157e+308,607,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test954.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)