import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { TouchableHighlight, View, ViewStyle } from "react-native";
import { styles } from "../styles/chip.styles";
import { Template } from "../enums/chip.enums";
import { ChipProps } from "../props/chip.props";
import { DefaultText } from "./text";

export const Chip: FC<ChipProps> = (props) => {
  const {
    testID,
    option,
    label,
    selected,
    multiSelect,
    template = Template.Outline,
    chipContentStyle,
    chipInnerWrapper,
    baseTextColorStyle,
    onSelect,
    onDeselect,
    customTemplate,
    chipContainerStyle,
  } = props;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const base: {
    style: ViewStyle;
    selectedStyle: ViewStyle;
    selectedTextStyle: ViewStyle;
  } = useMemo(() => {
    let style = styles.outlineStyle;
    let selectedStyle = styles.outlineSelectedStyle;
    let selectedTextStyle = styles.baseTextColorSelected;
    if (template === Template.Primary) {
      style = styles.primaryStyle;
      selectedStyle = styles.primarySelectedStyle;
      selectedTextStyle = styles.primarySelectedTextStyle;
    } else if (template === Template.Secondary) {
      style = styles.clearStyle;
      selectedStyle = styles.clearSelectedStyle;
    } else if (template === Template.Clear) {
      style = styles.clearStyle;
      selectedStyle = styles.primarySelectedStyle;
      selectedTextStyle = styles.primarySelectedTextStyle;
    } else if (template === Template.OutlineSolidSelection) {
      style = styles.outlineStyle;
      selectedStyle = styles.primarySelectedStyle;
      selectedTextStyle = styles.primarySelectedTextStyle;
    }
    return {
      style: style as ViewStyle,
      selectedStyle: selectedStyle as ViewStyle,
      selectedTextStyle: selectedTextStyle as ViewStyle,
    };
  }, [template]);

  const handleChipClick = useCallback(() => {
    setIsSelected((prevSelected: boolean | undefined) => {
      if (!prevSelected) {
        onSelect(option);
      } else if (multiSelect) {
        onDeselect(option);
      } else {
        return prevSelected;
      }
      const newSelected = !prevSelected;
      return newSelected;
    });
  }, [onSelect, onDeselect, option, multiSelect]);

  return (
    <View style={[styles.chipContainer, chipContainerStyle]} testID={testID}>
      <TouchableHighlight
        style={[styles.chip, chipInnerWrapper]}
        onPress={handleChipClick}
      >
        <View>
          {!customTemplate && (
            <View
              style={[
                styles.chipContent,
                chipContentStyle,
                isSelected ? base.selectedStyle : base.style,
              ]}
            >
              <DefaultText
                style={[
                  baseTextColorStyle,
                  isSelected ? base.selectedTextStyle : styles.baseTextColor,
                ]}
              >
                {label}
              </DefaultText>
            </View>
          )}
          {!!customTemplate && customTemplate(option, isSelected)}
        </View>
      </TouchableHighlight>
    </View>
  );
};

Chip.displayName = "Chip";
