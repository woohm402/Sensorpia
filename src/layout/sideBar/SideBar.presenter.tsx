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
import { DUMMY_PRODUCT_PAGE } from '../../lib/dummy/dummyProductPage';
import { useAdminContext } from '../../context/admin/admin';
import { ContentTooltip } from '../../common/ContentTooltip/ContentTooltip';
import { DUMMY_PRODUCT_SECTION } from '../../lib/dummy/dummyProductSection';

interface IProps {
  onClickMenu: any;
  buttonName: any;
}

const SideBarUI = ({ onClickMenu, buttonName }: IProps) => {
  const router = useRouter();
  const pageIndex = Number(router.query.item);
  const keyword = router.query.keyword;
  const { isAdmin } = useAdminContext();
  const {
    language,
    languageData: data,
    setCurrentLanguageData,
  } = useLanguageContext();
  const onClickScrollArrow = () => {
    window.scrollTo(0, 0);
  };

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
                  {isAdmin && pageIndex === index && (
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
                      <ContentTooltip
                        onModify={(e) => {
                          setCurrentLanguageData(
                            replaceValue(data, `products.${index}`, {
                              ...value,
                              name: e,
                            })
                          );
                        }}
                      >
                        <button>수정</button>
                      </ContentTooltip>
                    </>
                  )}
                  {value.name}
                </SideBarMenusInnerWrapper>
                {value.data.subSections.length > 1 && (
                  <SideBarProductsSubMenusWrapper>
                    {value.data.subSections.map((section, i) => (
                      <SideBarProductsIndividualWrapper key={section.name + i}>
                        {isAdmin && keyword === section.name && (
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
                            <ContentTooltip
                              onModify={(name) => {
                                setCurrentLanguageData(
                                  replaceValue(
                                    data,
                                    `products.${index}.data.subSections.${i}`,
                                    { ...section, name }
                                  )
                                );
                              }}
                            >
                              <button>수정</button>
                            </ContentTooltip>
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
                          $color={
                            section.name === buttonName && index === pageIndex
                          }
                        >
                          {section.name}
                        </SideBarProductsIndividualText>
                      </SideBarProductsIndividualWrapper>
                    ))}
                  </SideBarProductsSubMenusWrapper>
                )}
                {isAdmin && index === pageIndex && (
                  <button
                    style={{ margin: '8px 0' }}
                    onClick={() => {
                      const subSections = data.products[index].data.subSections;
                      setCurrentLanguageData(
                        replaceValue(
                          data,
                          `products.${index}.data.subSections`,
                          subSections.concat(DUMMY_PRODUCT_SECTION)
                        )
                      );
                    }}
                  >
                    하위 페이지 추가
                  </button>
                )}
                {data.products.length - 1 !== index && (
                  <SideBarMenusLineDivider />
                )}
              </Fragment>
            ))}
            {isAdmin && (
              <button
                style={{ width: '100%', marginTop: 16 }}
                onClick={() =>
                  setCurrentLanguageData(
                    replaceValue(
                      data,
                      'products',
                      data?.products.concat(DUMMY_PRODUCT_PAGE)
                    )
                  )
                }
              >
                페이지 추가
              </button>
            )}
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
