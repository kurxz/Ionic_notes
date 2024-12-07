# Ionic Notes
### * Outdated, this app will not have future updates.
**Notepad** app using Ionic Framework. With multi language support.

Supported Languages:
- English
- Español
- Português Brasil
- Italiano

[<img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png"
    alt="Get it on F-Droid"
    height="80">](https://f-droid.org/en/packages/kurxz.github.io/)

#### The changelog can be found [here](CHANGELOG.md)

# How to build
### The core libraries are Ionic 5 and Angular 13

## Prerequisites

| Tools |
| ------------ |
| [Android Studio](https://developer.android.com/studio) |
| [NodeJS and NPM](https://nodejs.org/en/download/)  |
| [Ionic Framework](https://ionicframework.com/) |

## Installing dependencies

Install the project dependencies with\
`` npm install ``

## Testing
You can run the web version using `ionic serve`
Then you can test the app without building an APK

## Building the release
On your terminal type: `ionic build --prod --release && ionic  cap sync && ionic cap open android` 

Builds the project as release: `` ionic build --prod --release ``\
Sync the files with `` ionic  cap sync ``\
Then open the Android Studio with `` ionic cap open android  ``

So on Android Studio you can **build** the apk for **debugging** or **release**

## License
This app is licenced under Apache License 2.0 
> Is distributed on an "AS IS" BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND

## App working example
![Alt Text](https://i.imgur.com/kGb1KSj.gif)
