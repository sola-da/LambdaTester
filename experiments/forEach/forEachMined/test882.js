





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i < vars.depth.value) {
        grouped_data.key(function (d) {
            return fetchValue(vars, d.d3plus, n);
        });
    }
};
var argument2 = null;
var argument3 = true;
var argument4 = function (prop, i) {
 callbackArguments.push(arguments) 

    if (i)
        out.space();
    out.print(prop);
};
var argument5 = null;
var argument6 = function (value, key) {
 callbackArguments.push(arguments) 

    dst[key] = value;
};
var argument7 = "";
var argument8 = null;
var argument9 = function (colGroup, cg) {
 callbackArguments.push(arguments) 

    this._colGroups[cg] = [colGroup];
    this._colGroupsIndexes[cg] = [R + cg];
};
var argument10 = r_0;
var base_0 = [0,82,823,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,82,823,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,82,823,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,82,823,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test882.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)