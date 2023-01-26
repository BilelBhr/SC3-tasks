function MoodDetect(liste) {
    var emotions = ['joy', 'sadness', 'anger', 'fear'];
    return liste.map(person => {
        var emotion;
        emotions.forEach(e => {
            if(person.commentaire.toLowerCase().includes(e)){
                emotion = e;
            }
        });
        person.emotion = emotion;
        return person;
    });
}


