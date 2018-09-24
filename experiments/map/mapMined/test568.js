





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = {"0":1.7587274721365938e+308,"100":3.533081230473843e+306,"403":1.843660274736881e+307,"460":"","3lU":5.09837045847676e+307,"":"","%h":"","5.344331241360991e+307":"d%V,"};
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.shift();
};
var argument5 = function (number) {
 callbackArguments.push(arguments) 

    return number / largest;
};
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return el[0];
};
var base_0 = ["1","b+","Z:_","h",969,0,"4l"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1","b+","Z:_","h",969,0,"4l"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1","b+","Z:_","h",969,0,"4l"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1","b+","Z:_","h",969,0,"4l"]
var r_3= undefined
try {
r_3 = base_3.map(argument6)
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
require("fs").writeFileSync("./experiments/map/mapMined/test568.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)