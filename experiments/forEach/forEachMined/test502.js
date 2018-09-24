





var callbackArguments = [];
var argument1 = function (td) {
 callbackArguments.push(arguments) 

    dojo.style(td, 'backgroundColor', args);
};
var argument2 = function (deployment) {
 callbackArguments.push(arguments) 

    var indexDoc = _.defaults({
            docType: 'indexPage',
            areas: areas
        }, deployment);
    indexDoc.id = 'index' + (deployment.name === 'default' ? '' : '-' + deployment.name);
    docs.push(indexDoc);
};
var argument3 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument4 = true;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.bind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument6 = r_1;
var base_0 = ["g","Z","p","0","%b",823,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g","Z","p","0","%b",823,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g","Z","p","0","%b",823,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g","Z","p","0","%b",823,242]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test502.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)