





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return self.normalize(e);
};
var argument2 = [783,122];
var argument3 = 403;
var argument4 = function (atom) {
 callbackArguments.push(arguments) 

    var datum = def.getOwn(datumsBySeriesKey, atom.key);
    return datum ? datum.atoms.value.value : null;
};
var argument5 = function (err, res) {
 callbackArguments.push(arguments) 

    this.impress = res.join('');
    response.send(this.impress);
};
var argument6 = r_1;
var argument7 = function (arg) {
 callbackArguments.push(arguments) 

    argType = type(arg);
    return argType == 'object' || argType == 'array' || arg == null ? arg : zepto.fragment(arg);
};
var argument8 = null;
var argument9 = ["l","B`","t","#","%L|","{tg","P"];
var base_0 = ["zN",627,"PE","y"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["zN",627,"PE","y"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["zN",627,"PE","y"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["zN",627,"PE","y"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test637.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)