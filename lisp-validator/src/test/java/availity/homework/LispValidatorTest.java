package availity.homework;

import org.junit.Assert;
import org.junit.Test;

public class LispValidatorTest {
	private LispValidator validator = new LispValidator();
	
	@Test
	public void shouldReturnTrueForValidateLispString() {
		String lispString = "(defun factorial (N)\n" + 
				"  \"Compute the factorial of N.\"\n" + 
				"  (if (= N 1)\n" + 
				"      1\n" + 
				"    (* N (factorial (- N 1)))))";
		boolean result = validator.validate(lispString);
		Assert.assertTrue(result);
	}
	
	@Test
	public void shouldReturnFalseForInvalidateLispString() {
		String unclosedLispString = "(defun factorial (N)\n" + 
				"  \"Compute the factorial of N.\"\n" + 
				"  (if (= N 1)\n" + 
				"      1\n" + 
				"    (* N (factorial (- N 1))))";
		boolean result = validator.validate(unclosedLispString);
		Assert.assertFalse(result);
		
		String earlyClosedLispString = "(defun factorial (N)\n" + 
				"  \"Compute the factorial of N.\"\n" + 
				"  (if (= N 1))\n" + 
				"      1\n" + 
				"    (* N (factorial (- N 1)))))";
		result = validator.validate(earlyClosedLispString);
		Assert.assertFalse(result);
	}
	
	@Test
	public void shouldHandleInvalidInput() {
		String lispString = "";
		Assert.assertFalse(validator.validate(lispString));
		lispString = null;
		Assert.assertFalse(validator.validate(lispString));
	}
}
