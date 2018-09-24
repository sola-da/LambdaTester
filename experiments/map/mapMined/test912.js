





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    if (r.rank === 10) {
        r.rank = 5;
    } else if (r.rank > 3 && r.rank < 10) {
        r.rank = 4;
    }
    return [
        r.name,
        r.rank
    ];
};
var argument2 = true;
var argument3 = function (serData1) {
 callbackArguments.push(arguments) 

    var group = catData;
    group && serData1 && (group = group.child(serData1.key));
    var value = group ? group.dimensions(valDim.name).value(visibleKeyArgs) : null;
    return {
        data: serData1,
        group: group,
        value: value,
        isNull: null == value,
        catInfo: catInfo
    };
};
var argument4 = ["I",";p6"];
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    return [
        s.nth(0),
        project('contents')(s.nth(0)).default({
            id: s.nth(0),
            data: {},
            status_id: 'none'
        }).merge(function (content) {
            return {
                authorizations: projectModel.processPermissions(s.nth(1)('component')('permissions'), project, project('role')),
                project_id: project('id')
            };
        })
    ];
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    return {
        bucket: name,
        key: encode(key)
    };
};
var argument7 = 893;
var argument8 = 893;
var base_0 = [714,122,126,655,627,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,126,655,627,823]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,126,655,627,823]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test912.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)