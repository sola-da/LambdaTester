





var callbackArguments = [];
var argument1 = function (arg) {
 callbackArguments.push(arguments) 

    return arg + '.js';
};
var argument2 = null;
var argument3 = true;
var argument4 = function (f) {
 callbackArguments.push(arguments) 

    return f[1];
};
var argument5 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: '\'' + val + '\'',
        token: 'text',
        next: function (stack) {
            stack.pop();
        }
    };
};
var argument6 = true;
var argument7 = "e";
var argument8 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument9 = "-a";
var argument10 = null;
var base_0 = [";","X>","8","qK","`5&"]
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
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","X>","8","qK","`5&"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test925.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)