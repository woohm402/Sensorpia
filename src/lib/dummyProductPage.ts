export const DUMMY_PRODUCT_PAGE = {
  name: '[FIXME] Title',
  data: {
    subSections: [
      {
        name: '[FIXME] Title',
        mainImage:
          'https://sensorpia.s3.ap-northeast-2.amazonaws.com/images/uke15xmfgf706m6qx0ve4.png',
        captions: [],
        contents: [
          {
            title: '[FIXME] Title',
            descriptions: ['[FIXME] Description'],
            images: [
              {
                src: 'https://sensorpia.s3.ap-northeast-2.amazonaws.com/images/l4jk7g250artabaa32m7l.png',
                text: '[FIXME] Text',
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
