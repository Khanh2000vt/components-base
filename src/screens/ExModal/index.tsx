import {ModalBox} from '@components';
import React, {useRef} from 'react';
import {Button, Dimensions, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export const ExModal = () => {
  const modalRef = useRef<any>();
  return (
    <View>
      <Button title="Show modal" onPress={() => modalRef?.current?.open()} />
      <ModalBox
        modalSize={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT / 2,
        }}
        ref={modalRef}
        position="bottom">
        <SafeAreaView edges={['top']}>
          <View>
            <Text>Day la modal</Text>
          </View>
        </SafeAreaView>
      </ModalBox>
    </View>
  );
};
