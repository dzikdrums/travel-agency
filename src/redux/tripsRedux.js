/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  output = output.filter(
    trip =>
      filters.duration.from < trip.days && trip.days < filters.duration.to,
  );

  // TODO - filter by tags
  const filterItems = (filters, tags) => {
    for (let i = 0; i < filters.length; i++) {
      if (!tags.includes(filters[i])) return false;
    }
    return true;
  };
  output = output.filter(trip => filterItems(filters.tags, trip.tags));

  // TODO - sort by cost descending (most expensive goes first)
  output.sort(
    (a, b) => parseFloat(a.cost.slice(1)) - parseFloat(b.cost.slice(1)),
  );

  return output.reverse();
};

export const getTripById = ({ trips }, tripId) => {
  // TODO - filter trips by tripId
  const filtered = trips.filter(function(trip) {
    return trip.id == tripId;
  });

  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  // TODO - filter trips by countryCode
  const filtered = trips.filter(function(trip) {
    return trip.country.code == countryCode;
  });

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
