 
var api = {
  letConst: { passes: "'use strict'; let a; const b = 2;" },
  letLoop: { passes: "'use strict'; for(let i in {}){}; for(let i=0;;){break}" },
  constLoop: { passes: "'use strict'; for(const i in {}){}; for (const i=0;;){break}" },
  defaultParameter: { passes: "'use strict'; function a(b=2){}" },
  spreadRest: { passes: "'use strict'; var a = [1,2]; +function b(...c){}(...a);" },
  destructuring: { passes: "'use strict'; var a = [1,2], [b,c] = a, d = {e:1,f:2}, {e:E,f} = d;" },
  parameterDestructuring: { passes: "'use strict'; function a({b,c}){}" },
  templateString: { passes: "'use strict'; var a = 1, b = `c${a}d`;" },
  forOf: { passes: "'use strict'; for (var a of [1]) {}" },
  arrow: { passes: "'use strict'; var a = () => {};" },
  generator: { passes: "'use strict'; function *a(){ yield; }" },
  conciseMethodProperty: { passes: "'use strict'; var a = 1, b = { c(){}, a };" },
  computedProperty: { passes: "'use strict'; var a = 1, b = { ['x'+a]: 2 };" },
  moduleExport: { passes: "'use strict'; export var a = 1;" },
  moduleImport: { passes: "'use strict'; import {a} from 'b';" },
  classes: { passes: "'use strict'; class Foo {}; class Bar extends Foo {};" },
  numericLiteral: { passes: "'use strict'; var a = 0o1, b = 0b10;" },
  oldOctalLiteral: { fails: "'use strict'; var a = 01;" },
  symbol: { passes: "'use strict'; var a = Symbol('b');" },
  symbolImplicitCoercion: { dependencies: ["symbol"], fails: "'use strict'; var a = Symbol('a'); a + '';" },
  unicodeEscape: { passes: "'use strict'; var a = '\\u{20BB7}';" },
  unicodeIdentifier: { passes: "'use strict'; var \\u{20BB7};" },
  unicodeRegExp: { passes: "'use strict'; var a = /\\u{20BB7}/u;" },
  stickyRegExp: { passes: "'use strict'; var a = /b/y;" },
  letTDZ: { dependencies: ["letConst"], fails: "'use strict'; a = 1; let a;" },
  letLoopScope: { dependencies: ["letLoop","forOf"], passes: "'use strict'; var x=[],i=0;for(let i=2;i<3;i++){x.push(function(){return i})};for(let i in {3:0}){x.push(function(){return i})};for(let i of [4]){x.push(function(){return i})};if(x[0]()*x[1]()*x[2]()!=24) throw 0;" },
  constRedef: { dependencies: ["letConst"], fails: "'use strict'; const a = 1; a = 2;" },
  objectProto: { passes: "'use strict'; var a = { b: 2 }, c = { __proto__: a }; if (c.b !== 2) throw 0;" },
  objectSuper: { passes: "'use strict'; var a = { b: 2 }, c = { d() { return super.b; } }; Object.setPrototypeOf(c,a); if (c.d() !== 2) throw 0;" },
  extendNatives: { dependencies: ["class"], passes: "'use strict'; class Foo extends Array { }; var a = new Foo(); a.push(1,2,3); if (a.length !== 3) throw 0;" },
  TCO: { passes: "'use strict'; +function a(b){ if (b<6E4) a(b+1); }(0);" },
  functionNameInference: { passes: "'use strict'; var a = { b: function(){} }; if (a.b.name != 'b') throw 0;" },
  ObjectStatics: { is: "'use strict'; return ('getOwnPropertySymbols' in Object) && ('assign' in Object) && ('is' in Object);" },
  ArrayStatics: { is: "'use strict'; return ('from' in Array) && ('of' in Array);" },
  ArrayMethods: { is: "'use strict'; return ('fill' in Array.prototype) && ('find' in Array.prototype) && ('findIndex' in Array.prototype) && ('entries' in Array.prototype) && ('keys' in Array.prototype) && ('values' in Array.prototype);" },
  TypedArrays: { is: "'use strict'; return ('ArrayBuffer' in global) && ('Int8Array' in global) && ('Uint8Array' in global) && ('Int32Array' in global) && ('Float64Array' in global);" },
  TypedArrayStatics: { dependencies: ["TypedArrays"], is: "'use strict'; return ('from' in Uint32Array) && ('of' in Uint32Array);" },
  TypedArrayMethods: { dependencies: ["TypedArrays"], is: "'use strict'; var x = new Int8Array(1); return ('slice' in x) && ('join' in x) && ('map' in x) && ('forEach' in x);" },
  StringMethods: { is: "'use strict'; return ('includes' in String.prototype) && ('repeat' in String.prototype);" },
  NumberStatics: { is: "'use strict'; return ('isNaN' in Number) && ('isInteger' in Number);" },
  MathStatics: { is: "'use strict'; return ('hypot' in Math) && ('acosh' in Math) && ('imul' in Math);" },
  collections: { is: "'use strict'; return ('Map' in global) && ('Set' in global) && ('WeakMap' in global) && ('WeakSet' in global);" },
  Proxy: { is: "'use strict'; return ('Proxy' in global);" },
  Promise: { is: "'use strict'; return ('Promise' in global);"},
  Reflect: { is: "'use strict'; return ('Reflect' in global);" },
};



// api.letConst.passes
// console.log( typeof api.letConst.passes,api.letConst.passes )
// eval(api.letConst.passes);
// eval("aa = 10;bb=20")
// console.log(aa,bb)


/*
上面代码定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个Point类。下面，我们在ColorPoint内部加上代码。
*/
function Point1(x,y){
    this.x = x;
    this.y = y;
}
Point1.prototype.toString = function(){
    return '(' + this.x + ', ' + this.y + ')';
};
var p = new Point1(1,2);

console.log( p )

//定义类
class Point2{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {
  constructor() {
    super();
  }
}
new A() // A
new B() // B代码

class test1 {
	
	constructor(){
		console.log("默认执行")
	}
	
	a(){
		console.log("默认执行aaa----------")
	}
}
new test1()
new test1().a()