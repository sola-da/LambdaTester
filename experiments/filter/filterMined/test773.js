





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return !$(this).data(configuration('handledName'));
};
var argument5 = function (d) {
 callbackArguments.push(arguments) 

    if (this.nodeName === 'circle') {
        return isWithinCircle(this, pointSelectR(d));
    } else if (this.nodeName === 'path') {
        return isWithinBar(this);
    }
};
var argument6 = ["k",823,618,893,595,"h"];
var argument7 = function (option) {
 callbackArguments.push(arguments) 

    return option.selected;
};
var argument8 = [82,25,"<","a",82,5e-324,82,969];
var base_0 = [460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)