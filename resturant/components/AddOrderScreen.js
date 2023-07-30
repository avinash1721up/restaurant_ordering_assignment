import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddOrderScreen = ({ navigation }) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [tableId, setTableId] = useState('');
  const [dishes, setDishes] = useState('');
  const [dishesList, setDishesList] = useState([]);

  const handleAddDish = () => {
    setDishesList([...dishesList, dishes]);
    setDishes('');
  };

  const handleAddOrder = () => {
    // Assuming the 'id' is unique and incrementing. In a real app, you may use a more robust approach.
    const newOrder = {
      id: Date.now(),
      customerName,
      phone,
      tableId,
      dishes: dishesList,
      completed: false,
    };
    // You can send the newOrder data back to the OrderListScreen using navigation or any other state management solution.
    // For this example, we will just log the new order data.
    console.log('New Order:', newOrder);
    navigation.goBack(); // Navigate back to the OrderListScreen after adding the order.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Customer Name</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={setCustomerName}
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />
      <Text style={styles.label}>Table ID</Text>
      <TextInput
        style={styles.input}
        value={tableId}
        onChangeText={setTableId}
      />
      <Text style={styles.label}>Dishes</Text>
      <TextInput
        style={styles.input}
        value={dishes}
        onChangeText={setDishes}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddDish}>
        <Text>Add order</Text>
      </TouchableOpacity>
      {dishesList.map((dish, index) => (
        <Text key={index} style={styles.dishItem}>
          {dish}
        </Text>
      ))}
      {/* <TouchableOpacity style={styles.addButton} onPress={handleAddOrder}>
        <Text>Add  Order</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
  },
  dishItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default AddOrderScreen;
