





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    return f[1];
};
var argument2 = false;
var argument3 = true;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x.value || x;
};
var argument5 = true;
var argument6 = function (file) {
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
var argument7 = null;
var argument8 = r_2;
var base_0 = ["d$;","R"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d$;","R"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/map/mapMined/test64.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)