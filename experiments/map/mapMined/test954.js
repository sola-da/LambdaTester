





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument2 = false;
var argument3 = function (row) {
 callbackArguments.push(arguments) 

    var val = row.value;
    var docId = val && typeof val === 'object' && val._id || row.id;
    return view.sourceDB.get(docId).then(function (joinedDoc) {
        row.doc = joinedDoc;
    }, function () {
    });
};
var argument4 = r_0;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x.id;
};
var argument6 = r_0;
var argument7 = function (line) {
 callbackArguments.push(arguments) 

    return '  ' + line;
};
var argument8 = {"OI":1.2287091817753515e+307,"3[":"","1.1364806759453507e+308":893};
var argument9 = r_1;
var base_0 = [1.7976931348623157e+308,714,618,242,59,82,823,25,969,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,618,242,59,82,823,25,969,823]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,618,242,59,82,823,25,969,823]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,618,242,59,82,823,25,969,823]
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
require("fs").writeFileSync("./experiments/map/mapMined/test954.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)