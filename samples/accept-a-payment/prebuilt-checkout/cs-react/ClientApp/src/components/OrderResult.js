import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const OrderResult = ()=> {
      let query = useQuery();
      let id = query.get("id");
      const [paymentIntent, setPaymentIntent] = useState(null);

      useEffect(()=>{
          fetch("checkout/"+id).then(data=>data.json()).then(data=>
              setPaymentIntent(data)
          );
      }, [id]);

      if (paymentIntent === null) {
          return null;
      }
      return <div>
        <h1>Payment result</h1>


        <p aria-live="polite">Payment intent: {paymentIntent.id} {paymentIntent.status} </p>

      </div>
};
