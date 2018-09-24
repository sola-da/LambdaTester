/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"a":1.323941668752984e+307,"j{ZU+hbjY":"&8","":"Kv"};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return self.user.getTasks().then(function (_tasks) {
        expect(_tasks).to.have.length(self.tasks.length - 1);
        return self.user.removeTasks([
            self.tasks[1],
            self.tasks[2]
        ]).then(function () {
            return self.user.getTasks().then(function (_tasks) {
                expect(_tasks).to.have.length(self.tasks.length - 3);
            });
        });
    });
};
var argument3 = p1;
var argument4 = function Promise_finally_fulfilled() {
 callbackArguments.push(arguments) 

    return value;
};
var argument5 = null;
var argument6 = function (editorId) {
 callbackArguments.push(arguments) 

    return new Editor(editorId);
};
var argument7 = p1;
var argument8 = null;
var argument9 = function (value) {
 callbackArguments.push(arguments) 

    expect(value).to.be.equal(30);
};
var argument10 = "kGQx";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9,argument10)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test824.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)