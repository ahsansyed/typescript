function buildName(firstName: string, lastName?: string): string {
	if (lastName)
		return firstName + "" + lastName;
	else
		return firstName;
}

var result1 = buildName("umer", "imad");
var result2 = buildName("imad");