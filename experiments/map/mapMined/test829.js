





var callbackArguments = [];
var argument1 = function (value, index, list) {
 callbackArguments.push(arguments) 

    return {
        value: value,
        index: index,
        criteria: iterator.call(context, value, index, list)
    };
};
var argument2 = true;
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    s.property = key;
    return s;
};
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    a = a.cloneNode(deep != undefined ? deep : true);
    a.$events = null;
    return a;
};
var argument5 = {"7.112896713610577e+307":3.9217969160542723e+307,"":"","5.123960626520218e+307":4.3021951276374907e+307,"1.4218958654579952e+308":2.2008952105640074e+307};
var argument6 = "u2";
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.map(function (d) {
        var data = d.__data__;
        return data.data ? data.data : data;
    });
};
var argument8 = r_2;
var base_0 = [783,783,100,"Y","b!b","`","t","N"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,100,"Y","b!b","`","t","N"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,100,"Y","b!b","`","t","N"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,783,100,"Y","b!b","`","t","N"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)