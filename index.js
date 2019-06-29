
function whoAmI () {
    return `
    <p class="title">About Me</p>
    <p class="bioText">My Bio goes here</p>
    <p class="contactInfo">Contact Info Here</p>
    <button class="button home">Home</button>
    <button class="button projects">Projects</button>
    `
}

function generateBio () {
    $('.container').on('click','.aboutMe', function () {
        $('.container').html(whoAmI);
    });
}

function myProjects () {
    return `
    <p class="title">Projects</p>
    <p class="projectTitle">Project Title</p>
    <div class="projectScreenshot">Project Screenshot</div>
    <span class="link">View Code | View Project</span>
    <p class="skils">Skills/Languages Used</p>
    <p class="description">Description of Project</p>
    <button class="button home">Home</button>
    <button class="button aboutMe">About Me</button>
    `
}

function generateProjects () {
    $('.container').on('click','.projects', function () {
        $('.container').html(myProjects);
    });
}

function landingPage () {
    return `
    <p class="title">Welcome</p>
    <p class="headline">Headline</p>
    <button class="button aboutMe">About Me</button>
    <button class="button projects">Projects</button>
    `
}

function goHome () {
    $('.container').on('click','.home', function () {
        $('.container').html(landingPage);
    });
}

function runAtStart () {
    generateBio();
    generateProjects();
    goHome();
    myProjects();
    landingPage();
    whoAmI();
}

$(runAtStart);