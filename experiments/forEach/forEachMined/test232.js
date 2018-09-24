





var callbackArguments = [];
var argument1 = function (pageRange) {
 callbackArguments.push(arguments) 

    var range = {
            start: parseInt(pageRange.Start, 10),
            end: parseInt(pageRange.End, 10)
        };
    responseObject.pageRegions.push(range);
};
var argument2 = true;
var argument3 = {"9":"","82":1.4393574767118053e+308,"":"","7.351661906795033e+307":82,"ON'":3.019818469036728e+307,"pXf-BWg":705,"1.4568823172662401e+308":"","s":5e-324,"1.0922692161742197e+308":6.146890116797704e+307,"5e-324":""};
var argument4 = function (code) {
 callbackArguments.push(arguments) 

    binops[code] = new Function('x', 'y', 'return x ' + definitions.tokens[code] + ' y;');
};
var argument5 = r_1;
var argument6 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument7 = function (edge) {
 callbackArguments.push(arguments) 

    if (height[edge.from] === undefined) {
        height[edge.from] = 1 + height[edge.to];
    } else {
        height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
};
var argument8 = r_0;
var base_0 = [714,213,126,655,893,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,213,126,655,893,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,213,126,655,893,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,213,126,655,893,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test232.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)