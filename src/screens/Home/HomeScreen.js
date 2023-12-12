import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import HeaderHome from '../../components/header/HeaderHome';
import Container from '../../components/layout/Container';
import {color} from '../../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import {
  Font_SourceSansPro_Bold,
  Font_SourceSansPro_Regular,
  Font_SourceSansPro_Semibold,
} from '../../utils/typograpy';
import TopNavigation from '../../navigation/TopNavigation';
import {FlatList} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import TokenDetails from '../../components/TokenDetails/TokenDetails';
import TransferHistory from '../../components/TokenDetails/TransferHistory';
import postrequest from '../../utils/helper/apihelper';
import {globalattachments, smeassets} from '../../utils/helper/url';
import Loader from '../../components/loader/Loader';
function HomeScreen(props) {
  const [isTabActive, setIsTabActive] = useState('Token Details');
  const [loader, setLoader] = useState(false);
  const [attachmentsdata, setAttachmentsdata] = useState([]);
  const [filedata, setFileData] = useState([]);
  const [assetsdata, setAssestsdata] = useState(null);
  const [itemIndex, setItemIndex] = useState('');
  handleTabs = tab => {
    setIsTabActive(tab);
  };
  0;

  const [tokenId, setTokenId] = useState('');
  const getassets = async () => {
    const body = {
      tokenId: tokenId,
    };
    try {
      const data = await postrequest(body, smeassets);
      setAssestsdata(data?.response?.data);
      setLoader(false);

      const getAttachment = async () => {
        const body = {
          itemIndex: data?.response?.data?.Attachments[0]?.itemIndex,
          fileType: 'attachments',
        };
        await postrequest(JSON.stringify(body), globalattachments)
          .then(data => {
            setAttachmentsdata(data?.response.data);
            setLoader(false);
          })
          .catch(error => {
            return error;
          });
      };
      const getFile = async () => {
        const body = {
          itemIndex: data?.response?.data?.Attachments[0]?.itemIndex,
          fileType: 'file',
        };
        await postrequest(JSON.stringify(body), globalattachments)
          .then(data => {
            setFileData(data?.response.data);
            setLoader(false);
            setItemIndex(data?.response?.data?.Attachments[0]?.itemIndex);
          })
          .catch(error => {
            return error;
          });
      };
      getAttachment();
      getFile();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    setLoader(true);
    await getassets();
  };

  const handleClear = () => {
    setTokenId('');
  };

  return (
    <Container statusBarColor={color.primaryColor} barStyle={'light-content'}>
      <HeaderHome />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}>
        <ImageBackground
          source={require('../../assets/images/wave.png')}
          style={styles.MainContainer}>
          <View style={styles.mainView}>
            <Text
              style={{
                fontSize: 24,
                color: '#000',
                fontFamily: Font_SourceSansPro_Semibold,
              }}>
              <Text
                style={{
                  color: color.primaryColor,
                }}>
                Look up a{' '}
              </Text>
              Token
            </Text>
          </View>
          <View style={styles.mainView}>
            <View
              style={{
                width: '100%',
                borderRadius: 10,
                elevation: 12,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Enter Token ID"
                value={tokenId}
                placeholderTextColor={'#000'}
                style={{
                  color: 'black',
                  width: '70%',
                  padding: 10,
                  fontFamily: Font_SourceSansPro_Regular,
                }}
                onChangeText={text => setTokenId(text)}
              />
              {tokenId == '' ? (
                <TouchableOpacity
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}
                  onPress={handleClear}>
                  <Text></Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}
                  onPress={handleClear}>
                  <Text
                    style={{
                      fontWeight: 700,
                      backgroundColor: '#F1F1F9',
                      color: color.primaryColor,
                      padding: 3,
                      borderRadius: 50,
                    }}>
                    X
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={{
                  backgroundColor: color.primaryColor,
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={handleSearch}>
                <Text style={{fontFamily: Font_SourceSansPro_Regular}}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        {!assetsdata || !assetsdata.tokenId ? (
          loader === false ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 24,
                  padding: 20,
                  fontFamily: Font_SourceSansPro_Regular,
                }}>
                {!assetsdata || (!assetsdata.tokenId && tokenId == '')
                  ? 'Search Token'
                  : '  Token not found'}
              </Text>
              <Image
                source={require('../../assets/images/empty-coin-icon.png')}
              />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                height: 300,
                backgroundColor: '#fff',
              }}>
              <Loader />
            </View>
          )
        ) : loader == true ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              height: 300,
              backgroundColor: '#fff',
            }}>
            <Loader />
          </View>
        ) : (
          <View style={styles.BottomContainer}>
            <View style={{padding: 10, alignItems: 'center'}}>
              <FlatList
                horizontal
                data={['Token Details', 'Transfer History']}
                renderItem={({item, index}) => (
                  <TouchableRipple
                    style={{borderRadius: 6}}
                    onPress={() => this.handleTabs(item)}>
                    <View
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 6,
                        backgroundColor:
                          isTabActive === item ? '#F1F1F9' : 'transparent',
                        borderRadius: 6,
                      }}>
                      <Text
                        style={{
                          color: color.primaryColor,
                          fontFamily: Font_SourceSansPro_Semibold,
                          lineHeight: 24.06,
                          textTransform: 'capitalize',
                          fontSize: 14,
                        }}>
                        {item}
                      </Text>
                    </View>
                  </TouchableRipple>
                )}
              />
            </View>
            <View>
              {isTabActive == 'Token Details' ? (
                <TokenDetails
                  assetsdata={assetsdata}
                  filedata={filedata}
                  attachmentsdata={attachmentsdata}
                />
              ) : (
                <TransferHistory assetsdata={assetsdata} />
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </Container>
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    height: 240,
  },
  BottomContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
});
export default HomeScreen;
