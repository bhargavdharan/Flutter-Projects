# Flutter Counter App

This is a simple Flutter counter app that demonstrates the Flutter architecture and widgets concept. The app increments a counter value when a button is pressed.

## Installation and Setup

1. Install Flutter by following the official documentation: [Flutter Installation Guide](https://flutter.dev/docs/get-started/install)

2. Set up your development environment with your preferred IDE (e.g., Android Studio, Visual Studio Code, or IntelliJ IDEA). Refer to the Flutter documentation for detailed instructions: [Flutter Development Environment Setup](https://flutter.dev/docs/get-started/editor)

3. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/bhargavdharan/Flutter-Projects.git
   ```

## Getting Started

1. Open the project in your preferred IDE.

2. Navigate to the lib directory and open the main.dart file.

3. Replace the existing code with the following code:

    ```dart
    import 'package:flutter/material.dart';

    void main() {
    runApp(MyApp());
    }

    class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
        home: CounterScreen(),
        );
    }
    }

    class CounterScreen extends StatefulWidget {
    @override
    _CounterScreenState createState() => _CounterScreenState();
    }

    class _CounterScreenState extends State<CounterScreen> {
    int _counter = 0;

    void _incrementCounter() {
        setState(() {
        _counter++;
        });
    }

    @override
    Widget build(BuildContext context) {
        return Scaffold(
        appBar: AppBar(
            title: Text('Counter App'),
        ),
        body: Center(
            child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
                Text(
                'Counter Value:',
                style: TextStyle(fontSize: 24),
                ),
                Text(
                '$_counter',
                style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
                ),
            ],
            ),
        ),
        floatingActionButton: FloatingActionButton(
            onPressed: _incrementCounter,
            child: Icon(Icons.add),
        ),
        );
    }
    }
    ```
4. Run the app on an emulator or physical device to see the counter app in action.

## Code Explanation

- We import the necessary flutter/material.dart package.

- The main() function is the entry point of our app. It calls the runApp() function, which takes an instance of MyApp as an argument.

- MyApp is a stateless widget that represents our app. It returns a MaterialApp widget as the root of the widget tree. Inside the MaterialApp, we define CounterScreen as the home widget.

- CounterScreen is a stateful widget. It has a counter variable _counter and a method _incrementCounter() that increments the counter when called. The build() method defines the UI of the widget, which includes a Scaffold with an AppBar, a Center widget, and a FloatingActionButton.

- Inside the Center widget, we have a Column widget that contains two Text widgets. The first Text widget displays the label "Counter Value:", and the second Text widget displays the current value of the counter. We use string interpolation ('$_counter') to display the value of the _counter variable.

- The FloatingActionButton triggers the _incrementCounter() method when pressed. It updates the counter value and triggers a UI rebuild by calling the setState() method.

## App Preview

![Alt Text](/Flutter-Projects/2.Flutter%20Basics/Flutter%20Architecture%20%26%20Widgets/Images/counter-app.png)


