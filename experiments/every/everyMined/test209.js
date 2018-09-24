





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = {"9":"","82":"","1.2046085457251676e+308":25,"*":"","":607,"1.6976496892495883e+308":460};
var argument3 = "}W1";
var argument4 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    var dd = dimDescr[t], val = dd.orgValue && !dd.categorical ? dd.orgValue[d[t]] : d[t];
    return val >= filter[t].min && val <= filter[t].max;
};
var argument6 = true;
var argument7 = {"627":"Dlbb","4.797078780672375e+307":8.925090471369404e+307,"1.6753396615867485e+308":607};
var argument8 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument9 = {"595":460,"1.515232526865775e+308":1.1568746137956219e+308,"":"D,","1.7976931348623157e+308":"8(","-1":1.448283032768923e+307,"1.671259945975452e+307":1.0209502036371767e+308,"&)":157,"1.119015953434026e+308":"","5.380163642292243e+307":"s","1.3049539094462105e+308":82};
var base_0 = [714,655,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,655,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,655,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,655,1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test209.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)