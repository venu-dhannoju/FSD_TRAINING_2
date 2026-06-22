function Student() {
    const students = [
        { name: "venu", age: 21, cgpa: "S" },
        { name: "vineel", age: 22, cgpa: "S+" },
        { name: "madhu", age: 20, cgpa: "A" },
        { name: "harsha", age: 20, cgpa: "A+" }
    ];

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>CGPA</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((s) => (
                    <tr key={s.name}>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.cgpa}</td>
                        <td><button>Edit</button><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Student;

