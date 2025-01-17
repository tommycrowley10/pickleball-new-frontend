import { Map, Marker } from "pigeon-maps";

export function Clubs() {
  return (
    <main>
      <Map height={300} defaultCenter={[41.8832272, -88.0675228]} defaultZoom={11}>
        <Marker width={50} anchor={[41.8832272, -88.0675228]} />
      </Map>
    </main>
  );
}
