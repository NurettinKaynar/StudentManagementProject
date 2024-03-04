using AutoMapper;
using DataModels= StudentManagementProject.API.DataModels;
using StudentManagementProject.API.DomainModels;

namespace StudentManagementProject.API.Profiles
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<DataModels.Student, Student>().ReverseMap();
            CreateMap<DataModels.Gender, Gender>().ReverseMap();
            CreateMap<DataModels.Address, Address>().ReverseMap();
        }
    }                                                            
};
