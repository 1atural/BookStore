import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "./globalStyles";

const screenWidth = Dimensions.get('window').width; // Get the screen width

export const styles = StyleSheet.create({
    barLayout: {
      position: "absolute",
    },
    statusBarFlexBox: {
      justifyContent: "center",
      left: 0,
    },
    timePosition: {
      textAlign: "left",
      color: Color.colorGray_300,
      left: 0,
      position: "absolute",
    },
    oscarContainerLayout: {
      lineHeight: 22,
      fontSize: FontSize.android12BodyMediumSemibold_size,
    },
    home1Typo: {
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    navbarFlexBox: {
      width: screenWidth,
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      left: 0,
      right: 0,
    },
    selectedLayout: {
      width: 64,
      backgroundColor: Color.colorGray_300,
      borderRadius: Border.br_5xl,
      left: 13,
      top: 12,
      height: 32,
      position: "absolute",
    },
    iconLayout: {
      maxHeight: "100%",
      maxWidth: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    home1Layout: {
      height: 20,
      textAlign: "center",
      letterSpacing: 0,
      width: 90,
      color: Color.colorGray_300,
      lineHeight: 20,
      fontSize: FontSize.android12BodyMediumSemibold_size,
      left: 0,
      top: 48,
      position: "absolute",
    },
    cartTypo: {
      textAlign: "center",
      letterSpacing: 0,
      lineHeight: 20,
      fontSize: FontSize.android12BodyMediumSemibold_size,
    },
    headingLayout: {
      width: 320,
      position: "absolute",
    },
    groupLayout: {
      height: 214,
      position: "absolute",
    },
    frameParentLayout: {
      width: 161,
      position: "absolute",
    },
    containerClr: {
      color: Color.black,
      textAlign: "left",
    },
    pricingParentFlexBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    screenProductChild: {
      height: 120,
      left: 0,
      top: 48,
      width: 360,
      backgroundColor: Color.colorWhitesmoke_200,
    },
    time: {
      marginTop: -10,
      fontFamily: FontFamily.googleSansTextMedium,
      lineHeight: 20,
      textAlign: "left",
      fontSize: FontSize.android12BodyMediumSemibold_size,
      top: "50%",
    },
    baseSystemStatusIcons: {
      marginTop: -12,
      right: 0,
      width: 51,
      top: "50%",
      height: 24,
      position: "absolute",
    },
    content: {
      alignSelf: "stretch",
      height: 24,
    },
    statusBar: {
      paddingHorizontal: Padding.p_xl,
      paddingVertical: Padding.p_xs,
      alignItems: "center",
      top: 0,
      width: 360,
      position: "absolute",
    },
    navigationBarIcon: {
      top: 784,
      height: 16,
      left: 0,
    },
    oscarWildesOnly: {
      top: 40,
      display: "flex",
      fontFamily: FontFamily.openSansRegular,
      width: 321,
      textAlign: "left",
      color: Color.colorGray_300,
      left: 0,
      position: "absolute",
      alignItems: "center",
    },
    description: {
      left: 1,
      lineHeight: 32,
      fontWeight: "600",
      textAlign: "left",
      color: Color.colorGray_300,
      fontSize: FontSize.android12BodyMediumSemibold_size,
      top: 0,
      position: "absolute",
    },
    oscarWildesOnlyNovelIsThParent: {
      top: 403,
      height: 414,
      width: 321,
      left: 20,
      position: "absolute",
    },
    selected: {
      height: 32,
    },
    vectorIcon: {
      height: "20.88%",
      width: "20.44%",
      top: "24.63%",
      right: "39.56%",
      bottom: "54.5%",
      left: "40%",
    },
    home1: {
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    home: {
      height: 80,
      width: 90,
      overflow: "hidden",
    },
    selected1: {
      display: "none",
      height: 32,
    },
    categories: {
      fontFamily: FontFamily.openSansRegular,
    },
    categoryIcon: {
      height: "30%",
      width: "26.67%",
      top: "20%",
      right: "36.67%",
      bottom: "50%",
      left: "36.67%",
    },
    cart1: {
      width: 90,
      fontFamily: FontFamily.openSansRegular,
      color: Color.colorGray_300,
      textAlign: "center",
      letterSpacing: 0,
      left: 0,
      top: 48,
      position: "absolute",
    },
    navbar: {
      top: 704,
      backgroundColor: Color.colorGainsboro_100,
      paddingBottom: Padding.p_base,
      position: "absolute",
    },
    arrowBackIcon: {
      width: 24,
      height: 24,
      overflow: "hidden",
    },
    classics: {
      lineHeight: 32,
      fontWeight: "600",
      textAlign: "left",
      color: Color.colorGray_300,
      fontSize: FontSize.android12BodyMediumSemibold_size,
    },
    arrowBackParent: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      left: 0,
      top: 0,
    },
    heading: {
      top: 64,
      height: 32,
      left: 20,
    },
    thePictureOf: {
      top: 124,
      fontSize: FontSize.size_5xl,
      lineHeight: 32,
      fontWeight: "600",
      textAlign: "left",
      color: Color.colorGray_300,
      left: 20,
      position: "absolute",
    },
    groupChild: {
      width: 138,
      top: 0,
      left: 0,
    },
    author: {
      fontFamily: FontFamily.openSansRegular,
    },
    authorOscarContainer: {
      lineHeight: 22,
      fontSize: FontSize.android12BodyMediumSemibold_size,
    },
    categoryClassicsContainer: {
      marginTop: 8,
      lineHeight: 22,
      fontSize: FontSize.android12BodyMediumSemibold_size,
    },
    text2: {
      fontSize: FontSize.size_xl,
      lineHeight: 32,
      marginLeft: 10,
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    pricingParent: {
      marginTop: 8,
    },
    authorOscarWildeParent: {
      top: 0,
      left: 0,
      position: "absolute",
    },
    addToCart: {
      color: Color.colorWhitesmoke_200,
      fontFamily: FontFamily.openSansSemiBold,
      fontWeight: "600",
    },
    addToCartWrapper: {
      top: 138,
      borderRadius: Border.br_21xl,
      backgroundColor: Color.colorGray_400,
      height: 40,
      paddingHorizontal: Padding.p_5xs,
      paddingVertical: Padding.p_7xs,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      left: 0,
    },
    frameParent: {
      top: 18,
      left: 160,
      height: 178,
    },
    groupParent: {
      top: 172,
      left: 19,
      width: 321,
    },
    screenProduct: {
      borderRadius: Border.br_base,
      borderStyle: "solid",
      borderColor: Color.black,
      borderWidth: 12,
      flex: 1,
      width: "100%",
      height: 824,
      overflow: "hidden",
      backgroundColor: Color.colorWhitesmoke_200,
    },
  });