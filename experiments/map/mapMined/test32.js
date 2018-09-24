





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    expect(cacheStub.size()).to.be.equal(0);
    done();
};
var argument2 = true;
var argument3 = function (sName) {
 callbackArguments.push(arguments) 

    var cName = nc.serverPropertyNameToClient(sName, parent);
    var testName = nc.clientPropertyNameToServer(cName, parent);
    if (sName !== testName) {
        throw new Error('NamingConvention for this server property name does not roundtrip properly:' + sName + '-->' + testName);
    }
    return cName;
};
var argument4 = "A";
var argument5 = function (al) {
 callbackArguments.push(arguments) 

    return [
        al.visit_id,
        al.ip,
        al.name,
        al.time
    ];
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    return d3.min(ys[key]);
};
var base_0 = [0,242,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,242]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)