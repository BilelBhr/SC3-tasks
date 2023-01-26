function MineurMajeur(liste) {
    return liste.map(person => {
        person.status = person.age >= 18 ? 'majeur' : 'mineur';
        return person;
    });
}
