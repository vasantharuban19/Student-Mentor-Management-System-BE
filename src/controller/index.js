const home = (req,res)=>{
    res.status(200).send(`
    <style>
    .styles{
        display:grid;
        justify-content:center;
        align-items:center;
        padding:10px;
    }
    </style>

    <div class='styles'>
    <h1>Student Mentor Management</h1>
    <h2 class='mentor'>Mentor</h2>
    <ul>
    <li>POST addMentor = api/mentor</li>
    <li>GET getAllMentors = api/mentor</li>
    <li>GET getOneMentor = api/mentor/:id</li>
    <li>PUT editMentor = api/mentor/:id</li>
    <li>DELETE deleteMentor = api/mentor/:id</li>
    <li>GET mentorStudentList = api/mentor/students/:mentor_id</li>
    </ul>
    <h2 class='student'>Student</h2>
    <ul>
    <li>POST AddStudent = api/student</li>
    <li>GET  getAllStudent = api/student</li>
    <li>GET getOneStudnt = api/student/:id</li>
    <li>PUT editSudent = api/student/:id</li>
   <li>DELETE deleteStudent = api/student/:id</li>
   </ul>

    <h2 class='assign'>Assign</h2>
    <ul>
    <li>POST assignStudents = api/assign/student/:batch/mentor/:mentor_id</li>
    </ul>
    </div>
    `)
}

export default {home}