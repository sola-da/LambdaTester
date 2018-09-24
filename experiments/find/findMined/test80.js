





var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    t.same(0, err.indexOf('Invalid search parameters'), 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = null;
var argument3 = "";
var argument4 = function (p) {
 callbackArguments.push(arguments) 

    return p.canPlay(source.toString());
};
var argument5 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument6 = [100,403,969,25,157,969,627,714];
var argument7 = null;
var argument8 = function (ext) {
 callbackArguments.push(arguments) 

    return !!v.canPlayType(ext).replace(/no/, '');
};
var argument9 = null;
var base_0 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"Q$x",618,969,893]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)