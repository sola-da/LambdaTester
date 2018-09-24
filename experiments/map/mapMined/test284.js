





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument2 = [627,823,714,100];
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    return self.normalize(e);
};
var argument4 = function (cName) {
 callbackArguments.push(arguments) 

    var sName = nc.clientPropertyNameToServer(cName, parent);
    var testName = nc.serverPropertyNameToClient(sName, parent);
    if (cName !== testName) {
        throw new Error('NamingConvention for this client property name does not roundtrip properly:' + cName + '-->' + testName);
    }
    return sName;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var base_0 = [823,"5HN",242,242,607,1.7976931348623157e+308,82,"yoP"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"5HN",242,242,607,1.7976931348623157e+308,82,"yoP"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"5HN",242,242,607,1.7976931348623157e+308,82,"yoP"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"5HN",242,242,607,1.7976931348623157e+308,82,"yoP"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test284.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)