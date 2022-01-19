using System;
using System.ComponentModel.DataAnnotations;
namespace Mission_3.Models
{
    public class CalculatorModel
    {
        [Required (AllowEmptyStrings = false,ErrorMessage = "No field can be left blank")]
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Assignments { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double GroupProject { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Quizzes { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Exams { get; set; }
        [Range(0, 100,
        ErrorMessage = "Value for {0} must be between {1} and {2}.")]
        public double Intex { get; set; }

        ////Setter
        //public void setCalculator(string input)
        //{
        //    this.From = input;
        //}

        //// Getter
        //public double getCalculator()
        //{
        //    return this.From;
        //}
    }   
}
