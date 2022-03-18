
export default{
    path: 'comments/:id',
    name:"comments",
    // shareExperience
    component:{
        template: '<comments :data="$store.state.comments" :list=" $store.state.commentsUer " :isdom=" $store.state.signIn "></comments>' 
    }
}