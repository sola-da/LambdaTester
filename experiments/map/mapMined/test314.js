





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return [
        elem.nextSibling,
        elem.parentNode
    ];
};
var argument2 = false;
var argument3 = null;
var argument4 = function (y) {
 callbackArguments.push(arguments) 

    var i = vars.data.time.dataSteps.indexOf(y);
    return i >= 0 ? vars.data.time.values[i] : years[y];
};
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
var argument6 = r_2;
var argument7 = function (comp) {
 callbackArguments.push(arguments) 

    return pvc_PercentValue.parse(comp);
};
var base_0 = ["UB","E","NW0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test314.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)