





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument2 = null;
var argument3 = function (n, j) {
 callbackArguments.push(arguments) 

    _.map(methods.hashs[0], function (m, j) {
        if (m === n)
            i++;
    });
};
var argument4 = "";
var argument5 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument6 = true;
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return {
        html: t,
        options: s,
        action: function (w) {
            u.call(v, w);
        }
    };
};
var argument8 = r_1;
var base_0 = [627,403,59,969,5e-324,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,403,59,969,5e-324,893]
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
require("fs").writeFileSync("./experiments/map/mapMined/test109.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)