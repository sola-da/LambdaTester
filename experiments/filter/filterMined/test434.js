





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0, l = self.length; i < l; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = true;
var argument3 = null;
var argument4 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] === data[i][vars.id.value];
};
var argument5 = null;
var argument6 = "-";
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return !_.contains(rest, value);
};
var argument8 = function () {
 callbackArguments.push(arguments) 

    var t = this;
    return r.some.call(i, function (e) {
        return n.contains(e, t);
    });
};
var base_0 = [714,607,0,705,783,100,823]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,607,0,705,783,100,823]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,607,0,705,783,100,823]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,607,0,705,783,100,823]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)