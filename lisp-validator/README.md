## LISP Validator
Solution is written in Java<br>
[Link to Code](https://github.com/kvanwie87/availity-homework/blob/master/lisp-validator/src/main/java/availity/homework/LispValidator.java)<br>
[Unit Tests](https://github.com/kvanwie87/availity-homework/blob/master/lisp-validator/src/test/java/availity/homework/LispValidatorTest.java)<br>

&nbsp;&nbsp;&nbsp;The code maintains a count of open parentheses. If at the end the count is zero the LISP program has balanced parentheses and is valid. If at any point the count is below zero then a parentheses is closed without opening and invalid. If the end count is greater zero then there is an unclosed parentheses and the LISP program is invalid.<br>

&nbsp;&nbsp;&nbsp; It is possible to split the string into parts and use parellel processing or distributed computing. I decided against looking into that much because it would likely take a very large LISP program for the additional overahead of those solutions to balance out any performance gained.
