    /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module( "Basic Mathematical Operations" );
test("add", function () {        
    equal(eval("15+4"), 19, "Expected output for addition as 19");       
});

test("subtract", function () {        
    equal(eval("105-4"), 101, "Expected output for subtraction as 101");       
});

test("multiply", function () {        
    equal(eval("15*4"), 60, "Expected output for multiplication as 60");       
});

test("divide", function () {        
    equal(eval("100/4"), 25, "Expected output for division as 25");       
});

test("EXP", function () {        
    equal(eval("10E4"), 100000, "Expected output for EXPONENT as 100000");       
});

module( "Precedence and BODMAS/PEMDAS rules" );
test("Precedence", function () {        
    equal(eval("30/2+7*4"), 43, "Expected output for 30 / 2 + 7 * 4 as 43");       
});
test("Precedence", function () {        
    equal(eval("30/2+7*4/4+5"), 27, "Expected output for 30 / 2 + 7 * 4 / 4 + 5  as 27");       
});
test("Precedence", function () {        
    equal(eval("40/10E3*4"), 0.016, "Expected output for 40/10E3*4 as 0.016");       
});

module( "Errors" );
test("Divison by Zero", function () {        
    equal(eval("1000/0"), "Infinity", "Expected output is Infinity");       
});

test("Divison by Zero DeepEqual", function () {

    deepEqual(eval("100/0"), Infinity, "Expected output is Infinity");       
});

module("Backspace");
test("Should erase one character from right", function(){

	var str = "world";	
	equal(str.replace(/.$/, ''), "worl", "Expecting the output string to be worl")
});