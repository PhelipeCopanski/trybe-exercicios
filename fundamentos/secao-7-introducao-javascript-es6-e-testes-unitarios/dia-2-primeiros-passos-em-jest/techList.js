const techList = (arrayTech, name) => {
    if (arrayTech.length === 0) return 'Vazio!';

    const ordenedArrayTech = arrayTech.sort();
    const newArray = [];

    for (let index = 0; index < ordenedArrayTech.length; index += 1) {
        newArray.push({
            tech: ordenedArrayTech[index],
            name: name
        });
    };
    
    return newArray;
};

module.exports = techList;
