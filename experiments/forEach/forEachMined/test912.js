





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    c.lastAccessed = now;
};
var argument2 = function (item, key) {
 callbackArguments.push(arguments) 

    content.push(cb.call(this.domjs, item, key, list));
};
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    if (t.values.length > max) {
        maxTarget = t;
        max = t.values.length;
    }
};
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    d.x = (d.x - column_width / 2) * downscale + column_width / 2;
    d.d3plus.x = d.x + d.xoffset;
    d.y = (d.y - column_height / 2) * downscale + column_height / 2;
    d.d3plus.y = d.y + d.yoffset;
    d.r = d.r * downscale;
    d.d3plus.r = d.r;
};
var argument5 = r_2;
var base_0 = [122,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test912.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)