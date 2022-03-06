import { useRouter } from 'next/dist/client/router';

import {
  ScrollArrowImageWrapper,
  SideBarMenusInnerWrapper,
  SideBarMenusLineDivider,
  SideBarMenusWrapper,
  SideBarProductsIndividualIcon,
  SideBarProductsIndividualText,
  SideBarProductsIndividualWrapper,
  SideBarProductsSubMenusWrapper,
  SideBarTitleWrapper,
  SideBarWrapper,
} from './SideBar.styles';
import { useLanguageContext } from '../../context/language/language';
import { Fragment } from 'react';
import { replaceValue } from '../../lib/replaceValue';
import {
  DUMMY_PRODUCT_PAGE,
  DUMMY_PRODUCT_SECTION,
} from '../../lib/dummyProductPage';
import { useAdminContext } from '../../context/admin/admin';

interface IProps {
  onClickMenu: any;
  buttonName: any;
}

const SideBarUI = ({ onClickMenu, buttonName }: IProps) => {
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  const { isAdmin } = useAdminContext();
  const {
    language,
    languageData: data,
    setCurrentLanguageData,
  } = useLanguageContext();
  const onClickScrollArrow = () => {
    window.scrollTo(0, 0);
  };
  const item = Number(router.query.item);

  return (
    <SideBarWrapper>
      <SideBarTitleWrapper>
        {router.pathname === '/products'
          ? data.sidebar.name[0]
          : router.pathname === '/application'
          ? data.sidebar.name[1]
          : router.pathname === '/careers' && language === 'kor'
          ? data.sidebar.name[3]
          : data.sidebar.name[2]}
      </SideBarTitleWrapper>
      <SideBarMenusWrapper>
        {router.pathname === '/products' ? (
          <>
            {data.products.map((value, index) => (
              <Fragment key={value.name + index}>
                <SideBarMenusInnerWrapper
                  onClick={() => {
                    router.push({
                      query: {
                        item: index,
                        keyword: value.data.subSections[0].name,
                      },
                    });
                  }}
                  $color={pageIndex == index}
                >
                  {isAdmin && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentLanguageData(
                            replaceValue(
                              data,
                              'products',
                              data.products.filter(
                                (item) => item.name !== value.name
                              )
                            )
                          );
                        }}
                      >
                        삭제
                      </button>
                      <button>수정</button>
                    </>
                  )}
                  {value.name}
                </SideBarMenusInnerWrapper>
                {value.data.subSections.length > 1 && (
                  <SideBarProductsSubMenusWrapper>
                    {value.data.subSections.map((section, i) => (
                      <SideBarProductsIndividualWrapper key={section.name + i}>
                        {isAdmin && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentLanguageData(
                                  replaceValue(
                                    data,
                                    `products.${index}.data.subSections`,
                                    value.data.subSections.filter(
                                      (item) => item.name !== section.name
                                    )
                                  )
                                );
                              }}
                            >
                              삭제
                            </button>
                            <button>수정</button>
                          </>
                        )}
                        <SideBarProductsIndividualIcon>
                          -
                        </SideBarProductsIndividualIcon>
                        <SideBarProductsIndividualText
                          onClick={() => {
                            router.push({
                              query: {
                                item: index,
                                keyword: section.name,
                              },
                            });
                          }}
                          $color={section.name === buttonName && index === item}
                        >
                          {section.name}
                        </SideBarProductsIndividualText>
                      </SideBarProductsIndividualWrapper>
                    ))}
                  </SideBarProductsSubMenusWrapper>
                )}
                <button
                  style={{ margin: '8px 0' }}
                  onClick={() => {
                    const subSections = data.products[index].data.subSections;
                    if (
                      subSections.find(
                        (s) => s.name === DUMMY_PRODUCT_SECTION.name
                      )
                    )
                      return;
                    setCurrentLanguageData(
                      replaceValue(
                        data,
                        `products.${index}.data.subSections`,
                        subSections.concat(DUMMY_PRODUCT_SECTION)
                      )
                    );
                  }}
                  disabled={
                    !!data.products[index].data.subSections.find(
                      (s) => s.name === DUMMY_PRODUCT_SECTION.name
                    )
                  }
                >
                  하위 페이지 추가
                </button>
                {data.products.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </Fragment>
            ))}
            <button
              style={{ width: '100%', marginTop: 16 }}
              onClick={() => {
                if (
                  data.products.find((p) => p.name === DUMMY_PRODUCT_PAGE.name)
                )
                  return;
                setCurrentLanguageData(
                  replaceValue(
                    data,
                    'products',
                    data?.products.concat(DUMMY_PRODUCT_PAGE)
                  )
                );
              }}
              disabled={
                !!data.products.find((p) => p.name === DUMMY_PRODUCT_PAGE.name)
              }
            >
              페이지 추가
            </button>
          </>
        ) : router.pathname === '/application' ? (
          data.applications.map((value, i) => (
            <Fragment key={i}>
              <SideBarMenusInnerWrapper
                id={`${i}`}
                onClick={onClickMenu}
                $color={pageIndex === i}
              >
                {value.name}
              </SideBarMenusInnerWrapper>
              {data.applications.length - 1 !== i && (
                <SideBarMenusLineDivider />
              )}
            </Fragment>
          ))
        ) : router.pathname === '/careers' && language === 'kor' ? (
          data.careers?.map((value, i, arr) => (
            <Fragment key={i}>
              <SideBarMenusInnerWrapper
                id={`${i}`}
                onClick={onClickMenu}
                //@ts-ignore
                $color={pageIndex === i}
              >
                {value.name}
              </SideBarMenusInnerWrapper>
              {arr.length - 1 !== i && <SideBarMenusLineDivider />}
            </Fragment>
          ))
        ) : (
          data.aboutUs.map((value, i) => (
            <Fragment key={i}>
              <SideBarMenusInnerWrapper
                id={`${i}`}
                onClick={onClickMenu}
                $color={pageIndex === i}
              >
                {value.name}
              </SideBarMenusInnerWrapper>
              {data.aboutUs.length - 1 !== i && <SideBarMenusLineDivider />}
            </Fragment>
          ))
        )}
      </SideBarMenusWrapper>
      {router.pathname === '/aboutUs' && (
        <ScrollArrowImageWrapper
          onClick={onClickScrollArrow}
          data={data.aboutUs[pageIndex]?.commonArrow}
        />
      )}
    </SideBarWrapper>
  );
};

export default SideBarUI;
