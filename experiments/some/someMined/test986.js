





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'docA';
};
var argument2 = ["u{","aT","(","Yq),","tk(85","a","Z","FU","IU"];
var argument3 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument4 = {"25":893,"893":6.697776949384903e+306,"":1.0476790550934137e+308,"!":7.683315298331397e+307,"$":"3F","9.457710259289972e+307":"","a":4.424058044572858e+307,"8.408281612639506e+307":"","6.689298710449845e+307":403};
var argument5 = null;
var argument6 = function (p) {
 callbackArguments.push(arguments) 

    try {
        var dom = new ActiveXObject(p);
        dom.async = false;
        dom.loadXML(xhr.responseText);
        result = dom;
    } catch (e) {
        return false;
    }
    return true;
};
var argument7 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument8 = false;
var argument9 = null;
var base_0 = [783,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,122]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,122]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,122]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test986.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)