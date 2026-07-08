import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
  } from "react-native";
  
  import SearchBar from "../../components/SearchBar";
  import PromoBanner from "../../components/PromoBanner";
  import CategoryButton from "../../components/CategoryTabs";
  import PizzaCard from "../../components/PizzaCard";
  
 // import pizzaData from "../../data/pizzaData";
  import pizzaData from "../../data/pizzaData";

  export default function Home() {
    return (
      <View style={styles.container}>
  
        {/* HEADER */}
  
        <View style={styles.header}>
  
          <Text style={styles.locationLabel}>
            Location
          </Text>
  
          <Text style={styles.location}>
            Accra Mallam Junction ▼
          </Text>
  
          <View style={{ marginTop: 20 }}>
            <SearchBar />
          </View>
  
        </View>
  
        {/* CONTENT */}
  
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
  
          <View style={styles.content}>
  
            <PromoBanner />
  
            {/* Categories */}
  
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categories}
            >
              <CategoryButton
                title="All Pizza"
                active
              />
  
              <CategoryButton
                title="Pepperoni"
              />
  
              <CategoryButton
                title="Margherita"
              />
  
              <CategoryButton
                title="Cheese Pizza"
              />
            </ScrollView>
  
            {/* Coffee Grid */}
  
            <FlatList
              data={pizzaData}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={{
                justifyContent:
                  "space-between",
              }}
              keyExtractor={(item) =>
                item.id.toString()
              }
              renderItem={({ item }) => (
                <PizzaCard item={item} />
              )}
            />
          </View>
  
        </ScrollView>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F9F9F9",
    },
  
    header: {
      backgroundColor: "#131313",
      paddingTop: 60,
      paddingHorizontal: 20,
      paddingBottom: 30,
    },
  
    locationLabel: {
      color: "#B0B0B0",
      fontSize: 12,
    },
  
    location: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
      marginTop: 5,
    },
  
    content: {
      padding: 20,
      marginTop: -15,
    },
  
    categories: {
      marginTop: 20,
      marginBottom: 20,
    },
  });