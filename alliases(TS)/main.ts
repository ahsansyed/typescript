type stringNumberOrBoolean = string|number|boolean;
type primitiveArray = Array<string|number|boolean>;
type MyNumber = number;
type Callback=()=>void;
type CallBackWithString=(string)=>void;



function work(x: stringNumberOrBoolean){
}

function usingCallback(f:CallBackWithString){
	f("this is a string");
}