





var callbackArguments = [];
var argument1 = function (i) {
 callbackArguments.push(arguments) 

    return start + step * i;
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (file) {
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
var argument5 = {"213":2.5095553697318185e+307,"843":"wDyFp%","9.88184128297285e+307":"(","":"#+","oN":618,"c":"xs"};
var base_0 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["AG1;","mWN@q","9z",969,"Fb!yK"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)