import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";

const MainScreen = () => {
  const [value, setValue] = useState("0");
  const [bracketOpen, setBracketOpen] = useState(false);
  const handlePress = (val) => {
    if (val == "AC") {
      setValue("0");
    } else if (val == "=") {
      try {
        if (
          (value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length
        ) {
          if (isNaN(value.slice(-1))) {
          } else {
            setValue(`${eval(value.replace("()", "(0)"))}`);
          }
        } else {
          console.log("unequal brackets");
        }
      } catch (e) {
        setValue("Format Error");
      }
    } else if (val == "DEL") {
      if (value == "0") {
        setValue("0");
      } else {
        setValue(value.slice(0, -1));
      }
    } else if (val == "()") {
      if (value == "0") {
        setValue("(");
        setBracketOpen(true);
      } else if (isNaN(value.slice(-1))) {
        setValue(value + "(");
        setBracketOpen(true);
      } else {
        if (bracketOpen) {
          setValue(value + ")");
          setBracketOpen(false);
        } else {
          setValue(value + "(");
          setBracketOpen(true);
        }
      }
    } else {
      if (value == "0") {
        if (
          val == "+" ||
          val == "-" ||
          val == "*" ||
          val == "/" ||
          val == "%" ||
          val == "."
        ) {
          setValue(value + val);
        }
        setValue(val);
      } else if (isNaN(val)) {
        const prevValue = value.slice(-1);
        if (isNaN(prevValue)) {
          setValue(value.slice(0, -1) + val);
        } else {
          setValue(value + val);
        }
      } else {
        setValue(value + val);
      }
    }
  };
  return (
    <View style={styles.mainScreen}>
      <ScrollView
        ref={(ref) => {
          this.ScrollView = ref;
        }}
        style={styles.mainDisplay}
        onContentSizeChange={() =>
          this.ScrollView.scrollToEnd({ animated: true })
        }
      >
        <Text style={styles.displayText}>{value}</Text>
      </ScrollView>
      <View style={styles.keypad}>
        {/* First row */}
        <View style={styles.row}>
          <Pressable onPress={() => handlePress("AC")}>
            <View style={[styles.btn2_outer, { backgroundColor: "red" }]}>
              <Text
                style={[
                  styles.bg2_text,
                  { color: "white", fontWeight: "bold" },
                ]}
              >
                AC
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("()")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>()</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("%")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>%</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("/")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>/</Text>
            </View>
          </Pressable>
        </View>
        {/* Second Row */}
        <View style={styles.row}>
          <Pressable onPress={() => handlePress("7")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>7</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("8")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>8</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("9")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>9</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("*")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>*</Text>
            </View>
          </Pressable>
        </View>
        {/* Third Row */}
        <View style={styles.row}>
          <Pressable onPress={() => handlePress("4")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>4</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("5")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>5</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("6")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>6</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>-</Text>
            </View>
          </Pressable>
        </View>
        {/* Fourth Row */}
        <View style={styles.row}>
          <Pressable onPress={() => handlePress("1")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>1</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("2")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>2</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("3")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>3</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("+")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>+</Text>
            </View>
          </Pressable>
        </View>
        {/* Fifth Row */}
        <View style={styles.row}>
          <Pressable onPress={() => handlePress("0")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>0</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress(".")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>.</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("DEL")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>DEL</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => handlePress("=")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_text}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  mainDisplay: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,

    marginTop: 60,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  displayText: {
    fontSize: 40,
    textAlign: "right",
  },
  keypad: {
    width: "100%",
    height: "70%",
    display: "flex",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  btn2_outer: {
    width: 90,
    height: 90,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  bg2_text: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default MainScreen;
