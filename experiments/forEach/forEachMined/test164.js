





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    if (result.length === 0)
        return result.push(element);
    else {
        if (element[column].valueOf() < result[0][column].valueOf()) {
            result.length = 0;
            return result.push(element);
        }
        if (element[column].valueOf() === result[0][column].valueOf()) {
            return result.push(element);
        }
    }
};
var argument2 = true;
var argument3 = 8.537629183817913e+307;
var argument4 = function (d, i) {
 callbackArguments.push(arguments) 

    d.d3plus_order = i;
};
var argument5 = r_1;
var argument6 = function (identifierRegex) {
 callbackArguments.push(arguments) 

    if (!prefix && identifierRegex)
        prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
};
var argument7 = false;
var argument8 = function (key) {
 callbackArguments.push(arguments) 

    if (key in resultsMap) {
        results.push(resultsMap[key]);
    } else {
        results.push({
            'key': key,
            'error': 'not_found'
        });
    }
};
var base_0 = [714,100,823,969,403,242,122,714,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,100,823,969,403,242,122,714,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,100,823,969,403,242,122,714,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,100,823,969,403,242,122,714,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)