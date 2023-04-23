import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'anroid-app',
  webDir: 'dist/anroid-app',
  bundledWebRuntime: false,
  server: {
    allowNavigation: []
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
