





var callbackArguments = [];
var argument1 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument2 = null;
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    return get(item, 'id');
};
var argument4 = true;
var argument5 = [-1,0,705,714,627,126];
var argument6 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return quote(d.metadata.id);
};
var argument8 = null;
var base_0 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)