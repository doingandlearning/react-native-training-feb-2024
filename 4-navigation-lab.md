
# **1. Get Started**

## Use the template
- Initialize a new project using the Expo tabs template, which will set up a basic navigation structure for you.

  ```bash
  npx create-expo-app@latest --template tabs@50
  ```

## Add to an existing project

- Install the required dependencies:

  ```bash
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  ```

- Update the `main` field in your `package.json` file to:

  ```json
  "main": "expo-router/entry"
  ```

- Add a custom scheme to your `app.json`:

  ```json
  "expo": {
    "scheme": "yourcustomscheme"
  }
  ```

# **2. Create Some Pages and Navigate Around**
- Create an `app` folder at the root of your project.
- Inside the `app` folder, create an `index.js` file 
- Create some more pages

- Use the `Link` component from `expo-router` to navigate between routes. Example:

  ```jsx
  import { Link } from 'expo-router';

  const HomeScreen = () => {
    return (
      <View>
        <Text>Welcome to the Home Screen</Text>
        <Link to="/about">Go to About</Link>
      </View>
    );
  };
  ```

# **3. Add a `_layout.js` Page**
- Create a `_layout.js` file in your `app` folder.
- Export a default layout with a `<Slot />` which will be used to render child components.

  ```jsx
  import { Slot } from 'expo-router';

  export default function Layout  ()  {
    return (
      <View>
        {/* Your top component */}
        <View>
          {/* ... */}
        </View>

        <Slot /> {/* This renders the child route */}

        {/* Your bottom component */}
        <View>
          {/* ... */}
        </View>
      </View>
    );
  };
  ```

- Experiment by adding components at the top or bottom of your
layout.

# **4. Use the Stack Navigator**
- To implement a stack navigation, you will define routes using the `Stack.Group` and `Stack.Screen` components provided by `expo-router`.

  ```jsx
  import { Stack } from 'expo-router/stack';

  export default function App() {
    return (
      <Stack />
    );
  }
  ```

- In each screen component, use the navigation context to push and pop screens from the stack.

- On any individual screen, you can add more configurations:

```jsx
 <Stack.Screen options={{ headerShown: true, title: "Settings" }} />
```

# **5. Use the Tabs Navigator**
- Configure the tabs by wrapping your routes with the `Tabs` and `Tabs.Screen` components.

  ```jsx
  import { Tabs } from 'expo-router/tabs';
  import FontAwesome from '@expo/vector-icons/FontAwesome';

  export default function Layout() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome
                size={28}
                style={{ marginBottom: -3 }}
                name="home"
                color={color}
              />
            ),
          }}
        />
        {/* ... other tabs */}
      </Tabs.Navigator>
    );
  }
  ```

- Customize the tab bar options as needed to fit your design requirements.

# **6. Use the Drawer Navigator**
## Setup
You'll need to do a bit of config before you can use this:

- Install some dependencies:

``` bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

- Update the babel.config.js

```js
module.exports = {
  presets: [
    ],
    plugins: [
      'react-native-reanimated/plugin',
    ],
};
```

## Implement
- Implement a drawer navigator by using `Drawer` and `Drawer.Screen` components.

  ```jsx
  import { Drawer } from 'expo-router/drawer';

  export default function Layout() {
    return (
      <Drawer>
             <Drawer.Screen
								name="index" // This is the name of the page and must match the url from root
								options={{
									drawerLabel: 'Home',
									title: 'overview',
								}}
							/>
							<Drawer.Screen
								name="user/[id]" // This is the name of the page and must match the url from root
								options={{
									drawerLabel: 'User',
									title: 'overview',
								}}
							/>
      </Drawer>
    );
  }
  ```

- The drawer can be opened by swiping from the edge of the screen or by using the navigation context to toggle it programmatically.

**Lab Conclusion**
By the end of this lab, you should have a functional React Native app with multiple navigation patterns implemented using `expo-router`. You will have experimented with stack, tabs, and drawer navigators, and should understand how to structure your app's navigation flow.

Be sure to test all navigation flows extensively, ensuring that links, tabs, and drawer items navigate to the correct screens, and that the back functionality works as expected within the stack navigator.