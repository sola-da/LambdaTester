





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    expect(cacheStub.size()).to.be.equal(0);
    done();
};
var argument2 = false;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstChild && elem.firstChild.nodeType === 1) {
        elem = elem.firstChild;
    }
    return elem;
};
var argument5 = r_0;
var base_0 = [49,823,49,823,705,242,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,823,49,823,705,242,783]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test215.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)