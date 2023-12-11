import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {AVATAR, EXCEL_IMAGE} from '../../utils/images';
import {color} from '../../utils/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Carousel from 'react-native-snap-carousel';

import {
  AutoGenerateTokenIcon,
  BoxIcon,
  ItemBoxIcon,
  OtherIdIcon,
  Token,
  TokenActiveIcon,
  TokenWithBg,
  TransferTokenIcon,
  UpcIcon,
  UserIcon,
} from '../../utils/icons';
import {
  Font_SourceSansPro_Bold,
  Font_SourceSansPro_Regular,
} from '../../utils/typograpy';
import {SCREEN_WIDTH} from '../../utils/constants';
import Swiper from 'react-native-swiper';
import {downloadFile} from '../../utils/helper/appUtil';

function TokenDetails({assetsdata, filedata, attachmentsdata}) {
  const {
    description,
    itemName,
    category,
    serialNo,
    tokenId,
    ownerName,
    creatorName,
    ownerWalletId,
    creatorWalletId,
    Attachments,
  } = assetsdata;

  const images = [
    {id: 1, imageUrl: AVATAR},
    {id: 2, imageUrl: AVATAR},
    {id: 3, imageUrl: AVATAR},
    // Add more image data as needed
  ];

  return (
    <View style={{padding: 8}}>
      {Attachments.map(v => (
        <View
          style={{
            backgroundColor: color.primaryColor,
            height: 210,
            borderRadius: 10,
          }}>
          <Image
            source={{uri: v.fileUrl}}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              borderRadius: 10,
            }}
          />
        </View>
      ))}
      <View style={{borderBottomWidth: 1, borderColor: 'gray'}}>
        <View style={Styles.itemContainer}>
          <View style={Styles.itemContent}>
            <BoxIcon fillPath={color.naturalGrayColor} />
            <Text style={Styles.itemtext}>Category</Text>
          </View>
          <Text style={Styles.itemValue}>{category}</Text>
        </View>

        <View style={Styles.itemContainer}>
          <View style={Styles.itemContent}>
            <ItemBoxIcon fillPath={color.naturalGrayColor} />
            <Text style={Styles.itemtext}>Item Name</Text>
          </View>
          <Text style={Styles.itemValue}>{itemName}</Text>
        </View>

        <View style={Styles.itemContainer}>
          <View style={Styles.itemContent}>
            <UpcIcon fillPath={color.naturalGrayColor} />
            <Text style={Styles.itemtext}>Serial No.</Text>
          </View>
          <Text style={Styles.itemValue}>{serialNo}</Text>
        </View>

        <View style={Styles.itemContainer}>
          <View style={Styles.itemContent}>
            <OtherIdIcon fillPath={color.naturalGrayColor} />
            <Text style={Styles.itemtext}>Token ID</Text>
          </View>
          <Text style={Styles.itemValue}>{tokenId}</Text>
        </View>
      </View>

      <View style={{borderBottomWidth: 1, borderColor: color.naturalGrayColor}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            gap: 5,
          }}>
          <FontAwesome6
            name="user-large"
            size={30}
            style={{color: color.naturalGrayColor, padding: 8}}
          />
          <View style={{flexDirection: 'column', gap: 5}}>
            <Text style={{color: '#000', fontWeight: 800}}>{ownerName}</Text>
            <Text style={{color: '#000', fontSize: 12}}>{ownerWalletId}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#F1F1F9',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '50%',
              }}>
              <View>
                <Text style={{color: color.primaryColor}}>Current owner</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            gap: 5,
          }}>
          <FontAwesome6
            name="user-large"
            size={30}
            style={{color: color.naturalGrayColor, padding: 8}}
          />
          <View style={{flexDirection: 'column', gap: 5}}>
            <Text style={{color: '#000', fontWeight: 800}}>{creatorName}</Text>
            <Text style={{color: '#000', fontSize: 12}}>{creatorWalletId}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#F1F1F9',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '50%',
              }}>
              <View>
                <Text style={{color: color.primaryColor}}>Creator</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <View style={Styles.itemContainer}>
          <View style={Styles.itemContent}>
            <Text style={Styles.itemtext}>Description</Text>
          </View>
          <Text style={{color: '#000'}}>{description} </Text>

          <View style={Styles.itemContent}>
            <Text style={Styles.itemtext}>Images</Text>
          </View>
          <View style={{padding: 8}}>
            {filedata == [] ? (
              <Image
                style={{
                  height: 200,
                  width: SCREEN_WIDTH - 48,
                }}
                resizeMode="contain"
                source={require('../../assets/images/onboard1.png')}
              />
            ) : (
              <Swiper
                style={{height: 250}}
                showsButtons={false}
                autoplay={true}
                activeDotColor={color.primaryColor}
                dotColor="#B2B2B2"
                showsPagination={true}>
                {filedata?.map((item, index) => (
                  <View
                    key={index}
                    style={{borderRadius: 10, overflow: 'hidden'}}>
                    <Image
                      style={{
                        height: 200,
                        width: SCREEN_WIDTH - 48,
                        borderRadius: 10,
                      }}
                      resizeMode="contain"
                      source={{uri: item.fileUrl}}
                    />
                  </View>
                ))}
              </Swiper>
            )}
          </View>
          <View style={Styles.itemContent}>
            <Text style={Styles.itemtext}>Attachments</Text>
          </View>
          {console.log('jhjhsjhdjs')}
          {console.log(attachmentsdata)}
          {attachmentsdata == [] ? (
            <Text>hkewfwhfwhkhjdklshfjhdjkfhjksdfh</Text>
          ) : (
            <View style={{flex: 1}}>
              {attachmentsdata?.map(item => {
                return item.fileType.toLowerCase() == 'attachment' ||
                  item.fileType.toLowerCase() == 'attachments' ? (
                  <>
                    <TouchableOpacity
                      onPress={() => downloadFile(item.fileUrl, item.fileName)}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 14,
                        width: '90%',
                      }}>
                      <Image
                        source={
                          item.fileName.includes('xlsx')
                            ? EXCEL_IMAGE
                            : {
                                uri: 'https://cdn4.iconfinder.com/data/icons/file-extensions-1/64/pdfs-512.png',
                              }
                        }
                        style={{width: 17, height: 20, marginRight: 5}}
                        resizeMode="contain"
                      />
                      <Text style={Styles.content}>{item.fileName}</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <View>
                    <Text style={{color: '#000'}}>No Attachments</Text>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  itemtext: {
    color: color.naturalGrayColor,
    fontFamily: Font_SourceSansPro_Bold,
    fontWeight: '800',
    fontSize: 14,
  },
  itemValue: {
    color: '#000',
    paddingLeft: 30,
    fontFamily: Font_SourceSansPro_Bold,
    fontSize: 20,
    fontWeight: '800',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  content: {
    fontSize: 14,
    color: color.paragraphColor,
    fontFamily: Font_SourceSansPro_Regular,
    lineHeight: 20.11,
    flexWrap: 'wrap',
  },
});

export default TokenDetails;
