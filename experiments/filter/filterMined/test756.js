





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = [655,655,843,843,783,595,460,213];
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return $.css(this, 'visibility') === 'hidden';
};
var argument5 = ":";
var argument6 = function () {
 callbackArguments.push(arguments) 

    return $(t) ? n.contains(this, t) : n(this).find(t).size();
};
var argument7 = false;
var argument8 = function (attachment) {
 callbackArguments.push(arguments) 

    return !_.isUndefined(attachment.id);
};
var argument9 = 100;
var argument10 = "";
var base_0 = [595,595,607,-1,100,1.7976931348623157e+308,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,595,607,-1,100,1.7976931348623157e+308,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,595,607,-1,100,1.7976931348623157e+308,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,595,607,-1,100,1.7976931348623157e+308,213]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)