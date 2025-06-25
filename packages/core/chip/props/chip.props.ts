import {  TextProps, TextStyle, ViewStyle } from 'react-native';
import { Template } from '../enums/chip.enums';

export interface DefaultTextProps extends TextProps {
    testID?: string;
    style?: TextStyle;
}
 
export interface  ChipProps {
    testID?: string;
    option: Record<string, unknown>;
    label?: string | number | boolean;
    selected: boolean;
    multiSelect: boolean;
    template?: Template;
    chipContentStyle?: ViewStyle;
    chipInnerWrapper?: ViewStyle;
    baseTextColorStyle?: TextStyle;
    onSelect: (option: Record<string, unknown>) => void;
    onDeselect: (option: Record<string, unknown>) => void;
    customTemplate?: (option: Record<string, unknown>, selected: boolean) => React.ReactNode;
    chipContainerStyle?: ViewStyle; 
}

export interface  ChipsProps   {
    testID?: string;
    options: Record<string, unknown>[];
    value?: Record<string, unknown>[];
    multiSelect?: boolean;
    valueKey?: string;
    textKey?: string;
    chipContentStyle?: ViewStyle;
    baseTextColorStyle?: TextStyle;
    chipInnerWrapper?: ViewStyle;
    chipWrapperStyle?: ViewStyle;
    label?: string;
    template?: Template;
    onChange?: (
        selectedOptions: Record<string, unknown>[],
        option?: Record<string, unknown>,
        isSelected?: boolean,
    ) => void;
    customTemplate?: (option: Record<string, unknown>, isSelected: boolean) => React.ReactNode;
    horizontalScroll?: boolean;
    chipContainerStyle?: ViewStyle; 
}
