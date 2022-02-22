const en = ["global", "nearby", "bookmarks", "search"];

const activeNav = 1;

function renderNavBar(){
    const navBar = document.querySelector('.navbar');
    for(let i = 0; i < en.length; i++){
        const navBarElement = document.createElement('div');
        navBarElement.append(en[i]);
        if (i === activeNav){
            navBarElement.setAttribute('class', 'navbar__active');
        }
            navBar.append(navBarElement);
        
    }

    // en.forEach((navItem, index)=>{
    //     const navBarElement = document.createElement('div');
    //     navBarElement.append(navItem);

    //     if(index === activeNav){
    //         navBarElement.setAttribute('class', 'navbar__active');
    //     }

    //     navBar.append(navBarElement);

      
    // })
}
renderNavBar();