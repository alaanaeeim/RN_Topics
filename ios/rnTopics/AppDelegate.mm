#import "AppDelegate.h"
#import "RNSplashScreen.h"
#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"rnTopics";
  
  // You can add your custom initial props in the dictionary below.
  self.initialProps = @{};

  BOOL didFinishLaunching = [super application:application didFinishLaunchingWithOptions:launchOptions];
  
  // Show the splash screen after React Native root view is initialized
  [RNSplashScreen show];

  return didFinishLaunching;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
