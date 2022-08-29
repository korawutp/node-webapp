//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/"; 
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzc4NzYxLCJleHAiOjE2NjE3ODIzNjEsIm5iZiI6MTY2MTc3ODc2MSwianRpIjoiYVVDY05kUTdsRzRWaVVsZSIsInN1YiI6MTAyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ehvFDbS42BVSzaPIeG2F0L-W3xpxH4j_Bps1JCUFH1g"; 
const student = {
  firstname: 'Korawut', // replace with your full name.
  lastname: 'Phuking-ngoen',
  student_id: 63360187,
  age: 20, // put your age.
  gender: 'male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer ${accessToken}`
            
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}


exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}