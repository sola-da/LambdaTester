





var callbackArguments = [];
var argument1 = function (result) {
 callbackArguments.push(arguments) 

    if (result._bulk_seq) {
        delete result._bulk_seq;
    } else if (!Object.keys(result).length) {
        return { ok: true };
    }
    if (result.error) {
        return result;
    }
    var metadata = result.metadata;
    var rev = merge.winningRev(metadata);
    return {
        ok: true,
        id: metadata.id,
        rev: rev
    };
};
var argument2 = [1.7976931348623157e+308,618,"f",242,"+"," }>",5e-324];
var argument3 = r_0;
var argument4 = function (chunk) {
 callbackArguments.push(arguments) 

    var stub = new Stub(function (err, out) {
            if (err) {
                chunk.setError(err);
            } else {
                callback(out, chunk);
            }
        });
    body(stub.head, context).end();
};
var argument5 = function (securityGroup) {
 callbackArguments.push(arguments) 

    return securityGroup.GroupId;
};
var argument6 = [-100,59,783,714,618,783,893,213,25];
var argument7 = function (entry) {
 callbackArguments.push(arguments) 

    return entry.path;
};
var argument8 = null;
var base_0 = [5e-324,607,893,82,213,627,783,705]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,607,893,82,213,627,783,705]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test449.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)