





var callbackArguments = [];
var argument1 = function (gMarker) {
 callbackArguments.push(arguments) 

    return _this.add(gMarker);
};
var argument2 = function (segment, i) {
 callbackArguments.push(arguments) 

    if (i === 0) {
        result.push(segment);
    } else {
        var segmentMatch = segment.match(/(\w+)(.*)/);
        var key = segmentMatch[1];
        result.push(params[key]);
        result.push(segmentMatch[2] || '');
        delete params[key];
    }
};
var argument3 = false;
var argument4 = r_1;
var argument5 = function (alias) {
 callbackArguments.push(arguments) 

    map[alias.toLowerCase()] = s;
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    delete require.cache[key];
};
var argument7 = false;
var base_0 = ["V2","J"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V2","J"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V2","J"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V2","J"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test881.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)