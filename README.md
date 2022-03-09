# example-react-native-subtitle

A React Native example of video player with subtitles.

## Libraries

This code uses parts of the  [awesome-react-native-video-controls](https://github.com/pegahtech/react-native-video-controls) library, as it hasn't been updated for a long time, the idea  was to remove everything that was not needed from the library, keeping only the subtitle functionality.

In this example the [react-native-video-controls](https://github.com/itsnubix/react-native-video-controls) library was used for the video player, but using only the [react-native-video](https://github.com/react-native-video/react-native-video) is also possible.

## Files

You can find the example subtitle file "subtitles.json" in the "assets" folder.
The subtitle logic inside the "VideoSubtitle.js" file. 
It is also important to note how the VideoSubtitle component is called in the Home screen.