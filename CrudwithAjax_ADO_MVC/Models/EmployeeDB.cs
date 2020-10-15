using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace CrudwithAjax_ADO_MVC.Models
{
    public class EmployeeDB
    {
        string cs = ConfigurationManager.ConnectionStrings["xcon"].ConnectionString;


        public List<Employee> ListAll() 
        {
            List<Employee> emp = new List<Employee>();
            using (SqlConnection xCon=new SqlConnection(cs))
            {
                xCon.Open();
                SqlCommand xcmd = new SqlCommand("SelectEmployee",xCon);
                xcmd.CommandType =CommandType.StoredProcedure;
                SqlDataReader rd = xcmd.ExecuteReader();
                while (rd.Read())
                {
                    emp.Add(new Employee {
                            EmployeeId=(int)rd["EmployeeId"],
                            Name=rd["Name"].ToString(),
                            Age=(int)rd["Age"],
                            State = rd["State"].ToString(),
                            Country=rd["Country"].ToString()
                    });
                }
                return emp;
            }
        }
    }
}