





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return Helpers.serializeObject(item);
};
var argument2 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument3 = true;
var argument4 = "";
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return 'a' + i;
};
var argument6 = null;
var argument7 = function (source) {
 callbackArguments.push(arguments) 

    return _this.createContainer(source);
};
var base_0 = [5e-324,82,893,618,460,126,-100,157,213]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,82,893,618,460,126,-100,157,213]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,82,893,618,460,126,-100,157,213]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test873.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)