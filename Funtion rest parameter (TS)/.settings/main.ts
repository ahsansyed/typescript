function buildName(firstName:string, ...restOfName: string[] ){
	return firstName +""+ restOfName.join(" ");
	
}
var EmployeeName=buildName("jaha","kallo","local","monalo");