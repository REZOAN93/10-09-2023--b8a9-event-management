<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: ReferenceError: greetign is not defined.

<i>There is a typo in the code where greetign is used instead of greeting. As a result, a ReferenceError will be thrown because greetign is not defined as a variable.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is C: `"12"`.

<i>In the given code, the function sum is called with the arguments 1 and "2". However, "2" is a string, not a number. When try to add a number and a string in JavaScript, it doesn't work as expected. Instead of adding them, it combines them as a string. So, 1 + "2" results in the string "12". Therefore, the correct answer is C: "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: ['🍕', '🍫', '🥑', '🍔']'. ?

<i>In the given code, the info object's favoriteFood property is initially set to "🍕" which is the first element of the food array. However, later in the code, the value of info.favoriteFood is changed to "🍝". This change does not affect the original food array, so when console.log(food) is executed, it still prints the original array ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: Hi there, undefined.

<i>The sayHi function expects a parameter name, but when it is called in console.log(sayHi()), no argument is provided. In JavaScript, when you call a function with missing parameters, those parameters are assigned the value undefined by default. Therefore, the function returns "Hi there, undefined" as name is undefined in this case.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is C: 3.

<i> The forEach method iterates over the nums array. In JavaScript, 0 is considered falsy, and all other numbers are truthy. Therefore, the condition if (num) evaluates to true for all non-zero numbers (1, 2, and 3). As a result, the count variable is incremented three times, making it 3. Hence, console.log(count) will output 3.</i>

</p>
</details>
