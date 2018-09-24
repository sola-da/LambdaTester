





var callbackArguments = [];
var argument1 = function (memo, value) {
 callbackArguments.push(arguments) 

    if (_.isArray(value))
        return memo.concat(_.flatten(value));
    memo.push(value);
    return memo;
};
var argument2 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument3 = 5.244340184034955e+307;
var argument4 = {"2":705,"618":"UT","627":"z","":"&","+M":1.5827800558100664e+308,"9.746021791196116e+307":""};
var argument5 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument6 = function (obj, style) {
 callbackArguments.push(arguments) 

    style = style.split(':').map(function (a) {
        return a.trim();
    });
    obj[style[0]] = style[1];
    return obj;
};
var base_0 = [893,100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,100,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)