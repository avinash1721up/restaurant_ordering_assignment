import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const OrderListScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', phone: '123-456-7890', tableId: 'Table 1', dishes: ['Pizza', 'Coke'], completed: false },
    { id: 2, customerName: 'Jane Smith', phone: '987-654-3210', tableId: 'Table 2', dishes: ['Burger', 'Fries'], completed: true },
    { id: 3, customerName: 'Avinash Upadhyay', phone: '9653084997', tableId: 'Table 3', dishes: ['paneer', 'Roll'], completed: false },
  ]);

  const markAsComplete = (id) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, completed: !order.completed };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const deleteOrder = (id) => {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  };

  const renderItem = ({ item }) => (
    <View style={[styles.orderItem, item.completed && styles.completedOrderItem]}>
      <Text style={styles.orderText}>{item.customerName}</Text>
      <Text style={styles.orderText}>{item.phone}</Text>
      <Text style={styles.orderText}>{item.tableId}</Text>
      <Text style={styles.orderText}>{item.dishes.join(', ')}</Text>
      {!item.completed && (
        <TouchableOpacity onPress={() => markAsComplete(item.id)}>
          <Checkbox status={item.completed ? 'checked' : 'unchecked'} />
        </TouchableOpacity>
      )}
      {!item.completed && (
        <TouchableOpacity onPress={() => deleteOrder(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.orderList}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddOrder')}
      >
        <Text style={styles.addButtonText}>Add Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  orderList: {
    paddingBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  completedOrderItem: {
    backgroundColor: '#c0f0c0',
  },
  orderText: {
    flex: 1,
  },
  deleteButton: {
    color: 'red',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderListScreen;
