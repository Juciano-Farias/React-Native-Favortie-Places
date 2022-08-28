import React, { useState } from "react";
import { ScrollView, Text, TextInput, View, StyleSheet } from "react-native";

import { Colors } from "../../constants/colors";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredTitle) {
    setEnteredTitle(enteredTitle);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChange={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
