export default function getStudentsByLocation(students, city) {
  const sameLocation = students.filter((student) => student.location === city);
  return sameLocation;
}
