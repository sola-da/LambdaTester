





var callbackArguments = [];
var argument1 = function (entries, dir) {
 callbackArguments.push(arguments) 

    var isDraft = dir.charAt(0) === '_';
    if (!isDraft && isDirectory(path.join(__dirname, dir)))
        entries[dir] = path.join(__dirname, dir, 'app.js');
    return entries;
};
var argument2 = "";
var argument3 = r_0;
var argument4 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument5 = {"<(":"eCfnDLJiE"};
var argument6 = function (offset, op) {
 callbackArguments.push(arguments) 

    var left, right, _ref;
    if (offset + op.getLength() <= index) {
        leftOps.push(op);
    } else if (offset >= index) {
        rightOps.push(op);
    } else {
        _ref = op.split(index - offset), left = _ref[0], right = _ref[1];
        leftOps.push(left);
        rightOps.push(right);
    }
    return offset + op.getLength();
};
var argument7 = {"82":"","92":1.170040614876174e+308,"783":783,"":893,"1.559078220923285e+308":"",">l":-100,"7.599380035382065e+307":"p{&"};
var argument8 = function (acc, x) {
 callbackArguments.push(arguments) 

    if (acc === null) {
        return [
            x,
            opts,
            []
        ];
    } else {
        return [
            x,
            { status: 'missing' },
            [acc]
        ];
    }
};
var base_0 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O-<]","q","W",">wfz)","+K}","T<B>","7"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)