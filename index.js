const receivesAFunction = (callback) => {
    callback();
}

const returnsANamedFunction = () => {
    let name = () => ('cyril')
    return name;
}

const returnsAnAnonymousFunction = () => {
    return function(){
        console.log('')
    }
}
   