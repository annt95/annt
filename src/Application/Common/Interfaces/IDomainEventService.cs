using annt.Domain.Common;
using System.Threading.Tasks;

namespace annt.Application.Common.Interfaces
{
    public interface IDomainEventService
    {
        Task Publish(DomainEvent domainEvent);
    }
}
