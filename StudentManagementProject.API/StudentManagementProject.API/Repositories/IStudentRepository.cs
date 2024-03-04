using StudentManagementProject.API.DataModels;

namespace StudentManagementProject.API.Repositories
{
    public interface IStudentRepository
    {
       Task<List<Student>> GetAllStudentsAsync();

    }
}
