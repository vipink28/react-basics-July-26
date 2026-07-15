import { useState } from "react";

function StudentList() {
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 20,
      grade: "A",
      major: "Computer Science",
    },
    { id: 2, name: "Brian Smith", age: 21, grade: "B", major: "Mathematics" },
    { id: 3, name: "Catherine Lee", age: 19, grade: "A", major: "Biology" },
    { id: 4, name: "David Brown", age: 22, grade: "C", major: "Physics" },
    { id: 5, name: "Emma Davis", age: 20, grade: "B", major: "Chemistry" },
    { id: 6, name: "Frank Wilson", age: 23, grade: "A", major: "Engineering" },
    { id: 7, name: "Grace Taylor", age: 21, grade: "B", major: "History" },
    { id: 8, name: "Henry Moore", age: 20, grade: "C", major: "Economics" },
    {
      id: 9,
      name: "Isabella Martin",
      age: 22,
      grade: "A",
      major: "Psychology",
    },
    { id: 10, name: "Jack Anderson", age: 19, grade: "B", major: "Business" },
  ];

  const [data, setData] = useState(students);
  const [highlightA, setHighlightA] = useState(false);
  const [highlightB, setHighlightB] = useState(false);
  const [highlightC, setHighlightC] = useState(false);

  const handleHighlightA = () => {
    setHighlightA(!highlightA);
  };
  const handleHighlightB = () => {
    setHighlightB(!highlightB);
  };
  const handleHighlightC = () => {
    setHighlightC(!highlightC);
  };

  return (
    <div>
      <h1>Student List</h1>

      <button onClick={handleHighlightA}>Highlight A</button>
      <button onClick={handleHighlightB}>Highlight B</button>
      <button onClick={handleHighlightC}>Highlight C</button>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (student, index) =>
              student.age > 0 && (
                <tr
                  key={index}
                  className={
                    student.grade === "A" && highlightA
                      ? "bg-primary"
                      : student.grade === "B" && highlightB
                        ? "bg-alternate"
                        : student.grade === "C" && highlightC
                          ? "bg-secondary"
                          : ""
                  }
                >
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>{student.major}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
