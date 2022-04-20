import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'kurxz.github.com',
  appName: 'Notes',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
  "SplashScreen": {
    "launchShowDuration": 10000,
    "launchAutoHide": false
  }}
};

export default config;
