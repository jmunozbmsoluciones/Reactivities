using System;
using Domain;
using AutoMapper;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{

     public class Command : IRequest
    {
        public required Activity Activity {get;set;}
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync([request.Activity.Id], cancellationToken)
                                        ?? throw new Exception("Activity not found");
                // MANUAL MODE
                // activity.Title = request.activity.Title;     
                // activity.Description = request.activity.Description;
                // activity.Category = request.activity.Category;
                // activity.isCancelled = request.activity.isCancelled;
                // activity.City = request.activity.City;
                // activity.Venue = request.activity.Venue;
                // activity.Latitude = request.activity.Latitude;
                // activity.Longitude = request.activity.Longitude;
               
               //AUTO MAPPER MODE
            mapper.Map(request.Activity, activity);
            await context.SaveChangesAsync(cancellationToken);

            
        }

    }

}
