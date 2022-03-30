curl -v --request POST \
  --url https://api.dojo.tech/webhooks \
  --header 'Authorization: Basic sk_sandbox_Zrf3xrkJM3TatSEb8RgdAKotdohYc1pKydeVVY24rdzABj7VQp7agrVGNCjgDmOejvVh1nSEejF_ArS3J3qIF3WcAiiPg1EB4s9BhCmemOOJtbuHhhAel5bld9Ch8vli1wdgHznsn4X3u8MjO2szH6zTvccYh_kkKpW0D1ouYYAw4kMK_bo2EAOoH8nHX3-U-DssseFJdsso1e5_mzHsOw' \
  --header 'content-type: application/json' \
  --header 'version: 2022-01-03' \
  --data '{"events":["payment_intent.status_updated"],"url":"https://example.com/incoming-events"}'