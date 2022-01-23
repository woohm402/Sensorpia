import GoogleMapsComponent from '../googlemap/Google.container'
import {
  ContactUsTitle,
  ContactUsBigWrapper,
  ContactUsDetails,
  ContactUsMapWrapper,
} from './ContactUs.styles'
interface IProps {
  data: any
}

const ContactUsUI = ({ data }: IProps) => {
  return (
    <>
      <ContactUsBigWrapper>
        <ContactUsTitle>{data.contactUs.title}</ContactUsTitle>
        {data.contactUs.details.map((data: any, i: number) => (
          <ContactUsDetails key={i}>{data.content}</ContactUsDetails>
        ))}
        <ContactUsMapWrapper>
          <GoogleMapsComponent />
        </ContactUsMapWrapper>
      </ContactUsBigWrapper>
    </>
  )
}

export default ContactUsUI
