// ### **Type 2: Task**

// 1. Match any string that contains a number.
const isContainsNumber = (string) => /\d+/.test(string);

// 2. Find all lowercase letters in a string.
const allLowerCaseLetters = (str) => str.match(/[a-z]+/g).join("");

// 3. Match a string that ends with "ed".
const isEndWithED = (str) => /ed$/.test(str);

// 4. Match the word "yes" in a string.
const isMatchingYes = (str) => /yes/.test(str);

// 5. Find any two consecutive vowels in a string.
const anyConsecutiveVowels = (str) => str.match(/[aeiou]{2}/g);

// 6. Match any string containing the word "hello".
const isContainsHello = (str) => /hello/.test(str);

// 7. Find a string that contains exactly two spaces.
const isContainsExactly2Spaces = (str) => /^\S*(\s\S*){2}$/.test(str);

// 8. Find a string that starts with "abc".
const isStartsWithABC = (str) => /^abc/.test(str);

// 9. Match any string that contains the digit `7`.
const isContains7 = (str) => /7/.test(str);

// 10. Find all occurrences of the letter `e`.
const allOccurrenceOfE = (str) => str.match(/e+/g);

// 11. Match a string that has at least one uppercase letter.
const atleast1UpperCase = (str) => /[A-Z]/.test(str);

// 12. Find a string with a period (`.`) in it.
const isAtleast1Dot = (str) => /\./.test(str);

// 13. Match a string that contains a single space.
const isContainsSingleSpaces = (str) => /^\S*\s\S*$/.test(str);

// 14. Match all words that start with the letter `c`.
const wordsStartWithC = (str) => str.match(/\bc(\w*)\b/g);

// 15. Match a string that contains the sequence "123".
const isContains123 = (str) => /123/.test(str);

// 16. Match a string that contains a forward slash (`/`).
const isContainsSlash = (str) => /\//.test(str);

// 17. Find all strings that contain "and".
const isContainsAnd = (str) => /and/.test(str);

// 18. Match a string that starts and ends with the same letter.
const isStartsAndEndsWithSameLetters = (str) => /^(.).*\1$/.test(str);

// 19. Match all lowercase letters except "x" and "y".
const matchAllExceptXY = (str) => str.match(/[a-wz]/g);

// 20. Find all words in a string that are exactly 5 letters long.
const fiveLetterLongWords = (str) => str.match(/\b\w{5}\b/g);

// 21. Match all words starting with a vowel.
const startingWithVowels = (str) => str.match(/\b[aeiou]\w*\b/g);

// 22. Find all sequences of two or more consecutive digits.
const sequencesOfDigits = (str) => str.match(/\d{2,}/g);

// 23. Match all words that contain exactly three letters.
const threeLetterLongWords = (str) => str.match(/\b\w{3}\b/g);

// 24. Find all occurrences of the word "cat" or "dog".
const occurrencesOfCatAndDog = (str) => str.match(/cat|dog/g);

// 25. Capture the first and last name from a string like `"John Doe"`.
const firstAndLastName = (str) =>
  str.match(/^(\w+).*(\s\w+)$/)[1] + str.match(/^(\w+).*(\s\w+)$/)[2];

// 26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).
const repeatingChars = (str) => str.match(/(\w)\1/g);

// 27. Extract all the hashtags from a tweet.
const extractAllHash = (str) => str.match(/#/g);

// 28. Validate a 24-hour time format like `"23:59"`.
const validateTime = (str) => /^([01][0-9]|[2][0-3]):[0-5][0-9]$/.test(str);

// 29. Capture the area code and phone number from `(123) 456-7890`.
const areaCodeAndPhoneNum = (str) =>
  str.match(/\((\d+)\)\s(\d+\-\d+)/).slice(1);

// 30. Find sequences of whitespace followed by a word.
const whitespaceAndWord = (str) => str.match(/(?<=:\s)\w+/g);

// 31. Match strings containing at least one uppercase and one digit.
const uppercaseAndDigit = (str) => /(.*[A-Z].*[0-9])/.test(str);

// 32. Find all non-alphanumeric characters in a string.
const nonAlphanumeric = (str) => str.match(/([^a-zA-Z0-9]+)/g);

// 33. Match email addresses.
const isAnEmail = (str) =>
  /^([a-zA-Z0-9]+\.[a-zA-Z0-9]|[a-zA-Z0-9])+\@[a-z]+\.[a-z]+$/.test(str);

// 34. Validate dates in the format `YYYY-MM-DD`.
const validateDate = (str) =>
  str.match(
    /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]|[0-9][1-9][0-9]{2}|[1-9][0-9]{3})\-([0][0-9]|[1][0-2])\-([0-2][0-9]|[3][01])/
  );
// 35. Extract the filename and extension from a path like `/path/to/file.txt`.
const fileName = (str) => str.match(/\w+\.\w+/);

// 36. Find all duplicate words in a sentence.

// 37. Match words that do not contain the letter "e".
const wordNotContainingE = (str) => str.match(/\b([^e\W]+)\b/g);

// 38. Extract the domain name from a URL like `https://www.example.com`.
const domainName = (str) => str.match(/(?<=\:\/\/)\w+\.(.+)$/);

// 39. Match strings containing three consecutive vowels.
const threeConsecutiveVowels = (str) => str.match(/\b(\w+[aeiou]{3}\w+)\b/g);

// 40. Find all 4-letter palindromes in a string.
const fourLetterPalindrom = (str) => str.match(/\b(\w)(\w)\2\1\b/g);
