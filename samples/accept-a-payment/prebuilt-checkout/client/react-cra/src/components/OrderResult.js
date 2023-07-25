import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Layout from './Layout';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const OrderResult = () => {
      let query = useQuery();
      let id = query.get("id");
      const [paymentIntent, setPaymentIntent] = useState(null);

      useEffect(() => {
          fetch("checkout/" + id).then(data => data.json()).then(data =>
              setPaymentIntent(data)
          );
      }, [id]);

      if (paymentIntent === null || paymentIntent.status !== 2) {
          return null;
      }
      return <Layout>
        <div className="item">🥳 Payment successfull</div>
        <div className="item">
            <small>
            ⚠️ Always ensure that you verify the status of your payment intent through an API call from your backend. Confirm its successful status directly on your backend.
            </small>
        </div>
      </Layout>
};
