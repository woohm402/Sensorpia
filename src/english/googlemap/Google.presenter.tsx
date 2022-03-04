import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
const GoogleUI = () => {
  const center = {
    lat: 36.40139873458682,
    lng: 127.38560052524944,
  };

  const containerStyle = {
    width: '980px',
    height: '415px',
  };
  const { isLoaded } = useLoadScript({
    language: 'en',
    id: 'google-maps-script',
    googleMapsApiKey: 'AIzaSyCmMCkFADx0uienan0ggRaJxTZD3Qg-g7w',
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleUI;
