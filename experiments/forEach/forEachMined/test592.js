





var callbackArguments = [];
var argument1 = function (klass) {
 callbackArguments.push(arguments) 

    clone.removeClass(klass);
};
var argument2 = {"403":"","969":9.007564522368696e+307,"":"","B":4.850459238327186e+307,"8.809993139242034e+307":"H5(Ob","-1":"$","6.209875132005905e+307":3.883690897742399e+306,"1.6213149743565212e+308":"f-d"};
var argument3 = 1.0574487825221634e+308;
var argument4 = function (data) {
 callbackArguments.push(arguments) 

    it('should checksum ' + JSON.stringify(data) + ' correctly', function () {
        assert.equal(jsHashes.CRC32(data), testVectors[data]);
    });
};
var argument5 = null;
var argument6 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexTypeProj.setCalc(calcSpec);
};
var argument7 = [714,403,595,1.7976931348623157e+308,126];
var argument8 = function (pair) {
 callbackArguments.push(arguments) 

    var eq_idx = pair.indexOf('=');
    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();
    if ('"' == val[0]) {
        val = val.slice(1, -1);
    }
    if (undefined == obj[key]) {
        obj[key] = decode(val);
    }
};
var argument9 = null;
var argument10 = {"893":"srDq","":"s","_":1.6611974098246044e+308,"QQ":1.0357498406338188e+308,"`5T":""};
var base_0 = ["AgbyPm","`","q","("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AgbyPm","`","q","("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["AgbyPm","`","q","("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["AgbyPm","`","q","("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)