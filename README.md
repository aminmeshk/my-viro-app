# My Viro App

This is a testing React Native project with Viro (AR/VR Library for React Native)

![Application Screen Record](https://raw.githubusercontent.com/aminmeshk/my-viro-app/master/record.gif)

## Tech Stack
- React Native
- TypeScript
- Viro React (AR/VR Library for React Native)

## Features
### Screen 1: 
Detects an image of a MacBook keyboard and draws a 3D Gear shape above it.

If you don't have a MacBook, download the image below and put it on a tablet/phone/computer and point the camera at the keyboard image for the device to scan it:

![Keyboard Image](https://raw.githubusercontent.com/aminmeshk/my-viro-app/master/assets/images/laptop/mbp-cr.jpg)

### Screen 2:
Detects any horizontal flat surface (floor, table, etc.) and draws an image on the surface

## Installation

You can try out the app either by installing the pre-built APK on Android or build the source and run on your iOS/Android device

### 1. Pre-built APK
See [Release page](https://github.com/aminmeshk/my-viro-app/releases/tag/v1.0), download [my-viro-app.apk](https://github.com/aminmeshk/my-viro-app/releases/download/v1.0/my-viro-app.apk) from the assets and install it on an [ARCore Supported Android device](https://developers.google.com/ar/develop#supported_devices)

### 2. Build from source

#### Prerequisites
- MacOS Computer (for iOS build)
- [ARCore Supported Android device](https://developers.google.com/ar/develop#supported_devices) or [ARKit supported iOS device](https://www.apple.com/augmented-reality/) with iOS 11 or higher

#### Steps

1. `git clone https://github.com/aminmeshk/my-viro-app.git`
2. `cd my-viro-app`
3. `yarn install`
4. `npx pod-install` (iOS)
5. `yarn android` or `yarn ios` (Only will run on physical devices)

if `yarn android` fails with EACCESS gradlew.bat or EACCESS gradlew, run `chmod +x gradlew.bat` or `chmod +x gradlew`.
