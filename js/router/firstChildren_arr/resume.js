
export default{
    path: 'resume/:id',
    name:"resume",
    component:{ 
        template: '<curriculumvitae :infor="$store.state.personalInformation" name="1" ></curriculumvitae>',
        
    }

}