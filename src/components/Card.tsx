import React from "react";
import { Text, Image, Linking, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

interface CardProps {
  nombre: string;
  departamento: string;
  ciudad: string;
  direccion: string;
}

function Card({ nombre, departamento, ciudad, direccion }: CardProps) {
  const navigateToLink = () => {
    Linking.openURL("https://crepesywaffles.com/");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 10,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={navigateToLink}
        style={{
          height: 300,
          width: 250,
          display: "flex",
          backgroundColor: "#f5cfcb",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.textCardTitle}>{nombre}</Text>
        <Image
          source={{
            uri: "https://i.ibb.co/GkysxWH/crepes.jpg",
          }}
          style={{ width: 250, height: 200 }}
        />

        <Text style={styles.textCard}>{departamento}</Text>
        <Text style={styles.textCard}>{direccion}</Text>
        <Text style={styles.textCard}>{ciudad}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
