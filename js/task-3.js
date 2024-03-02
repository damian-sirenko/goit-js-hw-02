function checkForSpam(message){
	const spamWord1 ='SALE';
	const spamWord2 = 'SPAM';
	const normalizedMessage = message.toUpperCase();
	const hasSpamWords1 = normalizedMessage.includes(spamWord1);
	const hasSpamWords2 = normalizedMessage.includes(spamWord2);
	if (hasSpamWords1 || hasSpamWords2) {
		return true;
	}	else {
		return false;
	}
}
	

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true