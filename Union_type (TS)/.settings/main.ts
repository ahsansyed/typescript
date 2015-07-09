function addWithUnion(arg1:string|number|boolean,arg2:string|number|boolean):string|number|boolean{
	if(typeof arg1 === "string")
	{
		return arg1 + "is a string";
	}
	if(typeof arg1 === "number")
	{
	return arg1 + 10;
    }
	if(typeof arg1 === "boolean")
{
	return arg1 && false;
}
}

function f(x: number | number[]) {
	if(typeof x === "number"){
		return x + 10;
	}
	else{
		
	}
}