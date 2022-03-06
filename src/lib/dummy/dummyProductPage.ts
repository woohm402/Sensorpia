import { LanguageData } from '../../context/language/language.model';
import { ArrayElement } from '../arrayElement';

export const DUMMY_PRODUCT_PAGE: ArrayElement<LanguageData['products']> = {
  name: 'Title',
  data: {
    subSections: [
      {
        name: 'Section',
        mainImage:
          'https://sensorpia.s3.ap-northeast-2.amazonaws.com/images/uke15xmfgf706m6qx0ve4.png',
        captions: ['Caption'],
        contents: [
          {
            title: 'Title',
            descriptions: ['Description'],
            images: [
              {
                src: 'https://sensorpia.s3.ap-northeast-2.amazonaws.com/images/l4jk7g250artabaa32m7l.png',
                text: 'Text',
                pdf: './211209_MS-17_LPGFM_Specification.pdf',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const DUMMY_PRODUCT_SECTION = DUMMY_PRODUCT_PAGE.data.subSections[0];
