import React from 'react';

import { useGetRatesQuery } from './rates.graphql';

function ExchangeRates() {
  const { loading, error, data } = useGetRatesQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>no data</p>;

  return (
    <div>
      {data!.rates!.map((rateEntry) => {
        const { currency, rate } = rateEntry!;
        return (
          <div key={currency}>
            <p>
              {currency}: {rate}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ExchangeRates;