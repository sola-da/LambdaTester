





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    pending++;
    put(store, path.concat([key]), value[key], cb);
};
var argument2 = r_0;
var argument3 = function (cp) {
 callbackArguments.push(arguments) 

    updateConcurrencyProperty(c, cp);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
};
var argument5 = null;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    v = id(v);
    v.d3plus.shapeType = 'circle';
};
var base_0 = [843,100,157,100,705,-1,59,893,460,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,100,157,100,705,-1,59,893,460,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,100,157,100,705,-1,59,893,460,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,100,157,100,705,-1,59,893,460,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test522.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)