var client = new RestClient("https://api.dojo.tech/payment-intents/%7BpaymentIntentId%7D/reversal");
var request = new RestRequest(Method.POST);
request.AddHeader("version", "2022-01-03");
request.AddHeader("Authorization", "Basic sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8");
IRestResponse response = client.Execute(request);