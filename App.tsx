import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Chips } from "./packages/core/chip/components/chips";
import { Template } from "./packages/core/chip/enums/chip.enums";
import { useCallback } from "react";

export default function App() {
  const onChange = useCallback((selectedOptions) => {
    console.log("selectedOptions:", selectedOptions);
  }, []);

  return (
    <View style={styles.container}>
      <Chips
        options={[
          { value: "1", text: "Option 1" },
          { value: "2", text: "Option 2" },
          { value: "3", text: "Option 3" },
        ]}
        value={[
          { value: "1", text: "Option 1" },
          { value: "2", text: "Option 2" },
        ]}
        onChange={onChange}
        template={Template.OutlineSolidSelection}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
