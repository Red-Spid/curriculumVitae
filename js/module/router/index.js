
export function dropBYdrop(){
    return { 
        template: '<dropBYdrop :data="$store.state.dropBYdrop">11111</dropBYdrop>'
    };
}

export function comments(){
    return { 
        template: '<comments :data="$store.state.comments" :list=" $store.state.commentsUer " :isdom=" $store.state.signIn "></comments>' 
    };
}

export function home(){
    return { 
        template : `<github ref="headr" class="github-corner"></github><router-view></router-view>`
    };
}

export function curriculumvitae(){
    return { 
        template: '<curriculumvitae :infor="$store.state.personalInformation" ></curriculumvitae>',
        
    };
}

export function personal(){
    return { 
        template : `<div id='personal'><router-view :key='Math.floor(Math.random() * (10000000 - 1)) + 1'></router-view><abgm></abgm></div>`
    };
}
