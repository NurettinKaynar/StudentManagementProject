using Microsoft.EntityFrameworkCore;
using StudentManagementProject.API.DataModels;
using StudentManagementProject.API.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StudentAdminContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("StudentAdminPortalDb")));
builder.Services.AddScoped<IStudentRepository, SqlStudentRepository>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

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
