Creating a lab for testing React Native components involves several steps, from setting up the testing environment to writing and running tests. Here's a lab outline to test the given `ShoppingList` component, along with the creation of a new component to apply these skills.

**Lab Setup**

1. **Environment Setup**:
   - Ensure that the testing environment is set up with `@testing-library/react-native` and `jest`.
   - If not already installed, add them to the project:

     ```bash
     npx expo install jest-expo jest
     ```

		 ```bash
		 npm install @testing-library/react-native
		 ```


2. **Test Script**:
   - Add a test script to your `package.json` and the jest config:

     ```json
			"scripts": {
				"test": "jest"
			},
			"jest": {
				"preset": "jest-expo"
			}

     ```

**Lab Exercise**

1. **Understanding the Component**:
   - Study the `ShoppingList` component to understand its functionality.
   - Notice the state management, the interaction between the text input and button, and the way items are rendered.

2. **Writing a Test Case**:
   - Write a test case for adding an item to the shopping list using the existing test as a reference.
   - Consider edge cases such as adding an empty string or duplicate items.

3. **Running Tests**:
   - Run the tests using the `npm test` command and observe the output.
   - Ensure the existing test passes without any issues.

4. **Creating a New Component to Test**:
   - Create a new component, such as a `ToDoList`, that has similar functionality to the `ShoppingList`.
   - Include a text input for the task name, a button to add the task, and a way to display the tasks.

     ```jsx
     // ToDoList.js
     import { FlatList, Text, TextInput, Button, StyleSheet } from "react-native";
     import React from "react";

     export default function ToDoList() {
       const [task, setTask] = React.useState("");
       const [tasks, setTasks] = React.useState([]);

       const addNewTaskToList = () => {
         if (task.trim() !== "") {
           setTasks([task, ...tasks]);
           setTask("");
         }
       };

       return (
         <>
           <TextInput
             value={task}
             placeholder="Enter task"
             onChangeText={(text) => setTask(text)}
             style={styles.input}
           />
           <Button title="Add task" onPress={addNewTaskToList} />
           <FlatList
             data={tasks}
             renderItem={({ item }) => <Text>{item}</Text>}
           ></FlatList>
         </>
       );
     }

     const styles = StyleSheet.create({
       input: {
         height: 40,
         margin: 12,
         borderWidth: 1,
         padding: 10,
         width: 150,
       },
     });
     ```

5. **Writing New Tests**:
   - Write tests for the new `ToDoList` component, ensuring you can add tasks and display them correctly.
   - Test for edge cases specific to the new component.

6. **Running New Tests**:
   - Execute the new tests and validate the functionality of the `ToDoList` component.

**Lab Conclusion**

After completing this lab, you should have a good understanding of how to use `@testing-library/react-native` to write and run tests for React Native components. You will have practiced creating a new component and writing tests to ensure it functions correctly. This hands-on experience is crucial for building reliable and maintainable React Native applications.

