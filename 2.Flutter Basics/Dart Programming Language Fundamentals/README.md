# Dart Programming Language Fundamentals

This section covers the fundamental concepts of the Dart programming language.

## Table of Contents

1. [Variables and Data Types](#1-variables-and-data-types)
2. [Control Flow](#2-control-flow)
3. [Object-Oriented Programming](#3-object-oriented-programming)
4. [Exception Handling](#4-exception-handling)
5. [Asynchronous Programming](#5-asynchronous-programming)

---

## 1. Variables and Data Types

Dart is a statically-typed language, meaning you must specify the type of a variable. Dart provides various data types, including:

- `int` for integers
- `double` for floating-point numbers
- `bool` for boolean values
- `String` for strings
- `List` and `Set` for collections
- `Map` for key-value pairs

Here's an example of declaring and initializing variables:

```dart
int age = 25;
double height = 1.75;
bool isStudent = true;
String name = 'John Doe';
List<String> fruits = ['apple', 'banana', 'orange'];
Map<String, int> ages = {'John': 25, 'Alice': 30};
```

## 2. Control Flow

Dart provides control flow statements to control the execution of code based on conditions and loops.

- **Conditional Statements**: Dart supports if statements and conditional expressions for decision-making. 
    Here's an example:
    
    ```dart
        int age = 18;
        if (age >= 18) {
        print('You are an adult.');
        } else {
        print('You are a minor.');
        }
    ```
- **Loops**: Dart supports for loops, while loops, and do-while loops for iterative execution of code. 
    Here's an example of a for loop:

    ```dart
        for (int i = 1; i <= 5; i++) {
        print('Count: $i');
        }
    ```

- **Switch Statement**: The switch statement allows you to compare a value against multiple cases and execute different code blocks based on the matched case. 
    Here's an example:
    
    ```dart
        String color = 'red';

        switch (color) {
        case 'red':
            print('The color is red.');
            break;
        case 'blue':
            print('The color is blue.');
            break;
        default:
            print('Unknown color.');
        }
    ```

## 3. Object-Oriented Programming

Dart is an object-oriented programming language, which means it supports concepts like classes, objects, inheritance, and encapsulation.

- **Classes and Objects**: In Dart, classes serve as blueprints for creating objects. You can define properties (attributes) and methods (behaviors) inside a class. Here's an example:

    ```dart
        class Person {
            String name;
            int age;

            void greet() {
                print('Hello, my name is $name. I am $age years old.');
            }
        }
        void main() {
            var person = Person();
            person.name = 'John';
            person.age = 30;
            person.greet();
        }
    ```
## 4. Exception Handling

Dart provides built-in support for exception handling to handle errors and unexpected situations. You can use try, catch, and finally blocks to handle exceptions. Dart also allows you to define custom exceptions by creating new classes that extend the Exception class. Here's an example:

    ```dart
        void main() {
            try {
                var result = 10 ~/ 0; // Throws an exception (division by zero)
                print('Result: $result');
            } catch (e) {
                print('An error occurred: $e');
            } finally {
                print('Execution complete.');
            }
        }
    ```
## 5. Asynchronous Programming

Dart provides built-in support for asynchronous programming, allowing you to write non-blocking code that can handle tasks such as network requests, file operations, and more.

- **Futures**: A Future represents a potential value or error that will be available at some point in the future. You can use the async and await keywords to work with asynchronous code. Here's an example:

    ```dart
        Future<String> fetchData() async {
            await Future.delayed(Duration(seconds: 2)); // Simulating an asynchronous delay
            return 'Hello, Flutter!';
            }

            void main() async {
            var data = await fetchData();
            print(data);
        }
    ```

In this example, the fetchData() function simulates an asynchronous operation using the Future.delayed() method. The main() function uses the await keyword to wait for the fetchData() function to complete before printing the received data.

These are just some of the fundamental concepts and features of the Dart programming language. Dart offers many more advanced features, such as generics, mixins, libraries, and more, which can be explored as you dive deeper into Dart and Flutter development.