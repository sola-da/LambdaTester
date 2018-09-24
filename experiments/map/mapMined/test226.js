





var callbackArguments = [];
var argument1 = function (style, name) {
 callbackArguments.push(arguments) 

    return '' + name + ': ' + style;
};
var argument2 = "";
var argument3 = null;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    expect(cacheStub.size()).to.be.equal(0);
    done();
};
var argument5 = ["?",403,893,"#(",403];
var argument6 = r_0;
var argument7 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument8 = {"403":"m;","":6.953192544217866e+307,"2.551163782560422e+307":"","O9'r":7.926412479491489e+307};
var argument9 = r_0;
var argument10 = function (serData1) {
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
var base_0 = [126,627,460,714,0,893,-1,627,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,627,460,714,0,893,-1,627,627]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,627,460,714,0,893,-1,627,627]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test226.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)