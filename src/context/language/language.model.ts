export interface Language {
  language: 'en' | 'kor';
  setLanguage: (lng: Language['language']) => void;
  languageData: LanguageData | null;
  fetchLanguage: () => Promise<void>;
  enLanguage: LanguageData | null;
  korLanguage: LanguageData | null;
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
}
export interface Footer {
  Address: string;
  Others: string[];
}
export interface Main {
  logo: string;
  Home: string;
  Product: string;
  Applications: string;
  AboutUs: string;
  ContactUs: string;
  Careers: string;
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
  specificationButton: string;
  satelliteImageNames: SatelliteImageNames;
  defenseImageNames: DefenseImageNames;
}
export interface Slider {
  images: string[];
}
export interface SatelliteEntityOrDefenseEntity {
  image: string;
  name: string;
  download: string;
}
export interface MagneticTorquerEntity {
  image: string;
  name: null;
  download: string;
}
export interface SatelliteImageNames {
  SatelliteOne: string;
  SatelliteTwo: string;
  download: string[];
}
export interface DefenseImageNames {
  DefenseOne: string;
  DefenseTwo: string;
}
export interface ProductsEntity {
  name: string;
  layout: string;
  data: Data;
}
export interface Data {
  subSections: SubSectionsEntity[];
}
export interface SubSectionsEntity {
  name: string;
  mainImage: string;
  subImagesAndTexts: SubImagesAndTextsEntity[];
  textExplanationTitle: string;
  textExplanationDetails: string[];
}
export interface SubImagesAndTextsEntity {
  image: string;
  text: string;
  pdf: string;
  title: string;
  details: string[];
}
export interface ApplicationsEntity {
  name: string;
  layout: string;
  data: Data1;
}
export interface Data1 {
  mainImage: string[];
  subImageAndDetails: SubImageAndDetailsEntity[];
  mainTexts: string[];
}
export interface SubImageAndDetailsEntity {
  image: string;
  title: string;
  details: string[];
}
export interface AboutUsEntity {
  name: string;
  layout: string;
  commonArrow: string;
  arrow: string;
  data: Data2;
}
export interface Data2 {
  mainImage: string;
  circleAboveTexts: string[];
  circleBelowTexts: string[];
  circleTexts: string[];
  subTitle: string;
  subClientImages: string[];
  mainTitle: string;
  explanations: string[];
  mainImages: string[];
  years: string[];
}
export interface ContactUs {
  title: string;
  details: DetailsEntity[];
}
export interface DetailsEntity {
  content: string;
}
export interface CareersEntity {
  name: string;
  images: string[];
  layout: string;
  circles: (CirclesEntity | string)[];
  subTitle: string;
  secondTitle: string;
  principle: string[];
}
export interface CirclesEntity {
  title: string;
  content: string;
}
export interface Sidebar {
  name: string[];
  Products: string[];
  Application: string[];
  AboutUs: string[];
}
export interface NavBar {
  list: string[];
  products: string[];
  applications: string[];
  aboutUs: string[];
  careers?: string[];
}
export interface SliderText {
  SliderMainText: string;
  SliderSubText: string;
}
