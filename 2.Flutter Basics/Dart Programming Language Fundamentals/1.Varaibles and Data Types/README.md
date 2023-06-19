# Variables and Data types

In Dart, variables are used to store and manipulate data. They are like containers that hold values, which can be of different types. Dart is a statically typed language, which means that variables must have a specific type declared at compile-time.

## A. Variable Declaration and Variable Initialization

### Variable Declaration

To declare a variable in Dart, you need to specify its type followed by the variable name. Here's an example:

```dart
    int age; // Declaring an integer variable named 'age'
    String name; // Declaring a string variable named 'name'
    double pi; // Declaring a double variable named 'pi'
    bool isRaining; // Declaring a boolean variable named 'isRaining'
```

In the above code, we declared variables of different types: age (integer), name (string), pi (double), and isRaining (boolean).

### Variable Initialization

Variables can be initialized at the time of declaration or later in the program. Here's an example:

```dart
    int age = 30; // Initializing 'age' with the value 30
    String name = 'John'; // Initializing 'name' with the value 'John'
    double pi = 3.14; // Initializing 'pi' with the value 3.14
    bool isRaining = true; // Initializing 'isRaining' with the value true
```

In the above code, we initialized the variables age, name, pi, and isRaining with their respective values.

## B.Data Types

Dart has several built-in data types to represent different kinds of values. Here are some commonly used data types:

- **int**: Used to represent integers (whole numbers) like 5, -10, 100, etc.
- **double**: Used to represent floating-point numbers (decimal numbers) like 3.14, -0.5, 2.0, etc.
- **String**: Used to represent a sequence of characters, such as "Hello", "Dart", "123", etc.
- **bool**: Used to represent boolean values (true or false) indicating the logical state of something.
- **List**: Used to represent an ordered collection of values, such as [1, 2, 3], ['apple', 'banana', 'orange'], etc.
- **Map**: Used to represent a collection of key-value pairs, such as {'name': 'John', 'age': 30}.
- **dynamic**: Used to represent a value of any type. The type of a dynamic variable can change at runtime.

### Type Inference

Dart also supports type inference, which means the type of a variable can be automatically inferred based on its value. Here's an example:

```dart
    var age = 30; // 'age' is inferred as an integer
    var name = 'John'; // 'name' is inferred as a string
    var pi = 3.14; // 'pi' is inferred as a double
    var isRaining = true; // 'isRaining' is inferred as a boolean
```

In the above code, the var keyword is used to let Dart infer the type of the variable based on the assigned value.

## C.Constants

Dart allows the declaration of constants using the final or const keyword. Constants are variables whose values cannot be changed once assigned. Here's an example:

```dart
    final int age = 30; // 'age' is a final constant
    const double pi = 3.14; // 'pi' is a compile-time constant
```

The final keyword is used for variables whose values are determined at runtime, while the const keyword is used for variables whose values are known at compile-time.

## D.Scope and Lifetime

Variables in Dart have a scope, which defines their visibility and accessibility within a specific part of the code. Dart follows block scope, meaning variables declared inside a block (enclosed within {}) are only accessible within that block. For example:

```dart
    {
    int x = 5; // 'x' is only accessible within this block
    print(x); // Prints 5
    }

    print(x); // Error: 'x' is not accessible outside the block
```

The lifetime of a variable is the duration during which it remains in memory. In Dart, local variables have a limited lifetime, existing only within the scope they are declared in. When a variable goes out of scope (e.g., the block it was declared in ends), its memory is freed.

## E. Variable Naming

In Dart, variables follow the camel case naming convention, where the first word starts with a lowercase letter and subsequent words start with an uppercase letter. Variable names should be descriptive and meaningful. Here are some examples of variable names:

```dart
    int age;
    String fullName;
    double hourlyRate;
    bool isRaining;
```

## F. Type Inference

Dart supports type inference, which means you don't always have to explicitly specify the data type of a variable. Dart's static type system can automatically infer the type based on the assigned value. For example:

```dart
    var age = 30; // 'age' is inferred as an integer
    var name = 'John'; // 'name' is inferred as a string
```

Using type inference can make your code more concise and readable, especially when the type is obvious from the assigned value.

## G. Type Conversion

Dart provides mechanisms for converting values from one type to another. This process is called type conversion or type casting. You can perform explicit type conversions using the following operators or functions:

- **as**: Used for type casting in cases where there is a known relationship between types.
- **is**: Used to check if an object is of a particular type.
- **as Type**: Used to cast an object to a specific type.
- **Type.parse()**: Used to parse a string representation of a value into a specific type.
- **Type.fromEnvironment()**: Used to obtain a value of a specific type from the environment.

For example:

```dart
    double pi = 3.14;
    int piAsInt = pi.toInt(); // Type casting from double to int
    String piAsString = pi.toString(); // Converting double to string

    String ageAsString = '30';
    int age = int.parse(ageAsString); // Parsing string to int
```

## H. Null Safety

Starting from Dart 2.12, null safety is a feature that helps eliminate null reference exceptions. It introduces two new type annotations: nullable (type?) and non-nullable (type). By default, variables are non-nullable, meaning they cannot hold null values unless explicitly declared as nullable. The Dart compiler provides checks to ensure null safety at compile-time, reducing the risk of null-related errors during runtime.

## Summary

Variables and data types are fundamental concepts in Dart programming. They allow you to store and manipulate different kinds of values. By understanding how to declare, initialize, and use variables of different types, you can effectively work with data in your Dart programs.

This is just an overview of variables and data types in Dart. There are more advanced topics and concepts to explore, such as type casting, type checking, and working with user-defined types. By practicing and experimenting with variables and data types, you'll gain a solid foundation for Dart programming.

For more information and examples, please refer to the official Dart documentation: Dart Language Tour

Happy coding!