function FormatToArray(str1) {
    return str1.split("-").map(name => {
        var parts = name.split("&");
        return {nom: parts[0], prenom: parts[1]};
    });
}

