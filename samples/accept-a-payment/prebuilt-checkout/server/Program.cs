using Dojo.Net;
using Polly;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var apiKey = builder.Configuration.GetSection("Dojo")["ApiKey"];
builder.Services.AddSingleton<IClientAuthorization>(new ApiKeyClientAuthorization(apiKey));

builder.Services
    .AddHttpClient<IPaymentIntentsClient, PaymentIntentsClient>()
    .AddTransientHttpErrorPolicy(
        x => x.WaitAndRetryAsync(3, retryAttempt => TimeSpan.FromSeconds(Math.Pow(3, retryAttempt))));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
