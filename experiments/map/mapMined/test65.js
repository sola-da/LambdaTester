





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
};
var argument2 = false;
var argument3 = false;
var argument4 = function (parent) {
 callbackArguments.push(arguments) 

    return (parent.children || []).map(function (child) {
        return {
            source: parent,
            target: child
        };
    });
};
var argument5 = {"627":"","969":1.2497306840197869e+308,"ArKA=":82,"1.4571851921988673e+308":25,"1.0432927967811147e+308":6.393164411584145e+307,"5.592556221293803e+307":""};
var argument6 = function (path) {
 callbackArguments.push(arguments) 

    var stemmed = path.ids.slice(-depth);
    return {
        pos: path.pos + (path.ids.length - stemmed.length),
        ids: pathToTree(stemmed)
    };
};
var argument7 = false;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return $.inArray(this, nodes);
};
var base_0 = [-1,705,59,100,122,59,705,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,705,59,100,122,59,705,607]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,705,59,100,122,59,705,607]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,705,59,100,122,59,705,607]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)