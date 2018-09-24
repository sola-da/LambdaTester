





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    return that.render(content, that.create_context(row), partials, true);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (chunk) {
 callbackArguments.push(arguments) 

    dust.onLoad(name, function (err, src) {
        if (err)
            return chunk.setError(err);
        if (!dust.cache[name])
            dust.loadSource(dust.compile(src, name));
        dust.cache[name](chunk, context).end();
    });
};
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    return a.trim();
};
var argument6 = false;
var argument7 = function (a) {
 callbackArguments.push(arguments) 

    a = a.cloneNode(deep != undefined ? deep : true);
    a.$events = null;
    return a;
};
var argument8 = false;
var argument9 = false;
var base_0 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)