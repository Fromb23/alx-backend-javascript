export default function getStudentsByLocation(students, city) {
  const com_location = students.filter((student) => student.location == city);
  return com_location;
}
