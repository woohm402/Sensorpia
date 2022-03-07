import { LanguageData } from '../../context/language/language.model';
import { ArrayElement } from '../arrayElement';
import { DUMMY_PRODUCT_SECTION } from './dummyProductSection';

export const DUMMY_PRODUCT_PAGE: ArrayElement<LanguageData['products']> = {
  name: 'Title',
  data: { subSections: [DUMMY_PRODUCT_SECTION] },
};
