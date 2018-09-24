





var callbackArguments = [];
var argument1 = function (line) {
 callbackArguments.push(arguments) 

    if (args.side === 'left' || args.side === 'both') {
        line = line.replace(/^\s+/, '');
    }
    if (args.side === 'right' || args.side === 'both') {
        line = line.replace(/\s+$/, '');
    }
    return line;
};
var argument2 = true;
var argument3 = 122;
var argument4 = function (segmentUrl) {
 callbackArguments.push(arguments) 

    return segmentUrl.clone();
};
var argument5 = true;
var argument6 = null;
var argument7 = function (attribute) {
 callbackArguments.push(arguments) 

    return {
        caption: attribute,
        snippet: attribute + '="$0"',
        meta: 'attribute',
        score: Number.MAX_VALUE
    };
};
var argument8 = r_1;
var argument9 = function (et) {
 callbackArguments.push(arguments) 

    if (et instanceof EntityType) {
        return groupMap[et.name];
    } else {
        throw new Error('The EntityManager.getChanges() \'entityTypes\' parameter must be either an entityType or an array of entityTypes or null');
    }
};
var argument10 = null;
var base_0 = [59,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,618]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,618]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,618]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test326.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)