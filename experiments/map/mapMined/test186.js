





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    if (Array.isArray(v)) {
        defs.apply(that, v);
    } else {
        defs(v);
    }
};
var argument2 = null;
var argument3 = null;
var argument4 = function (doc, i) {
 callbackArguments.push(arguments) 

    if (doc._id && utils.isLocalId(doc._id)) {
        return doc;
    }
    var newDoc = utils.parseDoc(doc, newEdits);
    newDoc._bulk_seq = i;
    return newDoc;
};
var argument5 = function (v) {
 callbackArguments.push(arguments) 

    return {
        object: topic,
        property: { id: v.property },
        subject: v,
        direction: 'incoming'
    };
};
var argument6 = null;
var argument7 = [627,157,0,82,460,49,126,1.7976931348623157e+308,969];
var argument8 = function (v, i) {
 callbackArguments.push(arguments) 

    return (1 - a) * blend[i] + a * v;
};
var argument9 = r_3;
var base_0 = [655,-1,122,655,126,126,969,5e-324,627,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-1,122,655,126,126,969,5e-324,627,460]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-1,122,655,126,126,969,5e-324,627,460]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-1,122,655,126,126,969,5e-324,627,460]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test186.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)