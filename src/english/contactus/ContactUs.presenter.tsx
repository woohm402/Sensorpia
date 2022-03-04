import GoogleMapsComponent from '../googlemap/Google.container';
import {
  ContactUsTitle,
  ContactUsBigWrapper,
  ContactUsDetails,
  ContactUsMapWrapper,
} from './ContactUs.styles';
interface IProps {
  data: any;
}

const ContactUsUI = ({ data }: IProps) => {
  return (
    <ContactUsBigWrapper>
      <ContactUsTitle value={data.contactUs.title} name={`contactUs.title`} />
      {data.contactUs.details.map((data: any, i: number) => (
        <ContactUsDetails
          key={i}
          value={data.content}
          name={`contactUs.details.${i}.content`}
        />
      ))}
      <ContactUsMapWrapper>
        <GoogleMapsComponent />
      </ContactUsMapWrapper>
    </ContactUsBigWrapper>
  );
};

export default ContactUsUI;
