import React from 'react';
import maplibregl from 'maplibre-gl';
import type { MapProps, MapRef } from 'react-map-gl';
interface MapViewProps extends Omit<MapProps, 'mapLib' | 'transformRequest'> {
    mapLib?: typeof maplibregl;
}
/**
 * The `MapView` component uses [react-map-gl](https://visgl.github.io/react-map-gl/) and
 * [maplibre-gl-js](https://visgl.github.io/react-map-gl/) to provide an interactive map using
 * [Amplify Geo APIs](https://docs.amplify.aws/lib/geo/getting-started/q/platform/js/) powered by
 * [Amazon Location Service](https://aws.amazon.com/location/). Since `MapView` is a wrapper of the
 * [react-map-gl default Map](https://visgl.github.io/react-map-gl/docs/api-reference/map), it accepts the same
 * properties except `transformRequest` which is set by Amplify.
 *
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/geo#mapview)
 *
 * @example
 * // Basic usage of MapView:
 * function App() {
 *   return <MapView />
 * }
 */
declare const MapView: React.ForwardRefExoticComponent<MapViewProps & React.RefAttributes<MapRef>>;
export { MapView };
