import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import Categories from "../../components/Categories";
import Carausel from "../../components/Carausel";
import { SearchBar } from "react-native-screens";
import Services from "../../components/Services";
import Deals from "../../components/Deals";
import Brands from "../../components/Brands";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Carausel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
