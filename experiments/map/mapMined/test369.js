





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.charCodeAt(0);
};
var argument2 = null;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    return this.createPath(run, s, 'M' + c.x + ' ' + c.y + ' ' + theme.symbol).setStroke(shadow).setFill(shadow.color);
};
var argument4 = function (g) {
 callbackArguments.push(arguments) 

    return _this.scope.markerModels[g.key].model;
};
var argument5 = false;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (!v.sentence) {
        v.sentence = v.name + ' is related to ' + result.name;
    }
    return v;
};
var argument7 = ["rLU","D","8","n,]","G;","GL","Z","Z9","oFOg"];
var argument8 = {"25":"gw]","Rr1":607,"8.543016232654456e+307":"","":"2","5.179295067206024e+307":100};
var base_0 = [618,893,0,460,705,618,0,100,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,0,460,705,618,0,100,705]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,0,460,705,618,0,100,705]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,0,460,705,618,0,100,705]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test369.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)