





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return +x;
};
var argument2 = 705;
var argument3 = null;
var argument4 = function (ban) {
 callbackArguments.push(arguments) 

    ban.TimeOfBanString = new Date(ban.TimeOfBan * 1000).toString();
    return ban;
};
var argument5 = r_0;
var argument6 = function (doc, i) {
 callbackArguments.push(arguments) 

    if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
    }
    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument7 = "";
var argument8 = function (val) {
 callbackArguments.push(arguments) 

    return {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var base_0 = [25,893,126,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,126,5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/map/mapMined/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)