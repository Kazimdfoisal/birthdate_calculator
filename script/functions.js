
export function inBirthData(dataInputUser) {

    return (` <div id="inputTaker">
    <p>${dataInputUser.name}</p>
    <input type="text" id ="${dataInputUser.id}" minlength="${dataInputUser.minlength}" maxlength="${dataInputUser.maxlength}" min="${dataInputUser.min}" max="${dataInputUser.max}" >
    <div id="${dataInputUser.msid}"></div>
    </div>`)
}



