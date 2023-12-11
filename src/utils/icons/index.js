import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Svg, {
  Rect,
  Path,
  G,
  LinearGradient,
  Defs,
  Stop,
  ClipPath,
  Polygon,
  Ellipse,
  Circle,
} from 'react-native-svg';
/**
 *
 * @param {{
 * type: "fontAwesome" | "fontAwesome5" | "fontAwesome5Pro" | "antDesign" | "entypo" | "evilIcons" | "feather" | "fontisto" | "foundation" | "ionicons" | "materialCommunityIcons" | "materialIcons" | "octicons" | "simpleLineIcons" | "zocial",
 * name:string,
 * color:string,
 * size:number,
 * onPress:Function,
 *  style: object
 * }} props Props for the component
 *
 */
const Icon = ({type, name, color = '#000', size = 16, onPress, style}) => {
  switch (type) {
    case 'fontAwesome':
      return (
        <FontAwesome
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'fontAwesome5':
      return (
        <FontAwesome5
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'fontAwesome5Pro':
      return (
        <FontAwesome5Pro
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'FontAwesome6':
      return (
        <FontAwesome6
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'antDesign':
      return (
        <AntDesign
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'entypo':
      return (
        <Entypo
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'feather':
      return (
        <Feather
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'fontisto':
      return (
        <Fontisto
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'foundation':
      return (
        <Foundation
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'ionicons':
      return (
        <Ionicons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'materialCommunityIcons':
      <MaterialCommunityIcons
        style={style}
        name={name}
        color={color}
        size={size}
        onPress={onPress && onPress}
      />;
    case 'materialIcons':
      return (
        <MaterialIcons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'octicons':
      return (
        <Octicons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'simpleLineIcons':
      return (
        <SimpleLineIcons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    case 'zocial':
      return (
        <Zocial
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
    default:
      return (
        <Ionicons
          style={style}
          name={name}
          color={color}
          size={size}
          onPress={onPress && onPress}
        />
      );
  }
};
export default Icon;

export const Token = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M2 9V7C2 4 4 2 7 2H17C20 2 22 4 22 7V9"
        stroke={props?.pathFill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 15V17C2 20 4 22 7 22H17C20 22 22 20 22 17V15"
        stroke={props?.pathFill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.29006L7.55998 8.07009C6.83998 8.47009 6.23999 9.48008 6.23999 10.3101V13.7001C6.23999 14.5301 6.82998 15.5401 7.55998 15.9401L10.76 17.7201C11.44 18.1001 12.56 18.1001 13.25 17.7201L16.45 15.9401C17.17 15.5401 17.77 14.5301 17.77 13.7001V10.3101C17.77 9.48008 17.18 8.47009 16.45 8.07009L13.25 6.29006C12.56 5.90006 11.44 5.90006 10.76 6.29006Z"
        stroke={props?.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.7002 9.25977L12.0002 12.3298L17.2602 9.27979"
        stroke={props?.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0002 17.7698V12.3198"
        stroke={props?.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TokenWithBg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <Rect width={32} height={32} rx={7} fill="#F1F1F9" />
      <Path
        d="M6 13V11C6 8 8 6 11 6H21C24 6 26 8 26 11V13"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 19V21C6 24 8 26 11 26H21C24 26 26 24 26 21V19"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.7602 10.2901L11.5602 12.0701C10.8402 12.4701 10.2402 13.4801 10.2402 14.3101V17.7001C10.2402 18.5301 10.8302 19.5401 11.5602 19.9401L14.7602 21.7201C15.4402 22.1001 16.5602 22.1001 17.2502 21.7201L20.4502 19.9401C21.1702 19.5401 21.7702 18.5301 21.7702 17.7001V14.3101C21.7702 13.4801 21.1802 12.4701 20.4502 12.0701L17.2502 10.2901C16.5602 9.90006 15.4402 9.90006 14.7602 10.2901Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7002 13.26L16.0002 16.33L21.2602 13.28"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 21.7701V16.3201"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TokenGenerateWithBg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <Rect width={32} height={32} rx={7} fill="#C5FBFF" />
      <Path
        d="M10.7002 13.26L16.0002 16.33L21.2602 13.28"
        stroke="#008F99"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 21.7701V16.3201"
        stroke="#008F99"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.7603 10.2901L11.5602 12.0701C10.8402 12.4701 10.2402 13.4801 10.2402 14.3101V17.7001C10.2402 18.5301 10.8302 19.5401 11.5602 19.9401L14.7603 21.7201C15.4403 22.1001 16.5602 22.1001 17.2502 21.7201L20.4503 19.9401C21.1703 19.5401 21.7702 18.5301 21.7702 17.7001V14.3001C21.7702 13.4701 21.1803 12.4601 20.4503 12.0601L17.2502 10.2801C16.5602 9.9001 15.4403 9.9001 14.7603 10.2901Z"
        stroke="#008F99"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26 19C26 22.87 22.87 26 19 26L20.05 24.25"
        stroke="#008F99"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 13C6 9.13 9.13 6 13 6L11.95 7.75"
        stroke="#008F99"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AvailableTokensWithBg = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <Rect width={32} height={32} rx={7} fill="#D2FFE0" />
      <Path
        d="M27.0002 21.91C27.0202 22.66 26.8202 23.37 26.4602 23.98C26.2602 24.34 25.9902 24.6701 25.6902 24.9401C25.0002 25.5801 24.0902 25.9701 23.0802 26.0001C21.6202 26.0301 20.3302 25.2801 19.6202 24.1301C19.2402 23.5401 19.0102 22.8301 19.0002 22.0801C18.9702 20.8201 19.5302 19.6801 20.4302 18.9301C21.1102 18.3701 21.9702 18.0201 22.9102 18.0001C25.1202 17.9501 26.9502 19.7 27.0002 21.91Z"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4404 22.03L22.4504 22.99L24.5404 20.97"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.16992 11.4399L15.9999 16.5499L24.7699 11.4699"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 25.61V16.54"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.6101 13.17V18.83C25.6101 18.88 25.6101 18.92 25.6001 18.97C24.9001 18.36 24.0001 18 23.0001 18C22.0601 18 21.1901 18.33 20.5001 18.88C19.5801 19.61 19.0001 20.74 19.0001 22C19.0001 22.75 19.2101 23.46 19.5801 24.06C19.6701 24.22 19.7801 24.37 19.9001 24.51L18.0701 25.52C16.9301 26.16 15.0701 26.16 13.9301 25.52L8.59012 22.56C7.38012 21.89 6.39014 20.21 6.39014 18.83V13.17C6.39014 11.79 7.38012 10.11 8.59012 9.44002L13.9301 6.48C15.0701 5.84 16.9301 5.84 18.0701 6.48L23.4101 9.44002C24.6201 10.11 25.6101 11.79 25.6101 13.17Z"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BoxIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.93014 2.48028L4.59014 5.44028C3.38014 6.11028 2.39014 7.79028 2.39014 9.17028V14.8203C2.39014 16.2003 3.38014 17.8803 4.59014 18.5503L9.93014 21.5203C11.0701 22.1503 12.9401 22.1503 14.0801 21.5203L19.4201 18.5503C20.6301 17.8803 21.6201 16.2003 21.6201 14.8203V9.17028C21.6201 7.79028 20.6301 6.11028 19.4201 5.44028L14.0801 2.47028C12.9301 1.84028 11.0701 1.84028 9.93014 2.48028Z"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M3.17001 7.43994L12 12.5499L20.77 7.46994"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
      />
      <Path
        d="M12 21.61V12.54"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth}
      />
    </Svg>
  );
};

export const FilterIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      {...props}>
      <Path
        d="M16 1H2C1.44772 1 1 1.44772 1 2V3.58579C1 3.851 1.10536 4.10536 1.29289 4.29289L6.70711 9.70711C6.89464 9.89464 7 10.149 7 10.4142V16.382C7 17.1253 7.78231 17.6088 8.44721 17.2764L10.4472 16.2764C10.786 16.107 11 15.7607 11 15.382V10.4142C11 10.149 11.1054 9.89464 11.2929 9.70711L16.7071 4.29289C16.8946 4.10536 17 3.851 17 3.58579V2C17 1.44772 16.5523 1 16 1Z"
        stroke="#425768"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SearchIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 22L20 20"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ItemBoxIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 13.2401V9.58014L7.51001 4.1001"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UpcIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 7V9C10.5 10 10 10.5 9 10.5H7C6 10.5 5.5 10 5.5 9V7C5.5 6 6 5.5 7 5.5H9C10 5.5 10.5 6 10.5 7Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 7V9C18.5 10 18 10.5 17 10.5H15C14 10.5 13.5 10 13.5 9V7C13.5 6 14 5.5 15 5.5H17C18 5.5 18.5 6 18.5 7Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 15V17C10.5 18 10 18.5 9 18.5H7C6 18.5 5.5 18 5.5 17V15C5.5 14 6 13.5 7 13.5H9C10 13.5 10.5 14 10.5 15Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5 15V17C18.5 18 18 18.5 17 18.5H15C14 18.5 13.5 18 13.5 17V15C13.5 14 14 13.5 15 13.5H17C18 13.5 18.5 14 18.5 15Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const OtherIdIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12H5"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const StatusCheckIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}>
      <Path
        d="M7.3144 1H14.6856C14.9803 1 15.2629 1.11706 15.4713 1.32544L20.6746 6.52873C20.8829 6.7371 21 7.01971 21 7.3144V14.6856C21 14.9803 20.8829 15.2629 20.6746 15.4713L15.4713 20.6746C15.2629 20.8829 14.9803 21 14.6856 21H7.3144C7.01971 21 6.7371 20.8829 6.52873 20.6746L1.32544 15.4713C1.11706 15.2629 1 14.9803 1 14.6856V7.3144C1 7.01972 1.11706 6.7371 1.32544 6.52873L6.52873 1.32544C6.7371 1.11706 7.01972 1 7.3144 1Z"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3333 8.77832L9.88885 13.2228L7.66663 11.0005"
        stroke="#01BA3A"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TokenActiveIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}>
      <Path
        d="M6 13V11C6 8 8 6 11 6H21C24 6 26 8 26 11V13"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 19V21C6 24 8 26 11 26H21C24 26 26 24 26 21V19"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.7602 10.2901L11.5602 12.0701C10.8402 12.4701 10.2402 13.4801 10.2402 14.3101V17.7001C10.2402 18.5301 10.8302 19.5401 11.5602 19.9401L14.7602 21.7201C15.4402 22.1001 16.5602 22.1001 17.2502 21.7201L20.4502 19.9401C21.1702 19.5401 21.7702 18.5301 21.7702 17.7001V14.3101C21.7702 13.4801 21.1802 12.4701 20.4502 12.0701L17.2502 10.2901C16.5602 9.90006 15.4402 9.90006 14.7602 10.2901Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7002 13.26L16.0002 16.33L21.2602 13.28"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 21.7701V16.3201"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const CloseIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16992 14.8299L14.8299 9.16992"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8299 14.8299L9.16992 9.16992"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EditPenIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.295 0.692656L13.3075 1.70516C13.9 2.29016 13.9 3.24266 13.3075 3.82766L3.385 13.7502H0.25V10.6152L8.05 2.80766L10.1725 0.692656C10.7575 0.107656 11.71 0.107656 12.295 0.692656ZM1.75 12.2502L2.8075 12.2952L10.1725 4.92266L9.115 3.86516L1.75 11.2302V12.2502Z"
        stroke={props.pathFill}
      />
    </Svg>
  );
};

export const EditPenIcon2 = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.04 3.01976L8.16 10.8998C7.86 11.1998 7.56 11.7898 7.5 12.2198L7.07 15.2298C6.91 16.3198 7.68 17.0798 8.77 16.9298L11.78 16.4998C12.2 16.4398 12.79 16.1398 13.1 15.8398L20.98 7.95976C22.34 6.59976 22.98 5.01976 20.98 3.01976C18.98 1.01976 17.4 1.65976 16.04 3.01976Z"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TrashIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.8499 9.14014L18.1999 19.2101C18.0899 20.7801 17.9999 22.0001 15.2099 22.0001H8.7899C5.9999 22.0001 5.9099 20.7801 5.7999 19.2101L5.1499 9.14014"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.3301 16.5H13.6601"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.5 12.5H14.5"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SaveIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H16.0546C16.3381 3 16.6083 3.12032 16.7979 3.33104L20.7433 7.71477C20.9086 7.8984 21 8.13669 21 8.38374V20C21 20.5523 20.5523 21 20 21Z"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15V21H7V15Z"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 7H9"
        stroke={props.pathFill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const TokenCoinIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={223}
      height={308}
      viewBox="0 0 223 308"
      fill="none"
      {...props}>
      <G opacity={0.1}>
        <Path
          d="M51.5335 266.18C51.5335 266.18 51.391 265.99 51.391 265.895L51.0111 265.374C50.7261 264.994 50.4887 264.615 50.2037 264.188C41.7978 250.911 41.4178 234.835 49.0164 216.057C56.5201 197.326 69.7701 181.346 88.8141 168.068C100.165 160.149 111.562 154.554 123.103 151.329C128.802 149.717 134.548 148.721 140.247 148.389C142.194 148.199 144.189 148.105 146.136 148.105C158.104 148.105 167.934 150.665 175.581 155.739C176.008 156.024 176.483 156.261 176.91 156.545C181.09 159.58 184.699 163.421 187.643 168.068C195.954 181.346 196.334 197.374 188.831 216.057C181.232 234.883 167.982 250.911 149.033 264.188C130.084 277.371 110.945 283.962 91.5686 283.962C73.2845 283.962 59.9394 278.035 51.5335 266.18ZM52.8632 259.636C53.2432 260.252 53.5756 260.822 53.9555 261.391C54.0505 261.485 54.1455 261.58 54.2405 261.675C62.029 272.724 74.4243 278.272 91.4736 278.272C109.52 278.272 127.377 272.06 145.044 259.683C162.615 247.402 174.963 232.464 181.992 214.872C189.068 197.421 188.688 182.531 180.9 170.202C178.24 165.84 174.916 162.283 170.974 159.485C170.547 159.201 170.119 158.964 169.787 158.679C162.568 153.937 153.402 151.614 142.337 151.614C124.29 151.614 106.481 157.826 88.9091 170.202C71.2423 182.484 58.8471 197.374 51.8184 214.872C44.7422 232.417 45.1222 247.354 52.9107 259.683L52.8632 259.636Z"
          fill="#005DFF"
        />
        <Path
          d="M53.9552 261.344C53.5753 260.822 53.2428 260.206 52.8629 259.589C45.0743 247.307 44.7419 232.37 51.7706 214.777C58.8468 197.327 71.1945 182.437 88.8612 170.108C106.433 157.731 124.242 151.519 142.289 151.519C153.354 151.519 162.52 153.89 169.739 158.585C170.119 158.869 170.499 159.106 170.926 159.391C174.868 162.141 178.145 165.698 180.852 170.108C188.64 182.39 188.973 197.279 181.944 214.777C174.868 232.323 162.568 247.26 144.996 259.589C127.329 271.966 109.472 278.178 91.4258 278.178C74.3764 278.178 61.9812 272.63 54.1927 261.581C54.0977 261.486 54.0027 261.391 53.9077 261.296M93.9428 274.147C110.185 274.052 126.284 268.267 142.146 256.744C158.151 245.221 169.311 231.422 175.628 215.299C182.039 199.176 181.754 185.424 174.678 174.091C172.256 170.06 169.264 166.788 165.702 164.18C165.322 163.896 164.99 163.706 164.61 163.517C158.103 159.249 149.792 157.162 139.677 157.21C123.435 157.21 107.335 162.947 91.4733 174.471C75.4687 185.994 64.3083 199.793 57.8495 215.915C51.5332 232.038 51.8656 245.837 58.9418 257.218C59.3217 257.645 59.6541 258.167 60.0341 258.688C60.0341 258.783 60.0341 258.878 60.1766 258.973C67.2527 269.121 78.4607 274.194 93.9428 274.1V274.147Z"
          fill="url(#paint0_linear_3591_86875)"
        />
        <Path
          d="M142.194 256.792C126.284 268.315 110.232 274.1 93.9905 274.195C78.5558 274.29 67.3004 269.263 60.2242 259.068C60.1292 258.973 60.0817 258.878 60.0817 258.784C59.7018 258.262 59.3693 257.74 58.9894 257.314C51.9132 245.885 51.5808 232.134 57.8971 216.011C64.3084 199.888 75.5164 186.041 91.5209 174.566C107.43 163.043 123.482 157.305 139.724 157.305C149.793 157.21 158.104 159.297 164.657 163.612C165.037 163.802 165.37 163.991 165.75 164.276C169.312 166.884 172.303 170.156 174.726 174.187C181.802 185.52 182.087 199.224 175.675 215.394C169.359 231.517 158.199 245.364 142.194 256.839V256.792Z"
          fill="url(#paint1_linear_3591_86875)"
        />
        <Path
          d="M94.4214 236.707C86.6159 227.061 91.0776 210.48 104.367 199.748C116.346 190.074 131.469 188.402 140.052 195.229L133.993 201.858C132.123 201.337 129.675 201.923 127.642 203.564C124.743 205.906 123.768 209.526 125.472 211.632C127.176 213.738 130.923 213.544 133.823 211.202C135.987 209.454 137.079 206.994 136.786 204.984L144.559 200.779C149.48 210.596 144.677 225.049 132.679 234.738C119.39 245.47 102.227 246.354 94.4214 236.707ZM138.346 205.067C138.402 207.435 137.053 210.159 134.589 212.149C130.969 215.073 126.293 215.313 124.167 212.685C122.041 210.057 123.255 205.54 126.875 202.616C129.339 200.626 132.288 199.879 134.594 200.43C131.5 199.194 127.154 200.065 123.593 202.94C118.904 206.728 117.332 212.576 120.087 215.98C122.841 219.385 128.893 219.073 133.583 215.286C137.144 212.41 138.908 208.348 138.346 205.067ZM134.35 216.234C128.941 220.602 121.958 220.962 118.781 217.035C115.604 213.109 117.418 206.362 122.827 201.993C126.614 198.935 131.174 197.842 134.658 198.81C130.224 196.997 123.958 198.237 118.833 202.377C112.118 207.8 109.862 216.176 113.807 221.051C117.752 225.927 126.424 225.48 133.139 220.057C138.264 215.917 140.792 210.054 139.945 205.343C140.164 208.949 138.137 213.176 134.35 216.234ZM133.905 221.004C126.469 227.008 116.868 227.503 112.501 222.106C108.135 216.71 110.63 207.433 118.066 201.429C123.429 197.097 129.921 195.633 134.763 197.181C128.987 194.775 120.784 196.38 114.079 201.795C105.333 208.858 102.396 219.768 107.534 226.118C112.672 232.468 123.965 231.885 132.711 224.822C139.416 219.407 142.706 211.73 141.561 205.583C142.062 210.637 139.268 216.672 133.905 221.004ZM133.478 225.769C124.011 233.414 111.787 234.043 106.228 227.173C100.668 220.302 103.845 208.492 113.312 200.847C119.785 195.62 127.546 193.673 133.588 195.161C126.606 192.889 117.21 194.988 109.451 201.254C98.7401 209.904 95.1455 223.267 101.437 231.042C107.728 238.817 121.559 238.105 132.271 229.455C140.03 223.189 144.054 214.452 143.293 207.156C143.483 213.369 139.95 220.542 133.478 225.769ZM144.893 208.1C145.053 215.559 140.794 224.139 133.038 230.403C121.607 239.634 106.845 240.391 100.132 232.095C93.4194 223.799 97.2547 209.538 108.685 200.307C116.441 194.043 125.731 191.679 132.998 193.4C124.854 190.971 114.068 193.479 105.133 200.695C92.563 210.847 88.3443 226.528 95.7274 235.653C103.11 244.777 119.342 243.942 131.912 233.79C140.847 226.574 145.563 216.565 144.893 208.1Z"
          fill="#95DFFF"
        />
        <Path
          d="M51.0101 265.374L39.6122 251.338C33.011 242.708 29.4016 234.599 28.7842 227.154C28.2618 219.567 30.0665 210.699 34.2932 200.551C41.7968 181.726 55.0469 165.745 74.0909 152.563C84.159 145.45 94.4171 140.233 104.77 136.914C108.237 135.776 111.751 134.875 115.218 134.259C125.856 132.551 134.215 132.551 140.389 134.259C146.562 136.108 151.502 138.526 155.253 141.466L175.627 155.787C167.934 150.713 158.15 148.153 146.183 148.153C144.235 148.153 142.241 148.247 140.294 148.437C134.595 148.816 128.848 149.765 123.149 151.377C111.609 154.602 100.211 160.15 88.8606 168.116C69.8641 181.394 56.5666 197.422 49.063 216.105C41.4644 234.931 41.8918 250.959 50.2503 264.236C50.5352 264.663 50.7727 265.09 51.0576 265.422L51.0101 265.374Z"
          fill="url(#paint2_linear_3591_86875)"
        />
        <Rect
          x={19.001}
          y={130.208}
          width={187}
          height={177.303}
          rx={19}
          fill="url(#paint3_linear_3591_86875)"
        />
      </G>
      <G filter="url(#filter0_dd_3591_86875)">
        <Path
          d="M51.5326 17.7824C51.5326 17.7824 51.3902 17.9721 51.3902 18.067L51.0102 18.5886C50.7253 18.968 50.4878 19.3473 50.2029 19.7741C41.7969 33.0517 41.417 49.127 49.0156 67.9052C56.5192 86.6361 69.7693 102.617 88.8132 115.894C100.164 123.813 111.562 129.409 123.102 132.633C128.801 134.246 134.547 135.241 140.246 135.573C142.193 135.763 144.188 135.858 146.135 135.858C158.103 135.858 167.934 133.297 175.58 128.223C176.007 127.939 176.482 127.702 176.909 127.417C181.089 124.382 184.698 120.541 187.642 115.894C195.953 102.617 196.333 86.5887 188.83 67.9052C181.231 49.0796 167.981 33.0517 149.032 19.7741C130.083 6.59137 110.944 0 91.5677 0C73.2836 0 59.9386 5.92748 51.5326 17.7824ZM52.8624 24.3264C53.2423 23.7099 53.5748 23.1409 53.9547 22.5719C54.0497 22.477 54.1446 22.3822 54.2396 22.2873C62.0282 11.2385 74.4234 5.69039 91.4728 5.69039C109.519 5.69039 127.376 11.9024 145.043 24.279C162.615 36.5607 174.962 51.498 181.991 69.0907C189.067 86.5412 188.687 101.431 180.899 113.76C178.239 118.123 174.915 121.679 170.973 124.477C170.546 124.762 170.118 124.999 169.786 125.283C162.567 130.025 153.401 132.349 142.336 132.349C124.289 132.349 106.48 126.137 88.9082 113.76C71.2415 101.479 58.8463 86.5887 51.8176 69.0907C44.7414 51.5454 45.1213 36.6081 52.9099 24.279L52.8624 24.3264Z"
          fill="#005DFF"
        />
        <Path
          d="M53.9544 22.6197C53.5744 23.1413 53.242 23.7578 52.8621 24.3742C45.0735 36.656 44.741 51.5932 51.7697 69.186C58.8459 86.6365 71.1937 101.526 88.8604 113.856C106.432 126.232 124.241 132.444 142.288 132.444C153.353 132.444 162.519 130.073 169.738 125.379C170.118 125.094 170.498 124.857 170.925 124.572C174.867 121.822 178.144 118.266 180.851 113.856C188.639 101.574 188.972 86.6839 181.943 69.186C174.867 51.6406 162.567 36.7034 144.995 24.3742C127.328 11.9976 109.472 5.78564 91.4249 5.78564C74.3756 5.78564 61.9804 11.3338 54.1918 22.3826C54.0968 22.4774 54.0018 22.5723 53.9069 22.6671M93.942 9.81633C110.184 9.91116 126.283 15.6964 142.146 27.2194C158.15 38.7424 169.311 52.5416 175.627 68.6644C182.038 84.7871 181.753 98.5389 174.677 109.872C172.255 113.903 169.263 117.175 165.701 119.783C165.321 120.068 164.989 120.257 164.609 120.447C158.103 124.715 149.792 126.801 139.676 126.754C123.434 126.754 107.334 121.016 91.4724 109.493C75.4679 97.9698 64.3074 84.1707 57.8486 68.0479C51.5323 51.9252 51.8647 38.126 58.9409 26.7452C59.3209 26.3184 59.6533 25.7968 60.0332 25.2752C60.0332 25.1804 60.0332 25.0855 60.1757 24.9907C67.2519 14.8428 78.4598 9.76892 93.942 9.86376V9.81633Z"
          fill="url(#paint4_linear_3591_86875)"
        />
        <Path
          d="M142.193 27.1715C126.284 15.6485 110.232 9.86325 93.9896 9.76841C78.555 9.67357 67.2995 14.7001 60.2233 24.8953C60.1284 24.9902 60.0809 25.085 60.0809 25.1799C59.7009 25.7015 59.3685 26.2231 58.9886 26.6499C51.9124 38.078 51.5799 51.8298 57.8963 67.9526C64.3076 84.0753 75.5155 97.9219 91.5201 109.398C107.43 120.921 123.482 126.658 139.724 126.658C149.792 126.753 158.103 124.667 164.657 120.352C165.036 120.162 165.369 119.972 165.749 119.688C169.311 117.08 172.303 113.808 174.725 109.777C181.801 98.4435 182.086 84.7392 175.675 68.569C169.358 52.4463 158.198 38.5997 142.193 27.1241V27.1715Z"
          fill="url(#paint5_linear_3591_86875)"
        />
        <Path
          d="M94.4204 47.2565C86.6149 56.9029 91.0766 73.4834 104.366 84.2155C116.345 93.8894 131.468 95.5616 140.051 88.7346L133.992 82.1059C132.122 82.6267 129.674 82.0409 127.641 80.3996C124.742 78.0579 123.767 74.438 125.471 72.3321C127.175 70.2263 130.922 70.4202 133.822 72.7619C135.986 74.5102 137.079 76.9699 136.785 78.9803L144.558 83.185C149.479 73.3675 144.676 58.9144 132.678 49.2256C119.389 38.4935 102.226 37.6101 94.4204 47.2565ZM138.345 78.897C138.401 76.5286 137.052 73.8047 134.588 71.815C130.968 68.8913 126.292 68.6507 124.166 71.2786C122.04 73.9065 123.254 78.4239 126.874 81.3476C129.338 83.3374 132.287 84.0847 134.593 83.5336C131.499 84.7699 127.153 83.899 123.592 81.0236C118.903 77.2362 117.331 71.3877 120.086 67.9834C122.84 64.5791 128.892 64.8906 133.582 68.678C137.143 71.5534 138.907 75.6156 138.345 78.897V78.897ZM134.349 67.73C128.94 63.3618 121.957 63.0023 118.78 66.9287C115.603 70.8551 117.417 77.6023 122.826 81.9706C126.613 85.0289 131.173 86.1218 134.657 85.1543C130.223 86.9667 123.957 85.7267 118.832 81.5873C112.117 76.1644 109.861 67.7878 113.806 62.9124C117.751 58.037 126.423 58.4843 133.138 63.9073C138.263 68.0467 140.791 73.91 139.944 78.6207C140.163 75.0148 138.136 70.7883 134.349 67.73V67.73ZM133.904 62.9604C126.468 56.9554 116.867 56.4613 112.5 61.8577C108.134 67.2541 110.629 76.5304 118.065 82.5353C123.428 86.8668 129.92 88.3306 134.762 86.7825C128.986 89.1892 120.783 87.5835 114.078 82.1686C105.332 75.1055 102.395 64.1955 107.533 57.8459C112.671 51.4964 123.964 52.0787 132.71 59.1418C139.415 64.5567 142.705 72.2338 141.56 78.3808C142.061 73.3271 139.267 67.2918 133.904 62.9604ZM133.477 58.1948C124.01 50.5498 111.786 49.9206 106.227 56.7913C100.667 63.6619 103.844 75.4715 113.311 83.1166C119.784 88.344 127.545 90.291 133.587 88.8025C126.605 91.075 117.209 88.9761 109.45 82.7101C98.7392 74.0598 95.1446 60.6973 101.436 52.9221C107.727 45.1469 121.558 45.8588 132.27 54.5091C140.029 60.7751 144.053 69.512 143.292 76.8083C143.483 70.595 139.949 63.4223 133.477 58.1948ZM144.892 75.8634C145.052 68.4047 140.793 59.8248 133.037 53.5611C121.606 44.33 106.844 43.5724 100.131 51.8686C93.4184 60.1648 97.2537 74.4259 108.684 83.657C116.44 89.9208 125.73 92.2845 132.997 90.564C124.853 92.9931 114.067 90.4846 105.132 83.2685C92.5621 73.1173 88.3434 57.4355 95.7264 48.3112C103.109 39.1869 119.341 40.0223 131.911 50.1735C140.846 57.3896 145.562 67.3994 144.892 75.8634Z"
          fill="#95DFFF"
        />
        <Path
          d="M51.0091 18.5894L39.6113 32.6257C33.01 41.2561 29.4006 49.3649 28.7833 56.8098C28.2609 64.397 30.0655 73.2645 34.2922 83.4124C41.7959 102.238 55.0459 118.219 74.0899 131.401C84.158 138.514 94.4161 143.73 104.769 147.05C108.236 148.188 111.75 149.089 115.217 149.705C125.855 151.412 134.214 151.412 140.388 149.705C146.562 147.856 151.501 145.438 155.252 142.498L175.626 128.177C167.933 133.251 158.149 135.811 146.182 135.811C144.234 135.811 142.24 135.716 140.293 135.527C134.594 135.147 128.847 134.199 123.148 132.587C111.608 129.362 100.21 123.814 88.8597 115.848C69.8632 102.57 56.5656 86.5421 49.062 67.8587C41.4634 49.033 41.8908 33.0051 50.2493 19.7275C50.5342 19.3007 50.7717 18.8739 51.0566 18.542L51.0091 18.5894Z"
          fill="url(#paint6_linear_3591_86875)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_3591_86875"
          x1={190.228}
          y1={165.377}
          x2={50.9765}
          y2={165.377}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00D3FF" />
          <Stop offset={0.51} stopColor="#00A1FF" />
          <Stop offset={1} stopColor="#00CBFF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3591_86875"
          x1={213.446}
          y1={88.5273}
          x2={31.3636}
          y2={241.622}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#005DFF" />
          <Stop offset={1} stopColor="#00AAFF" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_3591_86875"
          x1={178.819}
          y1={149.763}
          x2={33.2104}
          y2={149.763}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#004ACD" />
          <Stop offset={0.49} stopColor="#00A2FF" />
          <Stop offset={1} stopColor="#0046C3" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_3591_86875"
          x1={112.501}
          y1={141.389}
          x2={112.501}
          y2={250.007}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity={0} />
          <Stop offset={1} stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_3591_86875"
          x1={190.228}
          y1={118.586}
          x2={50.9757}
          y2={118.586}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#00D3FF" />
          <Stop offset={0.51} stopColor="#00A1FF" />
          <Stop offset={1} stopColor="#00CBFF" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_3591_86875"
          x1={213.445}
          y1={195.436}
          x2={31.3627}
          y2={42.3417}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#005DFF" />
          <Stop offset={1} stopColor="#00AAFF" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_3591_86875"
          x1={178.818}
          y1={134.201}
          x2={33.2094}
          y2={134.201}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#004ACD" />
          <Stop offset={0.49} stopColor="#00A2FF" />
          <Stop offset={1} stopColor="#0046C3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const CategoryBoxIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7701V12.3201"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.2901L7.56 8.0701C6.84 8.4701 6.23999 9.4801 6.23999 10.3101V13.7001C6.23999 14.5301 6.83 15.5401 7.56 15.9401L10.76 17.7201C11.44 18.1001 12.56 18.1001 13.25 17.7201L16.45 15.9401C17.17 15.5401 17.77 14.5301 17.77 13.7001V10.3001C17.77 9.4701 17.18 8.4601 16.45 8.0601L13.25 6.2801C12.56 5.9001 11.44 5.9001 10.76 6.2901Z"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UPCIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M11.02 19.5H7.5C6.88 19.5 6.33 19.48 5.84 19.41C3.21 19.12 2.5 17.88 2.5 14.5V9.5C2.5 6.12 3.21 4.88 5.84 4.59C6.33 4.52 6.88 4.5 7.5 4.5H10.96"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.02 4.5H16.5C17.12 4.5 17.67 4.52 18.16 4.59C20.79 4.88 21.5 6.12 21.5 9.5V14.5C21.5 17.88 20.79 19.12 18.16 19.41C17.67 19.48 17.12 19.5 16.5 19.5H15.02"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2V22"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.0946 12H11.1036"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.0946 12H7.10359"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ScanIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9.5V14.5C17 16.5 16 17.5 14 17.5H10C8 17.5 7 16.5 7 14.5V9.5C7 7.5 8 6.5 10 6.5H14C16 6.5 17 7.5 17 9.5Z"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12H5"
        stroke={props.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AttachmentIcons = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={22}
      viewBox="0 0 11 22"
      fill="none"
      {...props}>
      <Path
        d="M9.12508 5.49984V16.0415C9.12508 18.0673 7.48425 19.7082 5.45841 19.7082C3.43258 19.7082 1.79175 18.0673 1.79175 16.0415V4.58317C1.79175 3.31817 2.81841 2.2915 4.08341 2.2915C5.34841 2.2915 6.37508 3.31817 6.37508 4.58317V14.2082C6.37508 14.7123 5.96258 15.1248 5.45841 15.1248C4.95425 15.1248 4.54175 14.7123 4.54175 14.2082V5.49984H3.16675V14.2082C3.16675 15.4732 4.19341 16.4998 5.45841 16.4998C6.72341 16.4998 7.75008 15.4732 7.75008 14.2082V4.58317C7.75008 2.55734 6.10925 0.916504 4.08341 0.916504C2.05758 0.916504 0.416748 2.55734 0.416748 4.58317V16.0415C0.416748 18.8282 2.67175 21.0832 5.45841 21.0832C8.24508 21.0832 10.5001 18.8282 10.5001 16.0415V5.49984H9.12508Z"
        fill="#8C8F90"
      />
    </Svg>
  );
};

export const ArrangeSquareIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={props.fillPath}
        strokeWidth={props.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.15 13.8198L14.11 16.8598"
        stroke={props.fillPath}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.84998 13.8198H17.15"
        stroke={props.fillPath}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.84998 10.1801L9.88998 7.14014"
        stroke={props.fillPath}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.15 10.1802H6.84998"
        stroke={props.fillPath}
        strokeWidth={props.strokeWidth}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AutoGenerateTokenIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M6.69995 9.25977L11.9999 12.3298L17.2599 9.27976"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 17.7698V12.3198"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.76 6.28986L7.56 8.06986C6.84 8.46986 6.23999 9.47985 6.23999 10.3099V13.6999C6.23999 14.5299 6.83 15.5399 7.56 15.9399L10.76 17.7199C11.44 18.0999 12.56 18.0999 13.25 17.7199L16.45 15.9399C17.17 15.5399 17.77 14.5299 17.77 13.6999V10.2999C17.77 9.46986 17.18 8.45985 16.45 8.05985L13.25 6.27985C12.56 5.89985 11.44 5.89986 10.76 6.28986Z"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UnclaimedIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M3.17004 7.43994L12 12.5499L20.77 7.46991"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.92999 21.52L4.59 18.56C3.38 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38 6.11002 4.59 5.44002L9.92999 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.54 22 16.27 21.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C21.21 14 23 15.79 23 18Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0699 19.0402L17.95 16.9302"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0499 16.96L17.9299 19.0699"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AddManuallyToken = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M23 18C23 18.75 22.79 19.46 22.42 20.06C22.21 20.42 21.94 20.74 21.63 21C20.93 21.63 20.01 22 19 22C17.78 22 16.69 21.45 15.97 20.59C15.95 20.56 15.92 20.54 15.9 20.51C15.78 20.37 15.67 20.22 15.58 20.06C15.21 19.46 15 18.75 15 18C15 16.74 15.58 15.61 16.5 14.88C17.19 14.33 18.06 14 19 14C20 14 20.9 14.36 21.6 14.97C21.72 15.06 21.83 15.17 21.93 15.28C22.59 16 23 16.95 23 18Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.49 17.98H17.51"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 16.52V19.51"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.17001 7.43994L12 12.5499L20.77 7.46991"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21.61V12.54"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.61 9.17V14.83C21.61 14.88 21.61 14.92 21.6 14.97C20.9 14.36 20 14 19 14C18.06 14 17.19 14.33 16.5 14.88C15.58 15.61 15 16.74 15 18C15 18.75 15.21 19.46 15.58 20.06C15.67 20.22 15.78 20.37 15.9 20.51L14.07 21.52C12.93 22.16 11.07 22.16 9.93001 21.52L4.59001 18.56C3.38001 17.89 2.39001 16.21 2.39001 14.83V9.17C2.39001 7.79 3.38001 6.11002 4.59001 5.44002L9.93001 2.48C11.07 1.84 12.93 1.84 14.07 2.48L19.41 5.44002C20.62 6.11002 21.61 7.79 21.61 9.17Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const FolderIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
        stroke="#005DFF"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};

export const CalendarIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M8 2V5"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V5"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 9.08984H20.5"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 15.7698L15.6701 19.3098C15.5301 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.4201 17.9798C22.0301 17.3698 22.3201 16.6598 21.4201 15.7598C20.5301 14.8698 19.82 15.1598 19.21 15.7698Z"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7 16.2798C19 17.3598 19.84 18.1998 20.92 18.4998"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
        stroke="#8C8F91"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9955 13.7002H12.0045"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 13.7002H8.30329"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.29431 16.7002H8.30329"
        stroke="#8C8F91"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const UserIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21"
        stroke={props?.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke={props?.fillPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const LogoutIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M17.4399 14.62L19.9999 12.06L17.4399 9.5"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.75977 12.0601H19.9298"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SettingIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const InfoIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11V16"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9502 8H12.0502V8.1H11.9502V8Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const EmailIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={props.fillPath}
        strokeWidth={1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={props.fillPath}
        strokeWidth={1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const MessageIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M18.4701 16.83L18.8601 19.99C18.9601 20.82 18.0701 21.4 17.3601 20.97L13.1701 18.48C12.7101 18.48 12.2601 18.45 11.8201 18.39C12.5601 17.52 13.0001 16.42 13.0001 15.23C13.0001 12.39 10.5401 10.09 7.50009 10.09C6.34009 10.09 5.2701 10.42 4.3801 11C4.3501 10.75 4.34009 10.5 4.34009 10.24C4.34009 5.68999 8.29009 2 13.1701 2C18.0501 2 22.0001 5.68999 22.0001 10.24C22.0001 12.94 20.6101 15.33 18.4701 16.83Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 15.23C13 16.42 12.56 17.5201 11.82 18.3901C10.83 19.5901 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.3301C2.86 18.4001 2 16.91 2 15.23C2 13.47 2.94 11.9201 4.38 11.0001C5.27 10.4201 6.34 10.0901 7.5 10.0901C10.54 10.0901 13 12.39 13 15.23Z"
        stroke="#2A4153"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const NotificationIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M12.0201 2.90991C8.71009 2.90991 6.02009 5.59991 6.02009 8.90991V11.7999C6.02009 12.4099 5.76009 13.3399 5.45009 13.8599L4.30009 15.7699C3.59009 16.9499 4.08009 18.2599 5.38009 18.6999C9.69009 20.1399 14.3401 20.1399 18.6501 18.6999C19.8601 18.2999 20.3901 16.8699 19.7301 15.7699L18.5801 13.8599C18.2801 13.3399 18.0201 12.4099 18.0201 11.7999V8.90991C18.0201 5.60991 15.3201 2.90991 12.0201 2.90991Z"
        stroke={props?.fillPath}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
        stroke={props?.fillPath}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
        stroke={props?.fillPath}
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
    </Svg>
  );
};
export const UsersIcon = props => {
  return (
    <Svg
      width={12}
      height={11}
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_3392_82988)">
        <Path
          d="M9.3248 2.01917C9.3248 3.13211 8.41935 4.03834 7.30563 4.03834C6.82932 4.03834 6.39075 3.8725 6.04492 3.59505C6.36167 3.1494 6.54795 2.60551 6.54795 2.01917C6.54795 1.43283 6.36167 0.888938 6.04492 0.44329C6.39075 0.165841 6.82932 0 7.30563 0C8.41935 0 9.3248 0.905444 9.3248 2.01917Z"
          fill="#FFB36D"
        />
        <Path
          d="M11.1269 7.19721V10.628H8.35001V7.19721C8.35001 6.51341 8.06942 5.89328 7.6167 5.44763H9.37807C10.3425 5.44763 11.1269 6.23282 11.1269 7.19721Z"
          fill="#FFB36D"
        />
        <Path
          d="M5.84059 2.01917C5.84059 2.39015 5.73998 2.73834 5.56392 3.0378C5.49947 3.14862 5.42402 3.25237 5.33992 3.34825C5.26132 3.43786 5.17565 3.52038 5.08212 3.59505C4.73629 3.8725 4.29772 4.03834 3.82142 4.03834C2.70848 4.03834 1.80225 3.13211 1.80225 2.01917C1.80225 0.90623 2.70848 0 3.82142 0C4.29772 0 4.73629 0.165841 5.08212 0.44329C5.17565 0.517172 5.26211 0.600485 5.33992 0.690086C5.42481 0.785975 5.49947 0.889724 5.56392 1.00055C5.73998 1.3 5.84059 1.64819 5.84059 2.01917Z"
          fill="#FFB36D"
        />
        <Path
          d="M7.64282 7.19721V10.628H0V7.19721C0 6.23282 0.784403 5.44763 1.7488 5.44763H5.89403C6.85842 5.44763 7.64282 6.23282 7.64282 7.19721Z"
          fill="#FFB36D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3392_82988">
          <Rect width={11.1271} height={10.628} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const SortIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M3 7H21"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M6 12H18"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M10 17H14"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export const TransferTokenIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="#005DFF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.15 13.8198L14.11 16.8598"
      stroke="#005DFF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.84998 13.8198H17.15"
      stroke="#005DFF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.84998 10.1801L9.88998 7.14014"
      stroke="#005DFF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.15 10.1802H6.84998"
      stroke="#005DFF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const MobilePhone = props => (
  <Svg
    width={18}
    height={22}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z"
      stroke={props.fillPath}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11 4.5H7"
      stroke={props.fillPath}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.0002 18.1C9.85624 18.1 10.5502 17.406 10.5502 16.55C10.5502 15.694 9.85624 15 9.0002 15C8.14415 15 7.4502 15.694 7.4502 16.55C7.4502 17.406 8.14415 18.1 9.0002 18.1Z"
      stroke={props.fillPath}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LockIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5 21L19 21C19.5523 21 20 20.5523 20 20L20 10C20 9.44772 19.5523 9 19 9L5 9C4.44772 9 4 9.44772 4 10L4 20C4 20.5523 4.44772 21 5 21Z"
      stroke={props.fillPath}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.23077 9L14.7692 9C14.8967 9 15 8.89668 15 8.76923L15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6L9 8.76923C9 8.89668 9.10332 9 9.23077 9Z"
      stroke={props.fillPath}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const NavigationIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.fillPath}
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Polygon points="3 11 22 2 13 21 11 13 3 11" />
  </Svg>
);

export const WalletIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <G id="vuesax/linear/empty-wallet">
      <G id="Group">
        <Path
          id="Vector"
          d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
          stroke={props.fillPath}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          id="Vector_2"
          d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
          stroke={props.fillPath}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        id="Vector_3"
        d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="Vector_4"
        d="M7 12H14"
        stroke={props.fillPath}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export const FeedbackIcon = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.24999 18L5.24999 20.25V15.75H2.25C1.85217 15.75 1.47064 15.5919 1.18934 15.3106C0.908034 15.0293 0.749999 14.6478 0.749999 14.25V2.25C0.749999 1.85217 0.908034 1.47064 1.18934 1.18934C1.47064 0.908034 1.85217 0.749999 2.25 0.749999H18.75C19.1478 0.749999 19.5293 0.908034 19.8106 1.18934C20.0919 1.47064 20.25 1.85217 20.25 2.25V6.71484"
      stroke={props.pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.24999 5.24999H15.75"
      stroke={props.pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.24999 9.74999H8.24999"
      stroke={props.pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.25 18.75H20.25V23.25L15.75 18.75H11.25V9.74999H23.25V18.75Z"
      stroke={props.pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.5 15H15"
      stroke={props.pathFill}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const FeedbackImage = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    width={757.44757}
    height={598.07813}
    viewBox="0 0 757.44757 598.07813"
    {...props}>
    <Path
      d="M338.60959,586.94076l-48.00023-16.77038a164.05238,164.05238,0,0,1,3.45206-78.858c18.20947,43.8392,75.00379,56.09587,106.53805,91.57891a98.67846,98.67846,0,0,1,22.8662,82.41843l9.191,34.8705a165.3536,165.3536,0,0,1-118.31069-71.9111,159.72417,159.72417,0,0,1-17.6817-35.95729C317.38423,590.84226,338.60959,586.94076,338.60959,586.94076Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#f2f2f2"
    />
    <Path
      d="M393.71825,482.24087l-33.52-38.23191a164.05253,164.05253,0,0,1,41.83458-66.93552c-5.73771,47.1226,37.65892,85.75617,47.63328,132.167a98.67843,98.67843,0,0,1-20.68123,82.99366L419.814,627.10991A165.35361,165.35361,0,0,1,352.2497,506.26419a159.72436,159.72436,0,0,1,2.316-40.00257C373.32329,475.18514,393.71825,482.24087,393.71825,482.24087Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#f2f2f2"
    />
    <Path
      d="M673.77886,604.79173H431.42007c-7.12119,0-12.91161,1.43371-12.91161,3.20516v94.79484H686.72379V607.99689C686.72379,606.22544,680.93357,604.79173,673.77886,604.79173Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#f2f2f2"
    />
    <Path
      d="M971.2169,703.69336l-748.75.30733a1.19068,1.19068,0,1,1,0-2.38136l748.75-.30734a1.19069,1.19069,0,0,1,0,2.38137Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#cacaca"
    />
    <Polygon
      points="271.281 546.06 269.016 564.511 339.105 582.027 342.448 554.795 271.281 546.06"
      fill="#9e616a"
    />
    <Path
      d="M505.93311,692.55079l-1.85862,29.69309-12.62929-1.55012-22.79464,25.64912a7.94793,7.94793,0,0,1-13.83023-6.24768l4.30739-35.09364,13.23474-4.51562-12.20241-3.8951,1.62405-13.23171Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Polygon
      points="476.038 555.143 494.076 559.638 519.999 492.205 493.377 485.57 476.038 555.143"
      fill="#9e616a"
    />
    <Path
      d="M743.35379,735.84172l-22.68-25.75,3.08-12.35-3.21-.6h-.02l-20.04-3.74-5.98-1.12-14.5,42.7,12.93994,3.23,5.35-11.64,2.24,10.69.63,2.99,34.31,8.55a7.94316,7.94316,0,0,0,7.88-12.96Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      d="M545.96378,699.09172l6.54-1.03c-7.02,7.31-13.76,12.14-20.16,13.64l3.1-10.96Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      d="M737.00382,666.18175c-6.19,13.84-10.65,22.7-10.65,22.7l-2.21-1.16-5.82-3.05-13.86-7.27-2.38-1.25.68-13.22,3.02-58.46,1.28-24.64-52.83,27.92-62.51,33.04q-3.84,6.68994-7.63,13.02l-42.47-29.12994,43.1-62.89,25.12-11.74-5.42-1.05a39.77506,39.77506,0,0,1,4.68-5.59l1.9-1.07s119.53-65.84,153.92-32.08a27.35348,27.35348,0,0,1,6.5,10.71C783.21378,554.83171,753.76377,628.74174,737.00382,666.18175Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      d="M710.70377,728.11174a27.79981,27.79981,0,0,1-10.17,9.15,52.3735,52.3735,0,0,1-10.96,4.47c-50.68,14.81-161.59-14.62-161.59-14.62l4.36-15.41,3.1-10.96,10.52-1.65,6.54-1.03,78.22-12.27-21.55-14.78-25.08-17.2-42.47-29.12994-50.9-22.89c-59-47-9.6-99.7-9.6-99.7l33.02-23.4,10.72-7.6,65.86,33.7,19.12,45.26,5.88,13.91,38.51,43.79,48.53,55.18006.38.43a34.8231,34.8231,0,0,1,3.95,3.5c.45.44.92.93,1.4,1.46a46.90651,46.90651,0,0,1,9.82995,16.35,40.85,40.85,0,0,1,2.22,12.42.04536.04536,0,0,1,0,.05C720.76377,705.9517,718.2338,716.34172,710.70377,728.11174Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      d="M458.549,524.33518c-2.62646-.793-3.96282-1.75853-4.2071-3.03738-.3582-1.877,1.75216-3.55039,4.19588-5.48941,1.704-1.35053,6.19983-3.70165,4.55646-4.42522-24.91765-10.971,35.66192-166.72964,53.24008-184.42874,3.57163-3.59618,3.14584-10.89685,7.90621-17.39222,13.00248-17.73879,24.41027-20.95281,47.13588-27.354q2.76712-.77975,5.76577-1.63306c2.5866-.738-.14044,6.60989,1.20774,1.6835,1.49866-5.47508,3.048-11.1374,6.76936-13.84511l.24236-.17661.29881.01933c6.88626.45551,29.37007,4.22965,40.902,12.37151l.15889.1138.09255.17141c2.12607,3.96521.62249,9.94851-.83153,15.73412-1.19451,4.75,1.67831-2.7649,2.82139-.32351,8.73981,18.66113,23.76669,22.886,23.91921,22.92864l.74668.20182-.14881.75844c3.92809,20.3676-23.01519,83.47039-28.83984,125.96228-5.91755,43.16963,27.81717,91.79045-21.75714,83.617.11368.37526,18.29643,37.703,18,38C616.2164,572.30605,468.44843,527.32414,458.549,524.33518Zm150.96363,53.191Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#e6e6e6"
    />
    <Path
      d="M786.54829,295.317a14.17322,14.17322,0,0,1-13.99962,16.62316l-16.64471,47.537L740.04335,338.657l18.2377-41.95a14.25,14.25,0,0,1,28.26724-1.39Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#9e616a"
    />
    <Path
      d="M713.29736,427.78876l-30.17018-6.52363c-54.41821-17.23119-73.07744-38.4963-79.161-53.305-6.4913-15.8006-.57594-27.36536-.3201-27.8485l.15465-.20839L623.318,320.90936a24.40817,24.40817,0,0,1,36.47965,2.75621L699.431,375.99748l18.35267-24.864,8.90163-7.12282,4.80184-13.45988,18.41586-20.0337,21.32148,9.86593L763.197,368.82636l-10.74113,6.5679-.50639,7.13175-.17662.20841Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#e6e6e6"
    />
    <Path
      d="M562.138,579.60036c-.14884,0-.29768-.00293-.448-.00879a10.89015,10.89015,0,0,1-8.75714-4.98052,123.02532,123.02532,0,0,0-25.899-28.05451c-6.07808-4.85808-12.42965-9.37522-18.57152-13.74426-15.84556-11.26682-30.768-21.87818-39.05154-36.54037-18.0605-31.97192,3.20841-76.504,33.593-96.47517,34.08055-22.39874,78.90809-25.91216,122.27368-26.3726q6.7603-.07148,13.52869-.07111h0a1289.89352,1289.89352,0,0,1,232.95207,21.30043c25.55289,4.71437,52.30015,10.48965,73.79414,24.50518,21.36642,13.93268,34.3533,35.87318,33.08636,55.89788-1.84982,29.23274-32.83854,51.07573-61.05656,56.7865-26.89609,5.43875-54.837,1.7633-84.41724-2.12917-6.53046-.85855-13.28234-1.74717-19.95944-2.51921-72.56606-8.38762-208.88606,17.46515-214.65328,18.57006l-5.72176,1.09537-22.20079,28.56922A10.65412,10.65412,0,0,1,562.138,579.60036Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2266f7"
    />
    <Path
      d="M885.28275,436.99287h-306.712a6.67338,6.67338,0,0,1,0-13.34675h306.712a6.67338,6.67338,0,0,1,0,13.34675Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#fff"
    />
    <Path
      d="M885.28275,477.95485h-306.712a6.67338,6.67338,0,1,1-.01394-13.34675H885.28275a6.67338,6.67338,0,0,1,0,13.34675Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#fff"
    />
    <Path
      d="M614.31349,518.91586H578.57077a6.67338,6.67338,0,0,1,0-13.34675h35.74272a6.67338,6.67338,0,0,1,0,13.34675Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#fff"
    />
    <Circle cx={565.83357} cy={100.53424} r={45.68243} fill="#fff" />
    <Path
      d="M787.10983,297.73551a46.24011,46.24011,0,1,1,46.24011-46.24038A46.29285,46.29285,0,0,1,787.10983,297.73551Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#3f3d56"
    />
    <Path
      d="M783.68957,269.75251c-.09739,0-.19478-.00317-.29217-.00792a5.97388,5.97388,0,0,1-4.42841-2.30091l-7.63433-9.81488a5.97633,5.97633,0,0,1,1.04752-8.3881l.27475-.21378a5.97576,5.97576,0,0,1,8.38968,1.04832,4.35929,4.35929,0,0,0,6.60185.32146l15.50064-16.36447a5.98529,5.98529,0,0,1,8.45065-.22962l.25416.24229a5.97567,5.97567,0,0,1,.228,8.44985l-24.055,25.39075A5.97021,5.97021,0,0,1,783.68957,269.75251Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#fff"
    />
    <Path
      d="M552.17583,488.19635a14.17318,14.17318,0,0,1-11.046-18.71644l-39.33745-31.45436,24.89909-8.06676,33.53821,31.10632a14.25,14.25,0,0,1-8.05386,27.13124Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#9e616a"
    />
    <Path
      d="M451.45521,375.19266l16.151-26.30479c34.28757-45.63571,60.53372-56.1956,76.52163-57.02926,17.05885-.88968,26.01058,8.52317,26.38166,8.92463l.14539.215,11.45472,24.70792a24.40818,24.40818,0,0,1-14.68682,33.5061l-62.50737,20.05656,17.37916,25.55394,3.77128,10.75877,11.10874,8.9901,12.80073,24.01321-16.37284,16.8485L490.5549,441.80908l-2.63823-12.31052-6.56118-2.84064-.13812-.2357Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#e6e6e6"
    />
    <Path
      id="b7175576-f1ba-43ba-8f76-518314c256be-519"
      data-name="Path 9"
      d="M673.8594,270.987l.04062.00361a8.1766,8.1766,0,0,0,8.84983-7.44272l3.955-45.4592a60.98049,60.98049,0,0,0-2.72981-24.12635,61.96378,61.96378,0,0,0-29.59812-35.42544,61.016,61.016,0,0,0-23.43759-6.99813c-33.56671-2.97341-45.77932,4.09448-66.16174,55.39406s-3.961,45.52846-3.961,45.52846a8.19,8.19,0,0,0,.36784,3.24556,8.32408,8.32408,0,0,0,3.98759,4.75873,8.217,8.217,0,0,0,3.13393.93476c39.72491,9.81754,79.81169,20.16315,105.56025,9.58725Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      id="a02f472c-6a06-41c7-9b05-293ddf5937fe-520"
      data-name="Ellipse 1"
      d="M599.53658,194.79636a44.97978,44.97978,0,0,0,46.20029,69.05639,44.45579,44.45579,0,0,0,28.49717-19.025,44.97977,44.97977,0,0,0-46.16628-69.03641A44.45579,44.45579,0,0,0,599.53644,194.798Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#9e616a"
    />
    <Path
      id="adbc6b4a-ced6-4270-bb29-8c8f4fd87f84-521"
      data-name="Path 10"
      d="M700.80119,223.04266a48.239,48.239,0,0,0-2.15943-19.0811c-.55225-15.0763-5.01789-28.70553-23.40593-28.01025a48.26085,48.26085,0,0,0-18.41325-5.51678l-9.09463-.8372q-.15321-.01422-.30651-.02746a48.15749,48.15749,0,0,0-52.12328,43.83436l-.07922.91053,19.24118,1.7523,8.15818-17.76473-.28572,18.48538,9.93774.90885,4.11416-8.96272-.14194,9.32023c14.83181,12.889,37.19642,13.42145,64.47081,5.90009Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
    <Path
      id="e837c95d-b162-450d-9836-a61223397ab5-522"
      data-name="Path 13"
      d="M639.57965,266.56125a8.04606,8.04606,0,0,1-.72072,4.37124,8.22891,8.22891,0,0,1-1.25,1.92524,8.32335,8.32335,0,0,1-1.45565,1.315,8.16287,8.16287,0,0,1-5.45126,1.461q-.1806-.01743-.36063-.04159t-.3593-.05679q-.18113-.03107-.35968-.07214t-.3582-.089l-6.72353-1.836-7.66047-20.92136-1.602,18.41342-30.57308-8.29381,6.79815-78.13881,52.04769,4.78011-1.41731,1.383a35.94855,35.94855,0,0,0-9.64187,16.91737,58.59929,58.59929,0,0,0-1.35262,19.89041,105.67258,105.67258,0,0,0,3.85707,19.87558,155.74268,155.74268,0,0,0,5.9916,16.90051A8.21713,8.21713,0,0,1,639.57965,266.56125Z"
      transform="translate(-221.27621 -150.96093)"
      fill="#2f2e41"
    />
  </Svg>
);
