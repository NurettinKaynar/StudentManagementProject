using Microsoft.AspNetCore.Mvc;
using StudentManagementProject.API.DomainModels;
using StudentManagementProject.API.Repositories;

namespace StudentManagementProject.API.Controllers
{
    public class StudentsController : Controller
    {

        private readonly IStudentRepository _studentRepository;

        public StudentsController(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
            
        }

        [HttpGet]
        [Route("[controller]")]
        public IActionResult GetAllStudents()
        {
            var students=_studentRepository.GetStudents();
            var domainModelStudent = new List<Student>();
            foreach (var student in domainModelStudent)
            {
                domainModelStudent.Add(new Student()
                {
                    Id = student.Id,
                    FirstName = student.FirstName,
                    LastName = student.LastName,
                    DateOfBirth = student.DateOfBirth,
                    Email = student.Email,
                    Mobile = student.Mobile,
                    ProfileImageUrl = student.ProfileImageUrl,
                    GenderId = student.GenderId,
                    Address=new Address()
                    {
                        Id= student.Address.Id,
                        PhysicalAddress= student.Address.PhysicalAddress,
                        PostalAddress= student.Address.PostalAddress,
                    },
                    Gender = student.Gender,
                });

                
            }
            return Ok(students);
        }
    }
}
