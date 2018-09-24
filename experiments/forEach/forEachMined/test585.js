





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    cli.log('                             ' + util.pad(key, 10) + '   ' + pbjs.sources[key].description);
};
var argument2 = false;
var argument3 = function (y) {
 callbackArguments.push(arguments) 

    if (vars.data.nested[y]) {
        returnData = returnData.concat(vars.data.nested[y][vars.id.value]);
    } else
        missing.push(y);
};
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument5 = r_1;
var argument6 = function () {
 callbackArguments.push(arguments) 

    stream.end();
    that.callback();
};
var argument7 = false;
var argument8 = null;
var base_0 = [460,714,126,82,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,714,126,82,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,714,126,82,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,714,126,82,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)