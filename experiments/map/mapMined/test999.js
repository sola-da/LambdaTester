





var callbackArguments = [];
var argument1 = function (codec) {
 callbackArguments.push(arguments) 

    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
};
var argument2 = null;
var argument3 = "";
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument5 = null;
var argument6 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument7 = {"2.573036140928571e+307":"n3","1.7976931348623157e+308":"O","'":"","P":7.567077773952565e+307,"@":1.3486321037208851e+308,"Y5":49,":":1.4976766634185945e+308,"":4.431321534465426e+307,"6.427935025681595e+307":0};
var argument8 = [-100,843,")",-1,"("];
var argument9 = function (model) {
 callbackArguments.push(arguments) 

    return model.toJSON(options);
};
var argument10 = false;
var base_0 = ["a","[","K","e"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test999.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)