import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {LOGIN_IMAGE} from '../../utils/images';
import {color} from '../../utils/colors';
import {
  Font_SourceSansPro_Regular,
  Font_SourceSansPro_Semibold,
} from '../../utils/typograpy';
function TransferHistory({assetsdata}) {
  const getFormattedTransferDateTime = transferDate => {
    const date = new Date(transferDate);

    const transferTime = date.toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    const transferDateOnly = date.toLocaleDateString();
    return {transferDateOnly, transferTime};
  };
  const formattedData = assetsdata.transferHistory.map(transfer => {
    const {fromName, toName, tranferDate, fromType, toType} = transfer;
    const {transferDateOnly, transferTime} =
      getFormattedTransferDateTime(tranferDate);

    return {
      from: (
        <View style={{padding: 2}}>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontFamily: Font_SourceSansPro_Regular,
              }}>
              {fromName}
            </Text>
          </View>
          <View style={styles.Type}>
            <Text
              style={{
                color: color.primaryColor,
                fontSize: 10,
                padding: 2,
                fontFamily: Font_SourceSansPro_Semibold,
              }}>
              {fromType}
            </Text>
          </View>
        </View>
      ),
      to: (
        <View style={{padding: 2}}>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: 13,
                fontFamily: Font_SourceSansPro_Regular,
              }}>
              {toName}
            </Text>
          </View>
          <View style={styles.Type}>
            <Text
              style={{
                color: color.primaryColor,
                fontSize: 10,
                padding: 2,
                fontFamily: Font_SourceSansPro_Semibold,
              }}>
              {toType}
            </Text>
          </View>
        </View>
      ),
      transferDateOnly,
      transferTime,
    };
  });

  return (
    <View style={styles.container}>
      {assetsdata.transferHistory.length > 0 ? (
        <View style={styles.tableContainer}>
          <Table borderStyle={styles.tableBorder}>
            <Row
              data={['From', 'To', 'Date', 'Time']} // Assuming these are your column headers
              style={styles.head}
              textStyle={styles.headText}
            />
            <Rows
              data={formattedData.map(data => Object.values(data))}
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
    padding: 1,
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
    backgroundColor: '#F1F1F9',
  },
  headText: {
    textAlign: 'center',
    fontFamily: Font_SourceSansPro_Semibold,
    color: '#000',
  },
  rowText: {
    textAlign: 'center',
    color: '#000',
    fontFamily: Font_SourceSansPro_Regular,
  },
  noDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  noDetailsText: {
    color: color.primaryColor,
    backgroundColor: '#F1F1F9',
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: Font_SourceSansPro_Semibold,
  },
  Type: {
    backgroundColor: '#F1F1F9',
    fontSize: 10,
    color: color.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TransferHistory;
