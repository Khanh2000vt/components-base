import {ReactElement} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

interface IGalleryStyle {
  galleryStyle?: StyleProp<ViewStyle>;
  pageStyle?: StyleProp<ViewStyle>;
  doubleTapStyle?: StyleProp<ViewStyle>;
  indexViewStyle?: StyleProp<ViewStyle>;
}

interface IDoubleTap {
  onDoubleTap?: (item: any) => void;
  DoubleTapElement?: React.ReactNode;
}

interface IPagination {
  paginationStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  pageWidth?: number;
}

export interface IPaginationProps extends IPagination {
  scrollX: Animated.Value;
  size: number;
}

export interface IGalleryProps extends IGalleryStyle, IPagination, IDoubleTap {
  onPress?: (item: any) => void;
  file: any[];
  children(data: any): ReactElement;
  showIndexCurrent?: boolean;
  showPagination?: boolean;
  ViewIndexElement?(indexCurrent: number, length: number): ReactElement;
}
