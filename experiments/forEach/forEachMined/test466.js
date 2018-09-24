





var callbackArguments = [];
var argument1 = function (suite) {
 callbackArguments.push(arguments) 

    suite.eachTest(fn);
};
var argument2 = ["9?",714,655,893,59,1.7976931348623157e+308,"R<","W",627];
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    if (typeof t === 'string') {
        if (t[0] === '\n') {
            column = t.length - 1;
            row++;
        } else
            column += t.length;
        text += t;
    } else {
        if (!t.start)
            t.start = {
                row: row,
                column: column
            };
        else
            t.end = {
                row: row,
                column: column
            };
    }
};
var argument4 = "nYS=";
var argument5 = false;
var argument6 = function (data) {
 callbackArguments.push(arguments) 

    it('should checksum ' + JSON.stringify(data) + ' correctly', function () {
        assert.equal(jsHashes.CRC32(data), testVectors[data]);
    });
};
var argument7 = function (line) {
 callbackArguments.push(arguments) 

    var parts = line.split(':');
    if (parts[1]) {
        obj[parts[0]] = parts[1];
    }
};
var argument8 = [627];
var base_0 = ["H",",>C6","l","U)","1"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H",",>C6","l","U)","1"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H",",>C6","l","U)","1"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H",",>C6","l","U)","1"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test466.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)