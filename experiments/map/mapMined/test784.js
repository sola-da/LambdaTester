





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    var viewOpts = {
            startkey: toIndexableString([key]),
            endkey: toIndexableString([
                key,
                {}
            ])
        };
    return fetchFromView(viewOpts);
};
var argument2 = r_0;
var argument3 = function (chunk) {
 callbackArguments.push(arguments) 

    return chunk.toString(encoding);
};
var argument4 = null;
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = "";
var argument7 = function (deg) {
 callbackArguments.push(arguments) 

    return Ext.draw.Draw.rad(deg);
};
var base_0 = [705,59,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,59,618]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,59,618]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,59,618]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test784.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)