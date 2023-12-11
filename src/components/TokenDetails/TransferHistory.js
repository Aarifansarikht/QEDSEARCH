import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {LOGIN_IMAGE} from '../../utils/images';
import {color} from '../../utils/colors';
function TransferHistory({assetsdata}) {
  const tableHead = ['From', 'To', 'Transfer Date & Time'];

  return (
    <View style={styles.container}>
      {assetsdata.transferHistory.length > 0 ? (
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.tableBorder}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows
              data={assetsdata.transferHistory}
              textStyle={styles.rowText}
            />
          </Table>
        </View>
      ) : (
        <View style={styles.noDetailsContainer}>
          <Text style={styles.noDetailsText}>No Details Found</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  tableContainer: {
    flex: 1,
    padding: 16,
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#C1C0B9',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  rowText: {
    textAlign: 'center',
  },
  noDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDetailsText: {
    color: color.primaryColor,
    backgroundColor: '#F1F1F9',
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    fontWeight: '700',
  },
});
export default TransferHistory;
