# Control Flow in Dart

Control flow statements in Dart allow you to control the execution of your code based on certain conditions. They include if statements, loops, and switch statements. Let's explore each of these in detail.

## 1. If Statements

If statements allow you to execute a block of code conditionally, based on whether a certain condition is true or false. The basic syntax of an if statement is as follows:

```dart
    if (condition) {
    // Code to be executed if the condition is true
    } else {
    // Code to be executed if the condition is false
    }
```

Here's an example:

```dart
int age = 25;

if (age >= 18) {
  print('You are an adult.');
} else {
  print('You are a minor.');
}

Output:
You are an adult.
```
You can also use additional else if clauses to handle multiple conditions:

```dart
int num = 0;

if (num > 0) {
        print('Positive');
    } else if (num < 0) {
        print('Negative');
    } else {
        print('Zero');
}

Output:
    Zero
```

## 2. Loops

Loops allow you to repeat a block of code multiple times. Dart provides several types of loops, including for, while, and do-while loops.

### a. For Loop

The for loop executes a block of code for a specified number of times. The basic syntax of a for loop is as follows:

```dart
for (initialization; condition; update) {
  // Code to be executed
}
```

Here's an example that prints the numbers from 1 to 5:

```dart
for (int i = 1; i <= 5; i++) {
  print(i);
}

Output:

1
2
3
4
5
```

### b. While Loop

The while loop executes a block of code repeatedly as long as a certain condition remains true. The basic syntax of a while loop is as follows:

```dart
while (condition) {
  // Code to be executed
}
```

Here's an example that prints the numbers from 1 to 5 using a while loop:

```dart
int i = 1;

while (i <= 5) {
  print(i);
  i++;
}

Output:
1
2
3
4
5
```

### c. Do-While Loop

The do-while loop is similar to the while loop, but the condition is evaluated after executing the code block. This guarantees that the code block is executed at least once. The basic syntax of a do-while loop is as follows:

```dart
do {
  // Code to be executed
} while (condition);
```

Here's an example that prints the numbers from 1 to 5 using a do-while loop:

```dart
int i = 1;

do {
  print(i);
  i++;
} while (i <= 5);

Output:
1
2
3
4
5
```

## 3. Switch Statements

Switch statements provide an efficient way to select one of many code blocks to be executed. It evaluates an expression and compares its value against a list of cases. When a match is found, the corresponding code block is executed. The basic syntax of a switch statement is as follows:

```dart
switch (expression) {
  case value1:
    // Code to be executed if the expression matches value1
    break;
  case value2:
    // Code to be executed if the expression matches value2
    break;
  // Add more cases as needed
  default:
    // Code to be executed if none of the cases match the expression
}
```

Here's an example that determines the day of the week based on a numeric value:

```dart
int day = 1;

switch (day) {
  case 1:
    print('Monday');
    break;
  case 2:
    print('Tuesday');
    break;
  case 3:
    print('Wednesday');
    break;
  case 4:
    print('Thursday');
    break;
  case 5:
    print('Friday');
    break;
  case 6:
    print('Saturday');
    break;
  case 7:
    print('Sunday');
    break;
  default:
    print('Invalid day');
}

Output:
Monday

```

## Summary

Control flow statements such as if statements, loops, and switch statements are essential for controlling the execution of code based on different conditions. By using these statements effectively, you can create more flexible and dynamic programs in Dart.

This is just a basic overview of control flow statements in Dart. There are more advanced topics and techniques to explore, such as nested loops, control flow with exceptions, and more complex switch statements. By practicing and experimenting with control flow, you'll gain a solid understanding of how to control the flow of your code.

For more information and examples, please refer to the official Dart documentation: [Dart Language Tour - Control Flow Statements](https://dart.dev/guides/language/language-tour#control-flow-statements)

Happy coding!

