





var callbackArguments = [];
var argument1 = function (v, i) {
 callbackArguments.push(arguments) 

    return (1 - a) * blend[i] + a * v;
};
var argument2 = [893,893,59,126,627,823,893,655,618];
var argument3 = null;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return parseExpr(a, tokens, newContext);
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (tick) {
 callbackArguments.push(arguments) 

    tick = +tick.toFixed(2);
    var text = this.scale.tickFormat(tick);
    return pv.Text.measureWidth(text, this.font);
};
var argument8 = r_1;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return '?';
};
var argument10 = r_1;
var argument11 = r_1;
var base_0 = [783,783,157,460,705,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,157,460,705,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,157,460,705,-1]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,783,157,460,705,-1]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test577.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)