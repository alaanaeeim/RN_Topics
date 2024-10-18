import React, { useEffect, useState } from "react";
import {
  Animated,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles.ts";

const Progress = ({ step, steps, height }: any) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text>
        {step} / {steps}
      </Text>
      <View
        onLayout={(e: any) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={styles.outerView}
      >
        <Animated.View
          style={[
            styles.innerView,
            { transform: [{ translateX: animatedValue }] },
          ]}
        />
      </View>
    </>
  );
};

const AnimatedProgress = () => {
  const [index, setIndex] = useState(0);
  const [dynamicIndex, setDynamicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (prevIndex === 10) {
          clearInterval(interval);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Array.from({ length: 10 }, () => {})}
          keyExtractor={(item: any, index: any) => index.toString()}
          renderItem={({ item, index }: any) => {
            return (
              <TouchableOpacity
                onPress={() => setDynamicIndex(index + 1)}
                style={styles.step}
              >
                <Text style={styles.stepIndex}>{index + 1}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <Progress step={dynamicIndex} steps={10} height={20} />

      <Text style={styles.progress}>Animated Progress</Text>
      <Progress step={1} steps={10} height={20} />
      <Progress step={2} steps={10} height={20} />
      <Progress step={3} steps={10} height={20} />
      <Progress step={4} steps={10} height={20} />
      <Progress step={5} steps={10} height={20} />
      <Progress step={6} steps={10} height={20} />
      <Progress step={7} steps={10} height={20} />
      <Progress step={8} steps={10} height={20} />
      <Progress step={9} steps={10} height={20} />
      <Progress step={10} steps={10} height={20} />
      <Progress step={index} steps={10} height={20} />
    </View>
  );
};

export default AnimatedProgress;
