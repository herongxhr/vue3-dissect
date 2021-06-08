// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

// 如果这个库是方法调用的方式使用的，可以声明方法和它的重载
 declare function myLib(a: string): string;
 declare function myLib(a: number): number;
 
 // 如果你希望库名可以作为一个变量的类型名称，可以声明为接口；
 // 列如var x: myLib；
 // 前提是确保这样做有意义；
 interface myLib {
     name: string;
     length: number;
     extras?: string[];
 }
 
 // 如果库有很多属性在这个myLib全局变量上,可以以下声明
 declare namespace myLib {
     //~ We can write 'myLib.timeout = 50;'
     let timeout: number;
 
     //~ We can access 'myLib.version', but not change it
     const version: string;
 
     //~ There's some class we can create via 'let c = new myLib.Cat(42)'
     //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
     class Cat {
         constructor(n: number);
 
         //~ We can read 'c.age' from a 'Cat' instance
         readonly age: number;
 
         //~ We can invoke 'c.purr()' from a 'Cat' instance
         purr(): void;
     }
 
     //~ We can declare a variable as
     //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
     interface CatSettings {
         weight: number;
         name: string;
         tailLength?: number;
     }
 
     //~ We can write 'const v: myLib.VetID = 42;'
     //~  or 'const v: myLib.VetID = "bob";'
     type VetID = string | number;
 
     //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
     function checkCat(c: Cat, s?: VetID);
 }
 