import { setupReactNative, styled } from "@tamagui/core";
import { TextInput } from "react-native";
setupReactNative({ TextInput });
const MyTextInput = styled(TextInput, {
  borderBottomWidth: 1,
  borderBottomColor: "#DADDE7",
  placeholderTextColor: "#58595B",
  paddingBottom: 20
});
const Input = ({ placeholder }) => {
  return <MyTextInput placeholder={placeholder} />;
};
var Input_default = Input;
export {
  Input_default as default
};
//# sourceMappingURL=index.js.map
