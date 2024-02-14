# React Native Development

- Monday February 12th - Wednesday February 14th
- Kevin Cunningham (https://kevincunningham.co.uk)
- Miro link: https://miro.com/app/board/uXjVNtovXAM=/?share_link_id=713859135128
- Feedback link: https://forms.microsoft.com/e/yj2gETunXa

# Pre-course

There are two bits of setup it would be great to have run through before we kick the course off.

## 1. Clone this repo

At the beginning of this course, the readme.md will be the only file in the repo. As we go through the course, code examples, notes and labs will be added. To prepare make sure you can clone this repo using the Git command line or a GUI like Git Desktop.

It would be good to create a folder in this project that you keep all of the code and notes that you make and take. Keeping it in a seperate folder will stop any merge conflicts as we go through the course.

## 2. Check you can build and run a starter app

There are a lot of requirements needed to build and run a React Native application and we will look at all of them during the course. To make sure that there are no "show stoppers" though, please make sure to run through the following script:

- On your terminal run `npx create-expo-app my-app`
- While that runs, on your phone install Expo Go (this is available in the Apple App Store and the Google Play Store)
- Change directory in the my-app directory and run `npm run start`. This should display a QR code on your terminal
- Open up your Expo Go app and “Scan QR Code”
- Check on the terminal that the bundle is being built and that your phone eventually displays “Open up App.js to start working on your app!”
- Do just that - open the App.js file in your project directory and change the text
- Confirm that when you save the file on your computer that it updates on your phone

# Timings:

- 9:30-11 Session 1
- 11-11.15 Coffee
- 11.15-12.45 Session 2
- 12.45-1.45 Lunch
- 1.45-3.15 Session 3
- 3.15-3.30 Tea
- 3.30-4.30 Session 4

---

**1. Introduction to React Native**

- **How React Native Works**: A comprehensive introduction to the underlying mechanisms of React Native, including how it interacts with native components.
- **Strengths of React Native**: Discussion of the advantages of using React Native, such as:
  - Developer Availability
  - Developer Productivity
  - Performance
  - One-way Data Flow
  - Developer Experience
  - Transpilation
  - Productivity and Efficiency
  - Community Support
  - Open Source
  - Immediate Updates
- **Drawbacks of React Native**: A balanced look at some of the challenges associated with React Native, including:
  - Still not at v1
  - Requires Familiarity with React
  - Need to Learn Xcode/Android for Native Features
  - Additional Abstraction Layer
- **Creating and Using Basic Components**: Hands-on session to create and use basic React Native components.
- **Expo**: Introduction to Expo, including setup, JS debugging, and live reloading.

**2. Layout**

- Study of various layout components in React Native, such as View, Text, Button, Touchable, FlatList/SectionList, VirtualizedList, and Modal.

**3. Styling**

- **Flexbox**: Introduction to Flexbox for React Native.
- **Inline Styles**: How to use inline styles for quick component styling.
- **Inspecting and Debugging Styles**: Using the React Native inspector to troubleshoot and perfect styles.
- **Media Queries**: Learn how to use Dimensions and onLayout for responsive design.

**4. Understanding React**

- Deep dive into core React concepts such as state, props, useEffect, and useContext.

**5. Calling APIs**

- Learn about fetching data from APIs and managing state with useState and useContext.

**6. APIs and Data**

- Introduction to various storage options in React Native, such as SecureStore, AsyncStorage, and SQLite.

**7. Navigation**

- Understanding the difference between React Native navigation and web navigation.
- Learn about stack-based, tab-based, and drawer-based navigation.
- Learn how to persist data across navigation states.

**8. Cross-platform APIs**

- Learn to use cross-platform APIs such as the Alert API, Geolocation API, PanResponder, Camera, Vibration.

**9. WebView, Forms, and Reusable Components**

- Learn about WebView and form components such as Slider, Picker, Switch.

**10. Testing**

- Understand the importance of unit testing and component testing in React Native applications.

**11. Deploying**

- Introduction to EAS Build for building and deploying React Native apps. Learn about EAS Build, EAS Submit, and EAS Update.
- Learn about local builds.

## To prebuild

```
npx expo prebuild
```

If you make a mistake

```
npx expo prebuild --clean
```

https://gist.github.com/doingandlearning/fcff23367e5bf034b54a5abfb342d523
