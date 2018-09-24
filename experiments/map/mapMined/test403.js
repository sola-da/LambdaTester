





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return BUI.Date.format(new Date(item), 'yyyy-mm-dd HH:MM:ss');
};
var argument3 = null;
var argument4 = function (user) {
 callbackArguments.push(arguments) 

    return user.channelNick(channel);
};
var argument5 = false;
var argument6 = [714,705,-1,1.7976931348623157e+308,49,59];
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    if (p instanceof Function) {
        return;
    }
    return p;
};
var argument8 = r_3;
var argument9 = r_3;
var base_0 = ["]y_Ns4`&","O"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]y_Ns4`&","O"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]y_Ns4`&","O"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]y_Ns4`&","O"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test403.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)