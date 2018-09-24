





var callbackArguments = [];
var argument1 = function (tick) {
 callbackArguments.push(arguments) 

    return this.scale.tickFormat(tick);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (localizedDigit) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedDigit);
};
var argument5 = null;
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    r.objectId = r._id;
    _.omit(r, '_id');
    return r;
};
var argument7 = function (loc) {
 callbackArguments.push(arguments) 

    var coord = loc.coord || (loc.coord = map.locationCoordinate(loc)), point = map.coordinatePoint(coord);
    if ('radius' in loc)
        point.radius = loc.radius;
    return point;
};
var argument8 = r_2;
var argument9 = true;
var base_0 = ["H","Y","6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","Y","6"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","Y","6"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","Y","6"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test818.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)