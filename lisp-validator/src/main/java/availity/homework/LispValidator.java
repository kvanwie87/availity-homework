package availity.homework;

public class LispValidator {
	public boolean validate(String lispString) {
		if(lispString == null || lispString.isEmpty()) {
			return false;
		}
		int openCount = 0;
		for(char lispChar : lispString.toCharArray()) {
			if(lispChar == '(') {
				openCount++;
			} else if(lispChar == ')') {
				openCount--;
				if(openCount < 0) {
					return false; // If you close a parenthesis without an open then string is invalid
				}
			}
		}
		return openCount == 0; 
	}
}
