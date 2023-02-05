import React from 'react';
import {Image, Text, View} from 'react-native';
import {BaseGalleryComponent} from './components';

const file = [
  {
    name: '1',
  },
  {
    name: '2',
  },
  {
    name: '3',
  },
  {
    name: '4',
  },
];

export const BaseGallery = () => {
  return (
    <View>
      <BaseGalleryComponent
        file={file}
        onDoubleTap={item => console.log('Pressed onDoubleTap: ', item)}
        onPress={item => console.log('Pressed onPress: ', item)}
        DoubleTapElement={<DoubleTapElement />}
        showIndexCurrent={true}
        showPagination={true}>
        {item => (
          <View style={{width: 200, height: 200, backgroundColor: 'blue'}}>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      </BaseGalleryComponent>
    </View>
  );
};

const DoubleTapElement = () => (
  <Image
    source={require('./components/heart.png')}
    style={{width: 40, height: 40}}
  />
);
