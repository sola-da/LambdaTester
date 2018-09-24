





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e === prevKey ? null : e;
};
var argument2 = function (row) {
 callbackArguments.push(arguments) 

    var val = row.value;
    var docId = val && typeof val === 'object' && val._id || row.id;
    return view.sourceDB.get(docId).then(function (joinedDoc) {
        row.doc = joinedDoc;
    }, function () {
    });
};
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    return prop.nameOnServer;
};
var argument4 = function (localizedDigit) {
 callbackArguments.push(arguments) 

    return regexpEscape(localizedDigit);
};
var argument5 = {"607":"","":8.475339892715443e+306,"1.5005119753696925e+308":"7s","Ew":4.560028187589058e+307};
var base_0 = [1.7976931348623157e+308,82,100,1.7976931348623157e+308,618,59,126,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,82,100,1.7976931348623157e+308,618,59,126,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,82,100,1.7976931348623157e+308,618,59,126,607]
var r_2= undefined
try {
r_2 = base_2.map(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument4,argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)