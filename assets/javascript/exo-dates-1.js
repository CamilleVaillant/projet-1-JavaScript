

function calculated(birthDate) {
    const now = new Date();
    const specificDate = new Date(birthDate);

    let age = now.getFullYear() - specificDate.getFullYear();
    const mois = now.getMonth() - specificDate.getMonth();

    // Vérifie si l'anniversaire de cette année est passé
    if (mois < 0 || (mois === 0 && now.getDate() < specificDate.getDate())) {
        age--;
    }

    return age;
}

console.log(calculated("1987-10-31"))