





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    pos--;
    return {
        rev: pos + '-' + rev.id,
        status: rev.opts.status
    };
};
var argument2 = null;
var argument3 = true;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    if (value.length == 1)
        value += value;
    return value.toInt(16);
};
var argument5 = function (cName) {
 callbackArguments.push(arguments) 

    var sName = nc.clientPropertyNameToServer(cName, parent);
    var testName = nc.serverPropertyNameToClient(sName, parent);
    if (cName !== testName) {
        throw new Error('NamingConvention for this client property name does not roundtrip properly:' + cName + '-->' + testName);
    }
    return sName;
};
var argument6 = 5.341772167752372e+307;
var argument7 = r_1;
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    var p = r.cursor;
    var line = session.getLine(p.row);
    var spaceOffset = line.substr(p.column).search(/\S/g);
    if (spaceOffset == -1)
        spaceOffset = 0;
    if (p.column > maxCol)
        maxCol = p.column;
    if (spaceOffset < minSpace)
        minSpace = spaceOffset;
    return spaceOffset;
};
var base_0 = ["v","h:","O","5jSJ}","i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","h:","O","5jSJ}","i"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","h:","O","5jSJ}","i"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","h:","O","5jSJ}","i"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test959.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)