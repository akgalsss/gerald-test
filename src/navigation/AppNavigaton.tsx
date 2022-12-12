import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
} from 'react-native';
import type { Node } from 'react-native';
import ThemeColors from '../lib/ThemeColors';
import {
  useNavigationBuilder,
  TabRouter,
} from '@react-navigation/native';
import MainMenu from '../components/MainMenu';

function AppNavigaton({
  initialRouteName,
  children,
  screenOptions,
}): Node {
  const [animation] = useState(new Animated.Value(0));
  const [isMenuOpen, setMenuOpen] = useState();
  const layoutMoveY = animation.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 40]
  });

  const spin = animation.interpolate({
    inputRange: [0, 10],
    outputRange: ['0deg', '-10deg']
  });

  const moveX = animation.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 250]
  });

  const moveY = animation.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 65]
  });

  const radius = animation.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 35]
  });

  useEffect(() => {
    const toValue = isMenuOpen ? 10 : 0;
    Animated.timing(
      animation,
      {
        toValue,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start()
  }, [isMenuOpen, animation]);
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  const items = state.routes.reduce((acc: any[], route) => {
    acc.push({
      title: route.params?.title || route.name,
      id: route.name,
    });
    return acc;
  }, []);

  return (
    <NavigationContent>
      <View style={styles.appContainer}>
        <Animated.View
          style={[
            {
              backgroundColor: ThemeColors.menuBackground,
              justifyContent: 'center',
              transform: [
                { translateY: layoutMoveY },
              ],
            },
            { borderTopLeftRadius: radius },
          ]}
        >
          {/* Main menu section */}
          <View style={styles.mainMenuContainer}>
            <MainMenu
              onClose={() => setMenuOpen(false)}
              items={items}
              navigation={navigation}
              selectedIdx={state.index}
            />
          </View>

          {/* Page layout */}
          <Animated.View
            style={[
              {
                backgroundColor: ThemeColors.primaryBackground,
                justifyContent: 'center',
                transform: [
                  { rotate: spin },
                  { translateX: moveX },
                  { translateY: moveY },
                ],
              },
              { borderTopLeftRadius: radius },
            ]}
          >
            <SafeAreaView
              style={{ height: '100%' }}
            >
              <View style={styles.pageWrapper}>
                <TouchableOpacity onPress={() => setMenuOpen(true)}>
                  <Text style={styles.pageTopNav}>
                    <Image
                      style={{
                        width: 22,
                        height: 26,
                      }}
                      source={{ uri: 'data:image/png;base64,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' }} />
                    {' ' + state.routes[state.index].params?.title}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.pageContentWrapper}>
                {state.routes.map((route, i) => {
                  return (
                    <View
                      key={route.key}
                      style={[
                        { display: i === state.index ? 'flex' : 'none' },
                      ]}
                    >
                      {descriptors[route.key].render()}
                    </View>
                  );
                })}
              </View>
            </SafeAreaView>
          </Animated.View >
        </Animated.View>
      </View>
    </NavigationContent>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: ThemeColors.appBackground,
  },
  mainMenuContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  pageTopNav: {
    fontSize: 26,
    letterSpacing: 7,
    color: '#999',
    textTransform: 'uppercase',
  },
  pageContentWrapper: {
    paddingHorizontal: 30,
  },
  pageWrapper: {
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },

});

export default AppNavigaton;