// import {listNavigation} from '@constants';
import {ILink, listNavigation} from '../../constant';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <FlatList
        data={listNavigation}
        renderItem={({item, index}) => (
          <RenderItem item={item} index={index} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const RenderItem = ({
  item,
  index,
  navigation,
}: {
  item: ILink;
  index: number;
  navigation: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.route)}
      style={{
        backgroundColor: index % 2 ? 'red' : 'green',
        padding: 10,
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );
};
