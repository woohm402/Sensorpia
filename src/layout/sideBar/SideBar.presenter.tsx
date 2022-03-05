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

interface IProps {
  onClickMenu: any;
  buttonName: any;
}

const SideBarUI = ({ onClickMenu, buttonName }: IProps) => {
  const router = useRouter();
  const pageIndex = Number(router.query.item);
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
              <Fragment key={index}>
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
                  {value.name}
                </SideBarMenusInnerWrapper>
                {value.data.subSections.length > 1 && (
                  <SideBarProductsSubMenusWrapper>
                    {value.data.subSections.map((data, i) => (
                      <SideBarProductsIndividualWrapper key={i}>
                        <SideBarProductsIndividualIcon>
                          -
                        </SideBarProductsIndividualIcon>
                        <SideBarProductsIndividualText
                          onClick={() => {
                            router.push({
                              query: {
                                item: index,
                                keyword: data.name,
                              },
                            });
                          }}
                          $color={data.name === buttonName}
                        >
                          {data.name}
                        </SideBarProductsIndividualText>
                      </SideBarProductsIndividualWrapper>
                    ))}
                  </SideBarProductsSubMenusWrapper>
                )}
                <button
                  style={{ margin: '8px 0' }}
                  onClick={() => {
                    const subSections = data.products[index].data.subSections;
                    if (subSections.find((s) => s.name === 'new page')) return;
                    setCurrentLanguageData(
                      replaceValue(
                        data,
                        `products.${index}.data.subSections`,
                        subSections.concat({
                          ...subSections[subSections.length - 1],
                          name: 'new page',
                        })
                      )
                    );
                  }}
                  disabled={
                    !!data.products[index].data.subSections.find(
                      (s) => s.name === 'new page'
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
                if (data.products.find((p) => p.name === 'new page')) return;
                setCurrentLanguageData(
                  replaceValue(
                    data,
                    'products',
                    data?.products.concat({
                      ...data.products[data.products.length - 1],
                      name: 'new page',
                    })
                  )
                );
              }}
              disabled={!!data.products.find((p) => p.name === 'new page')}
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
