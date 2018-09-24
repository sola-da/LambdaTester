





var callbackArguments = [];
var argument1 = function (np) {
 callbackArguments.push(arguments) 

    return np.parentType.name + ':' + np.name;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    return item;
};
var argument6 = null;
var argument7 = null;
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument9 = r_0;
var argument10 = r_0;
var base_0 = [242,"f?X",705,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"f?X",705,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"f?X",705,705]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test525.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)