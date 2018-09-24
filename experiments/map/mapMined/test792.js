





var callbackArguments = [];
var argument1 = function (h) {
 callbackArguments.push(arguments) 

    return h.getStatusText && h.getStatusText(editor, data) || '';
};
var argument2 = function (groupSpec) {
 callbackArguments.push(arguments) 

    if (groupSpec instanceof pvc.data.GroupingSpec) {
        if (groupSpec.message !== linkParent.message)
            throw def.error.argumentInvalid('groupingSpecText', 'Invalid associated complex type.');
    } else
        groupSpec = pvc.data.GroupingSpec.parse(groupSpec, linkParent.message);
    ids.push(groupSpec.id);
    return groupSpec;
};
var argument3 = "";
var argument4 = false;
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    return s ? s.replace('.', '').toLowerCase() : s;
};
var argument6 = "";
var argument7 = null;
var argument8 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var base_0 = ["5",")","u",")","x","JnBlw"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",")","u",")","x","JnBlw"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test792.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)