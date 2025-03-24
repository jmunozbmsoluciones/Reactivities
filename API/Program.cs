using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>{ 
    
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    });
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try{

    var context = services.GetRequiredService<AppDbContext>();
    //await context.Database.EnsureCreatedAsync();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);

}catch(Exception ex){
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred while seeding the database.");
    Console.WriteLine(ex);
    throw;
}


app.Run();
