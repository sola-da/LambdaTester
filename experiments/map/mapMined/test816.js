





var callbackArguments = [];
var argument1 = function (value, i) {
 callbackArguments.push(arguments) 

    return Math.round(Fx.compute(from[i], to[i], delta));
};
var argument2 = function (val, i) {
 callbackArguments.push(arguments) 

    return '<option value="' + val + '">' + labels[i] + '</option>';
};
var argument3 = function (touch) {
 callbackArguments.push(arguments) 

    var point = d3_mousePoint(container, touch);
    point.identifier = touch.identifier;
    return point;
};
var argument4 = r_0;
var argument5 = false;
var argument6 = function (d, i) {
 callbackArguments.push(arguments) 

    return values.call(stack, d, i);
};
var base_0 = [705,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,595]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,595]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test816.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)