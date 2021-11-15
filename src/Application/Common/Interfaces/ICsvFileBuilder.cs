using annt.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace annt.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
