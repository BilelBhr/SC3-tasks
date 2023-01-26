function FailedStudent(liste) {
    var filteredList = liste.filter(student => student.note !== null);
    var total = filteredList.reduce((sum, student) => sum + student.note, 0);
    var average = total / filteredList.length;
    var sortedList = filteredList.sort((a, b) => a.note - b.note);
    var newList = sortedList.map(student => {
        if (student.note >= average) {
            student.mention = "bien";
        } else {
            student.mention = "passable";
        }
        return student;
    });
    return newList;
}


