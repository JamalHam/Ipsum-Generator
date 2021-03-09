const stringBuilder = (list) => {
    console.log(list);

    let initString = '';
    let iterations = list.length;

    for (const item of list) {
        if (!--iterations){
            initString += item
        } else {
            initString += item;
            initString+= "\n";
            initString+= "\n";
        }
    }
    console.log('building list');
    console.log(initString)

    return initString
}

export default stringBuilder;