





var callbackArguments = [];
var argument1 = function (i, atom) {
 callbackArguments.push(arguments) 

    return atom.nodeType === 1;
};
var argument2 = false;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    var d = new Date(fetchValue(vars, d, vars.time.value).toString());
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
    return d.getTime() === ms;
};
var argument4 = function (needle) {
 callbackArguments.push(arguments) 

    return !some(arrs, function (haystack) {
        return contains(haystack, needle);
    });
};
var argument5 = function (item, i) {
 callbackArguments.push(arguments) 

    return i % 2 == 0;
};
var argument6 = {"9":8.248375605689746e+307,"iQ":"","":2.864832914980868e+307,"1.1996628523310154e+308":1.5347135813630436e+308};
var argument7 = null;
var base_0 = [122,705,82,59,823,122,714,-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,705,82,59,823,122,714,-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,705,82,59,823,122,714,-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)