using cor_da_chita_api;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<CorDaChitaDatabaseSettings>(
    builder.Configuration.GetSection("CorDaChitaDatabase"));

builder.Services.AddSingleton<OrderService>();

// Add services to the container.

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
