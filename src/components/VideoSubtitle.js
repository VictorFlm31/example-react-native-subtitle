import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const VideoSubtitle = ({
  subtitle,
  videoTime,
  subtitleContainerStyle,
  subtitleStyle,
}) => {
  const [stateSubtitleIndex, setStateSubtitleIndex] = useState(0);
  const [currentTimeInDeciSeconds, setCurrentTimeInDeciSeconds] = useState(0);

  useEffect(() => {
    setCurrentTimeInDeciSeconds(Math.floor(videoTime * 10) / 10.0);
  }, [videoTime]);

  const parseTimeStringToDeciSecond = str => {
    let splitByComma = str.split(',');
    let result = 0.0;
    result = Math.round(parseInt(splitByComma[1]) / 100.0) / 10.0;
    let splitByColon = splitByComma[0].split(':');
    for (let i = 0; i < 3; i++) {
      result += splitByColon[i] * Math.pow(60, 2 - i);
    }
    return (Math.floor(result * 10) / 10.0).toFixed(1);
  };
  const showSubtitle = () => {
    if (!subtitle) {
      return null;
    }
    let subtitleIndex = stateSubtitleIndex;
    let subtitles = subtitle;
    if (!subtitles[subtitleIndex]) {
      return null;
    }
    let currentTime = currentTimeInDeciSeconds;
    let startTime = parseTimeStringToDeciSecond(
      subtitles[subtitleIndex].startTime,
    );
    let endTime = parseTimeStringToDeciSecond(subtitles[subtitleIndex].endTime);
    if (currentTime > endTime) {
      setStateSubtitleIndex(subtitleIndex + 1);
    }
    if (currentTime < endTime && currentTime > startTime) {
      return subtitles[subtitleIndex].text;
    } else {
      return null;
    }
  };

  return (
    <View style={[styles.subtitleContainer, subtitleContainerStyle]}>
      <Text style={[styles.subtitle, subtitleStyle]}>{showSubtitle()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    position: 'absolute',
    top: 200,
    left: 0,
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    paddingRight: 10,
    paddingLeft: 10,
  },
});

export default VideoSubtitle;
