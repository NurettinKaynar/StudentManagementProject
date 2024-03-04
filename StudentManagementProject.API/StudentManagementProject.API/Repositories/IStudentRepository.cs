using StudentManagementProject.API.DataModels;

namespace StudentManagementProject.API.Repositories
{
    public interface IStudentRepository
    {
        List<Student> GetStudents();

    }
}
