export interface Language {
  language: 'en' | 'kor';
  setLanguage: (lng: Language['language']) => void;
  isEdited: boolean;
  languageData: LanguageData | null;
  fetchLanguage: () => Promise<void>;
  handleSave: () => Promise<void>;
  setCurrentLanguageData: (e: LanguageData) => void;
}

export interface LanguageData {
  title: string;
  footer: Footer;
  main: Main;
  products: ProductsEntity[];
  applications: ApplicationsEntity[];
  aboutUs: AboutUsEntity[];
  contactUs: ContactUs;
  careers?: CareersEntity[];
  sidebar: Sidebar;
  navBar: NavBar;
  SliderText: SliderText;
  privacy_policy: string;
  terms_of_service: string;
}
interface Footer {
  Address: string;
  Others: string[];
}
interface Main {
  logo: string;
  Home: string;
  Product: string;
  Applications: string;
  AboutUs: string;
  ContactUs: string;
  Careers?: string;
  Eng: string;
  Kor: string;
  slider: Slider;
  satellite: SatelliteEntityOrDefenseEntity[];
  defense: SatelliteEntityOrDefenseEntity[];
  magneticTorquer: MagneticTorquerEntity[];
  title: string;
  mainProductOneName: string;
  mainProductTwoName: string;
  mainProductThreeName: string;
  satelliteImageNames: SatelliteImageNames;
  defenseImageNames: DefenseImageNames;
}
interface Slider {
  images: string[];
}
interface SatelliteEntityOrDefenseEntity {
  image: string;
  name: string;
  download: string;
}
interface MagneticTorquerEntity {
  image: string;
  name: null;
  download: string;
}
interface SatelliteImageNames {
  SatelliteOne: string;
  SatelliteTwo: string;
  download: string[];
}
interface DefenseImageNames {
  DefenseOne: string;
  DefenseTwo: string;
}
interface ProductsEntity {
  name: string;
  data: Data;
}
interface Data {
  subSections: SubSectionsEntity[];
}
interface SubSectionsEntity {
  name: string;
  mainImage: string;
  captions: string[];
  contents: ProductContent[];
}

interface ProductContent {
  title: string;
  descriptions: string[];
  images: ProductContentImage[];
}

interface ProductContentImage {
  src: string;
  pdf: string;
  text: string;
}
interface ApplicationsEntity {
  name: string;
  layout: string;
  data: Data1;
}
interface Data1 {
  mainImage: string[];
  subImageAndDetails: SubImageAndDetailsEntity[];
  mainTexts: string[];
}
interface SubImageAndDetailsEntity {
  image: string;
  title: string;
  details: string[];
}
interface AboutUsEntity {
  name: string;
  layout: string;
  commonArrow: string;
  arrow: string;
  data: Data2;
}
interface Data2 {
  mainImage?: string;
  circleAboveTexts?: string[];
  circleBelowTexts?: string[];
  circleTexts?: string[];
  subTitle: string;
  subClientImages?: string[];
  mainTitle?: string;
  explanations?: string[];
  mainImages?: string[];
  years?: string[];
}
interface ContactUs {
  title: string;
  details: DetailsEntity[];
}
interface DetailsEntity {
  content: string;
}
interface CareersEntity {
  name?: string;
  images?: string[];
  layout?: string;
  circles?: (CirclesEntity | string)[];
  subTitle?: string;
  secondTitle?: string;
  principle?: string[];
}
interface CirclesEntity {
  title: string;
  content: string;
}
interface Sidebar {
  name: string[];
  Products: string[];
  Application: string[];
  AboutUs: string[];
}
interface NavBar {
  list: string[];
  products: string[];
  applications: string[];
  aboutUs: string[];
  careers?: string[];
}
interface SliderText {
  SliderMainText: string;
  SliderSubText: string;
}
