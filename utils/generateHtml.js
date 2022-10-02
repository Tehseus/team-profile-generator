
const generateHtml = employeeBucket => {  
    console.log(employeeBucket)

    const createManager = manager => {
    return (`
    
    <div class="card cardEdit" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title bg-light">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${manager.title}</h6>
            <p class="card-text">Employee ID: ${manager.id}</p>
            <p class="card-text"><a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office Number: ${manager.officeNum}</p>
        </div>
    </div>
    
    `);};

    const createEngineer = engineer => {
        return (`
        
        <div class="card cardEdit" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title bg-light">${engineer.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${engineer.title}</h6>
                <p class="card-text">Employee ID: ${engineer.id}</p>
                <p class="card-text"><a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <a href="https://github.com/${engineer.gitHub}" class="card-link">GitHub Profile</a>
            </div>
        </div>
        
        `);};


    const createIntern = intern => {
    return (`
    
    <div class="card cardEdit" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title bg-light"><i class="bi bi-cup-hot-fill"></i>${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${intern.title}</h6>
            <p class="card-text">Employee ID: ${intern.id}</p>
            <p class="card-text"><a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
    
    `);};

    const html = [];

    html.push(employeeBucket
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(employeeBucket
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(employeeBucket
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("")

}


module.exports = employeeBucket => {
   
return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">

        <title>Team Generator</title>
    </head>

    <body class="bg-secondary">
        <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
                <h1 class="display-4 text-light">My Team</h1>
            </div>
        </div>
        <div class="container flexWrap">
            <div class="row">
                <div class="card-deck team-area col-12 d-flex justify-content-center bg-secondary">
                    ${generateHtml(employeeBucket)}
                </div>
            </div>
        </div>
    </body>
    </html>

`}