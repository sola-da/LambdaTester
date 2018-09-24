





var callbackArguments = [];
var argument1 = function (dependant) {
 callbackArguments.push(arguments) 

    var release = dependant.pkgMeta._release;
    return dependant.endpoint.name + (release ? '#' + release : '');
};
var argument2 = false;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return addName(d);
};
var argument4 = 823;
var argument5 = [823,242,595,460,82,627,618,705,59,100];
var argument6 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'ZeroLine';
};
var argument7 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument8 = r_3;
var argument9 = true;
var base_0 = [122,126,59,843,"Q",460,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,126,59,843,"Q",460,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,126,59,843,"Q",460,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test576.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)