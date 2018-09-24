





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return element[method].apply(element, args);
};
var argument2 = true;
var argument3 = true;
var argument4 = function (kv) {
 callbackArguments.push(arguments) 

    return kv[0];
};
var argument5 = null;
var argument6 = [893,59,-100,-100];
var argument7 = function () {
 callbackArguments.push(arguments) 

    return this.contentDocument || a.call(this.childNodes);
};
var argument8 = function (val, i) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument9 = 705;
var argument10 = r_3;
var base_0 = [627,-1,627,82,122,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,-1,627,82,122,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,-1,627,82,122,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,-1,627,82,122,-100]
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
require("fs").writeFileSync("./experiments/map/mapMined/test58.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)