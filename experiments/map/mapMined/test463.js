





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return a.toCSS(this.env);
};
var argument2 = null;
var argument3 = function (pp) {
 callbackArguments.push(arguments) 

    return entityType.clientPropertyPathToServer(pp, '/');
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function (pt) {
 callbackArguments.push(arguments) 

    return [
        pt.latitude,
        pt.longitude
    ];
};
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    return Helpers.serializeObject(item);
};
var argument8 = r_1;
var base_0 = [242,-100,403,157,0,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,403,157,0,705]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,403,157,0,705]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,403,157,0,705]
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
require("fs").writeFileSync("./experiments/map/mapMined/test463.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)