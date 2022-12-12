import React from 'react';
import type { Node } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ThemeColors from '../lib/ThemeColors';

const MenuItem = ({ title, id, selected, onTap }): Node => (
  <TouchableOpacity
    key={id}
    onPress={onTap}
  >
    <View style={{
      ...styles.menuItem,
      ...(selected ? { backgroundColor: 'rgba(239, 103, 103, 0.3)' } : undefined)
    }}>
      <Text style={{
        fontSize: 24,
        color: selected ? ThemeColors.menuItemColor : '#FFF',
      }}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const MainMenu = ({ onClose, items, navigation, selectedIdx }) => {
  return <View
    style={styles.menuWrapper}>
    <SafeAreaView>
      <Text style={styles.logo}>Beka</Text>
      {
        items.map(
          (item: any, idx) => <MenuItem
            selected={idx === selectedIdx}
            key={item.id}
            {...item}
            onTap={() => {
              navigation.navigate(item.id);
              onClose();
            }}

          />
        )
      }
    </SafeAreaView>
  </View >
}

const styles = StyleSheet.create({
  logo: {
    textAlign: 'center',
    width: 180,
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 50
  },
  menuWrapper: {
    paddingTop: 100,
    paddingLeft: 20
  },
  menuItem: {
    paddingLeft: 30,
    paddingVertical: 15,
    width: 180,
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default MainMenu;