





var callbackArguments = [];
var argument1 = function (number) {
 callbackArguments.push(arguments) 

    return number / largest;
};
var argument2 = "a";
var argument3 = function (categIndex) {
 callbackArguments.push(arguments) 

    return this._getValuesForCategoryIndex(categIndex);
};
var argument4 = 242;
var argument5 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var argument6 = r_0;
var argument7 = true;
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    return get(item, 'id');
};
var argument9 = r_0;
var argument10 = "";
var base_0 = ["8","|"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","|"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","|"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8","|"]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test523.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)