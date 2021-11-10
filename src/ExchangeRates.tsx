import React from 'react';
import { load } from 'graphql-let/macro';

const { useGetRatesQuery } = load('./rates.graphql');

function ExchangeRates() {
  const { loading, error, data } = useGetRatesQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default ExchangeRates;