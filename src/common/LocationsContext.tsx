/** @format */

import { FC, createContext } from 'react';
import { ILocationsContext } from './Types';

interface LocationsContextProviderProps {
	value: ILocationsContext;
}

export const LocationsContext = createContext<ILocationsContext>({
	locations: [],
	removeLocation: (location: string) => {},
});

const LocationsContextProvider: FC<LocationsContextProviderProps> = ({
	value,
	children,
}) => {
	return (
		<LocationsContext.Provider value={value}>
			{children}
		</LocationsContext.Provider>
	);
};

export default LocationsContextProvider;
