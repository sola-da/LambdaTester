





var callbackArguments = [];
var argument1 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument2 = true;
var argument3 = function (ban) {
 callbackArguments.push(arguments) 

    ban.TimeOfBanString = new Date(ban.TimeOfBan * 1000).toString();
    return ban;
};
var argument4 = function () {
 callbackArguments.push(arguments) 

    return File.whereUpdate({ id: fileId }, { version: version.id }).execWithin(tx);
};
var argument5 = function (file) {
 callbackArguments.push(arguments) 

    setTimeout(function () {
        expect(cacheStub.size()).to.be.equal(1);
        expect(cacheStub.get(filename)).to.deep.equal({
            raw: rawContents,
            minified: compiled,
            options: options
        });
        done();
    }, 100);
};
var argument6 = r_1;
var argument7 = null;
var base_0 = [823,618,-1]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,618,-1]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)