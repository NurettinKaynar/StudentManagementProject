using Microsoft.EntityFrameworkCore;
using StudentManagementProject.API.DataModels;

namespace StudentManagementProject.API.Repositories
{
    public class SqlStudentRepository : IStudentRepository
    {
        private readonly StudentAdminContext context;
        public SqlStudentRepository(StudentAdminContext context)
        {
            this.context = context;
        }
        public List<Student> GetStudents()
        {
            return context.Student.Include(nameof(Gender)).Include(nameof(Address)).ToList();
        }
    }
}
