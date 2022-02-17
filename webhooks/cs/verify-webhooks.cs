private static bool IsValidDojoSignatureSecret(HttpRequest request, string body)
        {
            const string signatureHeaderName = "Dojo-Signature";
            const string secret = "ws_ZcLv5J2H10eqH15dMjKI2A";

            if (!request.Headers.ContainsKey(signatureHeaderName))
            {
                return false;
            }

            var receivedSignature = request.Headers[signatureHeaderName].ToString().Split("=");

            string computedSignature;
            switch (receivedSignature[0])
            {
                case "sha256":
                    var secretBytes = Encoding.UTF8.GetBytes(secret);
                    using (var hasher = new HMACSHA256(secretBytes))
                    {
                        var data = Encoding.UTF8.GetBytes(body);
                        computedSignature = BitConverter.ToString(hasher.ComputeHash(data));
                    }
                    break;
                default:
                    throw new NotImplementedException();
            }

            return computedSignature == receivedSignature[1];
        }