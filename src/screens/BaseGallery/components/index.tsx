/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useCallback, useMemo, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Pagination} from './Pagination';
import {styles} from './styles';
import {IGalleryProps} from './types';
const deviceWidth = Dimensions.get('window').width;
export const BaseGalleryComponent = (props: IGalleryProps) => {
  const {
    file = [],
    onDoubleTap = () => {},
    onPress = () => {},
    children,
    galleryStyle,
    pageStyle,
    paginationStyle,
    doubleTapStyle,
    indexViewStyle,
    dotStyle,
    DoubleTapElement,
    showIndexCurrent = true,
    showPagination = true,
    pageWidth = deviceWidth,
  } = props;
  const scaleAnimation = useMemo(() => new Animated.Value(0), []);
  const [page, setPage] = React.useState(1);
  const scrollX = new Animated.Value(0);
  const refNumTap = useRef(0);
  const timer: any = useRef(null);

  const startScaleView = useCallback(() => {
    Animated.sequence([
      Animated.spring(scaleAnimation, {
        toValue: 1,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scaleAnimation]);

  const onScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageNumber = Math.min(
      Math.max(Math.round(e.nativeEvent.contentOffset.x / pageWidth) + 1, 0),
      file?.length
    );
    setPage(pageNumber);
  };

  const onDoublePressTap = (item: any) => {
    refNumTap.current += 1;
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (refNumTap.current >= 2) {
      onDoubleTap(item);
      startScaleView();
      refNumTap.current = 0;
    }

    timer.current = setTimeout(() => {
      if (refNumTap.current === 1) {
        onPress(item);
        refNumTap.current = 0;
      }
    }, 300);
  };

  const onPressItem = (item: any) => {
    if (!onDoubleTap) {
      onPress(item);
    } else {
      onDoublePressTap(item);
    }
  };

  return (
    <View>
      <FlatList
        onMomentumScrollEnd={onScrollEnd}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false}
        )}
        style={[styles.scroll, galleryStyle]}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={file}
        scrollEnabled={file?.length > 1}
        pagingEnabled
        nestedScrollEnabled
        renderItem={({item}) => {
          return (
            <View style={[styles.button, pageStyle]}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                activeOpacity={1}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {children(item)}
                  {!!DoubleTapElement && (
                    <Animated.View
                      style={[
                        {
                          transform: [
                            {
                              scale: scaleAnimation,
                            },
                          ],
                          width: 50,
                          aspectRatio: 1,
                          position: 'absolute',
                        },
                        doubleTapStyle,
                      ]}>
                      {DoubleTapElement}
                    </Animated.View>
                  )}
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
      {file?.length > 1 && showIndexCurrent && (
        <View style={[styles.indexImageContainer, indexViewStyle]}>
          {<Text>{`${page} of ${file?.length}`}</Text>}
        </View>
      )}
      {file?.length > 1 && showPagination && (
        <View style={{position: 'absolute', alignSelf: 'center', bottom: 16}}>
          <Pagination
            size={file?.length}
            scrollX={scrollX}
            pageWidth={pageWidth}
            paginationStyle={paginationStyle}
            dotStyle={dotStyle}
          />
        </View>
      )}
    </View>
  );
};
