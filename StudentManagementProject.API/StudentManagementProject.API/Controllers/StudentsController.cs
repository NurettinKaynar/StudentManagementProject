using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using StudentManagementProject.API.DomainModels;
using StudentManagementProject.API.Repositories;

namespace StudentManagementProject.API.Controllers
{
    public class StudentsController : Controller
    {

        private readonly IStudentRepository _studentRepository;
        private readonly IMapper _mapper;

        public StudentsController(IStudentRepository studentRepository,IMapper mapper)
        {
            _studentRepository = studentRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAllStudentsAsync()
        {
            var students=await _studentRepository.GetAllStudentsAsync();
           
            return Ok(_mapper.Map<List<Student>>(students));
        }
        [HttpGet]
        [Route("[controller]/{studentId:guid}")]
        public async Task<IActionResult> GetStudentsAsync([FromRoute]Guid studentId)
        {
            var student = await _studentRepository.GetStudentAsync(studentId);
            if(student == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<Student>(student));
        }
    }
}
