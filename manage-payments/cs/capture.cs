var capturesClient = new Dojo.Net.CapturesClient(new HttpClient(), new ApiKeyClientAuthorization("sk_sandbox_kqCwRaWEsl9OM0xNSxh00eayT9k8hAqURGeNQseeV62rMxO5ZiZHub0-XRqkzPLfES2fVUl0seMOyujCIiYaMTaDyiBPf25b7W3Gr3oE0qbpTeM4MRuUMgtDt_scAEfJdqYBlBB_gt_31Bw7FihTISp2WIXXGeTD5WbwhdIhraIJVWR7jo2Hy-xKlBpK-lE8"));
capturesClient.CreateAsync("<PAYMENT_INTENT_ID>", new CreateCaptureRequest
{
    Amount = 1000
});