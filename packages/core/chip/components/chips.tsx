import { FC, useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "../styles/chip.styles";
import { Chip } from "./chip";
import { Template } from "../enums/chip.enums";
import { ChipsProps } from "../props/chip.props";
import { DefaultText } from "./text";

export const Chips: FC<ChipsProps> = (props) => {
  const {
    testID,
    options,
    value: valueImpl = [],
    textKey = "text",
    valueKey = "value",
    multiSelect = true,
    label,
    chipContentStyle,
    chipInnerWrapper,
    chipWrapperStyle,
    baseTextColorStyle,
    template = Template.Outline,
    onChange,
    customTemplate,
    horizontalScroll = false,
    chipContainerStyle,
  } = props;

  const [valueMap, setValueMap] = useState(
    new Map<string, Record<string, unknown>>()
  );

  const [, setValue] = useState<Array<Record<string, unknown>>>([]);

  useEffect(() => {
    if (valueImpl.length) {
      setValue(valueImpl);
      const selectedValueMap: Map<string, Record<string, unknown>> = new Map<
        string,
        Record<string, unknown>
      >();
      valueImpl.forEach((option) => {
        selectedValueMap.set(option[valueKey], option);
      });
      setValueMap(selectedValueMap);
    } else {
      setValue([]);
      setValueMap(new Map<string, Record<string, unknown>>());
    }
  }, [valueImpl]);

  const onSelect = useCallback(
    (option: Record<string, unknown>) => {
      setValueMap((prevSelectedOptionsMap) => {
        if (!multiSelect) {
          prevSelectedOptionsMap.clear();
        }
        prevSelectedOptionsMap.set(option[valueKey], option);
        setValue((selectedOptions) => {
          let prevSelectedOptions = selectedOptions;
          if (multiSelect) {
            prevSelectedOptions.push(option);
          } else {
            prevSelectedOptions = [option];
          }
          if (onChange) {
            onChange(prevSelectedOptions, option, true);
          }
          return prevSelectedOptions;
        });
        return prevSelectedOptionsMap;
      });
    },
    [multiSelect, onChange]
  );

  const onDeselect = useCallback(
    (option: Record<string, unknown>) => {
      setValueMap((prevSelectedOptionsMap) => {
        prevSelectedOptionsMap.delete(option[valueKey]);
        setValue((selectedOptions) => {
          let prevSelectedOptions = selectedOptions;
          if (multiSelect) {
            const index = prevSelectedOptions.findIndex(
              (item) => item[valueKey] === option[valueKey]
            );
            if (index > -1) {
              prevSelectedOptions.splice(index, 1);
            }
          } else {
            prevSelectedOptions = [option];
          }
          if (onChange) {
            onChange(prevSelectedOptions, option, false);
          }
          return prevSelectedOptions;
        });
        return prevSelectedOptionsMap;
      });
    },
    [multiSelect, onChange]
  );

  return (
    <View style={styles.chipContainer} testID={testID}>
      {!!label && (
        <DefaultText style={styles.labelTextStyle}>{label}</DefaultText>
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={horizontalScroll}
        style={styles.hasMaxWidth}
      >
        <View
          style={[
            styles.chipWrapper,
            horizontalScroll ? styles.hasHorizonatalScroll : undefined,
            chipWrapperStyle,
          ]}
        >
          {!!options?.length &&
            options.map((option: Record<string, unknown>, index, array) => {
              const selected = valueMap.has(option?.[valueKey]);
              return (
                <Chip
                  key={option[textKey]}
                  label={option?.[textKey]}
                  option={option}
                  selected={selected}
                  multiSelect={multiSelect}
                  template={template}
                  chipContentStyle={chipContentStyle}
                  chipInnerWrapper={chipInnerWrapper}
                  chipWrapperStyle={chipWrapperStyle}
                  baseTextColorStyle={baseTextColorStyle}
                  customTemplate={customTemplate}
                  onSelect={onSelect}
                  onDeselect={onDeselect}
                  chipContainerStyle={chipContainerStyle}
                />
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

Chips.displayName = "Chips";
