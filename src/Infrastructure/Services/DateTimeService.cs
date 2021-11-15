using annt.Application.Common.Interfaces;
using System;

namespace annt.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
