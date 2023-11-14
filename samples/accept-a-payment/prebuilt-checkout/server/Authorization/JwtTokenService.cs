using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace server.Authorization
{
    public static class JwtTokenService
    {
        // secret should NEVER be hardcoded, this code is for demonstration purposes only
        public static string TokenSecret = "a999777221f7649f61d39609f849249f5f24d53d8692e99191e1cac53f55a810";

        public static string GetToken(string customerId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            
            var key = Encoding.ASCII.GetBytes(TokenSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, customerId),
                    new Claim("CustomerId", customerId) // Custom claim for the customer ID
                    // ... other claims
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }
    }
}
