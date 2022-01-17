import { FunctionComponent } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

/*

This section is a map of the event location.

*/

interface Props {
  mapsApiKey: string;
}

const LocationSection: FunctionComponent<Props> = ({ mapsApiKey }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "2rem",
  };

  const options = {
    disableDefaultUI: true,
  };

  return (
    <LoadScript googleMapsApiKey={mapsApiKey}>
      <GoogleMap
        zoom={15}
        mapContainerStyle={containerStyle}
        options={options}
      />
    </LoadScript>
  );
};

export default LocationSection;
