
# react-native-touch-id-universal

## Getting started

`$ npm install react-native-touch-id-universal --save`

### Mostly automatic installation

`$ react-native link react-native-touch-id-universal`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-touch-id-universal` and add `RNTouchIdUniversal.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNTouchIdUniversal.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNTouchIdUniversalPackage;` to the imports at the top of the file
  - Add `new RNTouchIdUniversalPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-touch-id-universal'
  	project(':react-native-touch-id-universal').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-touch-id-universal/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-touch-id-universal')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNTouchIdUniversal.sln` in `node_modules/react-native-touch-id-universal/windows/RNTouchIdUniversal.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Touch.Id.Universal.RNTouchIdUniversal;` to the usings at the top of the file
  - Add `new RNTouchIdUniversalPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNTouchIdUniversal from 'react-native-touch-id-universal';

// TODO: What to do with the module?
RNTouchIdUniversal;
```
  # RNTouchIDUniversal
