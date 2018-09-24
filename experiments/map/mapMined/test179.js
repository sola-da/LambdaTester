





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    return that.render(content, that.create_context(row), partials, true);
};
var argument2 = false;
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument4 = null;
var argument5 = "";
var argument6 = function (v, i) {
 callbackArguments.push(arguments) 

    return {
        x: ht(i + rsegment.index + 1) + offsets.l,
        y: dim.height - offsets.b - vt(v),
        data: v
    };
};
var argument7 = function (i) {
 callbackArguments.push(arguments) 

    return 'c' + i;
};
var argument8 = null;
var base_0 = ["_6","!C4","*","j-#E","]","q"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_6","!C4","*","j-#E","]","q"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test179.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)