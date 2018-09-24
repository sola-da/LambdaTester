





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument2 = null;
var argument3 = 157;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var h = {
            label: key,
            units: data[key]
        };
    return h;
};
var argument5 = r_1;
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    return a.hash;
};
var argument7 = function (path) {
 callbackArguments.push(arguments) 

    var stemmed = path.ids.slice(-depth);
    return {
        pos: path.pos + (path.ids.length - stemmed.length),
        ids: pathToTree(stemmed)
    };
};
var base_0 = [-1,893,969,843,-100,100,893,783,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,893,969,843,-100,100,893,783,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,893,969,843,-100,100,893,783,607]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,893,969,843,-100,100,893,783,607]
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
require("fs").writeFileSync("./experiments/map/mapMined/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)