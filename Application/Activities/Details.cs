using Domain;
using System;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query: IRequest<Activity>{
            public Guid Id {get; set;}
        }

        // public class Handler : IRequestHandler<Query, Activity>
        // {
        //     public Handler(DataContext context){

        //     }

        //     // public async Task<Activity> Handle(Query request, CancellationToken cancellationToken){
        //     //     // return await 
        //     // }

        // }
    }
}