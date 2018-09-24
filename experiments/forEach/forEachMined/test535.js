





var callbackArguments = [];
var argument1 = function (path) {
 callbackArguments.push(arguments) 

    if (!fs.existsSync(path)) {
        if (!options.quiet)
            cli.fail('No such include directory: ' + path);
        return pbjs.STATUS_ERR_INCLUDE_DIR;
    }
};
var argument2 = false;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    var rgb = c.rgb();
    r += rgb.r;
    g += rgb.g;
    b += rgb.b;
    a += rgb.a;
};
var argument4 = true;
var argument5 = r_0;
var argument6 = function (array) {
 callbackArguments.push(arguments) 

    model.compareThings(array, stuff).should.equal(-1);
    model.compareThings(stuff, array).should.equal(1);
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function (fn) {
 callbackArguments.push(arguments) 

    data = fn(data, headers);
};
var argument10 = true;
var argument11 = null;
var base_0 = ["tAxt"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tAxt"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tAxt"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tAxt"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)