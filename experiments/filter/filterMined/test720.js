





var callbackArguments = [];
var argument1 = function (ok) {
 callbackArguments.push(arguments) 

    if (~ok.indexOf('*'))
        return 0 == key.indexOf(ok.split('*')[0]);
    return key == ok;
};
var argument2 = true;
var argument3 = function (x, j) {
 callbackArguments.push(arguments) 

    return j !== i;
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return $(this).css('z-index') != 'auto';
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return edge[vars.edges.target][vars.id.value] === d[vars.id.value];
};
var argument7 = r_3;
var base_0 = [460,1.7976931348623157e+308,714,"A",126,"E","j:","I","kx"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,1.7976931348623157e+308,714,"A",126,"E","j:","I","kx"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,1.7976931348623157e+308,714,"A",126,"E","j:","I","kx"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,1.7976931348623157e+308,714,"A",126,"E","j:","I","kx"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test720.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)