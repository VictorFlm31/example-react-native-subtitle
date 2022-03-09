import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import VideoSubtitle from '../../components/VideoSubtitle';

const Home = ({navigation}) => {
  const [videoTime, setVideoTime] = useState(0);

  const [subtitle, setSubtitle] = useState(
    require('../../assets/subtitle.json'),
  );

  const onProgress = data => {
    setVideoTime(data.currentTime);
  };

  return (
    <View style={styles.container}>
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        navigator={navigation}
        onProgress={onProgress}
      />
      <VideoSubtitle subtitle={subtitle} videoTime={videoTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
