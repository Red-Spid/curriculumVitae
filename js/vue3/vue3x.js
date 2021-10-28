
const state = {
    count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ],

    my:{
		url:"https://github.com/Red-Spid",
		title:"Fork me on GitHub",
		headportrait:"https://avatars.githubusercontent.com/u/67768597?v=4",
		name:"simon"
	},

    personalInformation: {

        my: {  // 个人信息
            name: "个人信息",
            push: " | ",

            arr: [
                [
                    [
                        {
                            tips: "马兆国",
                            sex: "男",
                            val: "1998"
                        },
                        {
                            tips: "专科",
                            sex: "国家开放大学",
                            val: "网络技术",
                            // 计算机网络技术
                        },
                        {
                            tips: "前端开发",
                            sex: "1",
                            val: " 年工作经验"
                        },
                        {
                            tips: "期望职位",
                            push: "：",
                            val: "前端开发"
                        },
                        {
                            tips: "期望城市",
                            push: "：",
                            val: "北京"
                        },
                    ],
                    [
                        {
                            tips: "Github",
                            push: "：",
                            val: "https://github.com/Red-Spid",
                            url: "https://github.com/Red-Spid"
                        }
    
                    ]
                ]
            ]


        },

        communication: { // 联系方式
            name: "联系方式",
            push: "：",
            arr: [
                [
                    [
                        {
                            tips: "电话",
                            val: "17610199318"
                        },
                        {
                            tips: "邮箱",
                            val: "mainc@foxmail.com"
                        },
                        {
                            tips: "网站",
                            val: "red-spid.github.io//curriculumVitae/",
                            url: "red-spid.github.io//curriculumVitae/"
                        }
                    ],
                ]
            ]

        },

        openSourceProject: { // 开源项目
            name: "开源项目",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "个人博客 - 使用 vue + vuex + js 构建的个人网站，个人简历、文章及留言版展示",
                            url: "red-spid.github.io//curriculumVitae/"
                        },
                    ],
                ]
            ]
        },

        MasterSkills: { // 技能掌握
            name: "技能掌握",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "- HTML/CSS能与UI对接，重构网站静态页面。 "
                            // - 五年前端开发经验，两年项目管理经验
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 基础技能：掌握HTML/HTML5、(css/css3)、JavaScript(ES6+), 掌握NodeJS。"
                        }
                    ],
                    [
                        {
                            tips: "",
                            val: "- 业务交互：掌握Git、uni-app，掌握Vue基础原理和使用。"
                        }
                    ],
                    [
                        {
                            tips: "",
                            val: "- 长期维护线上个人技术博客，能独立完成项目开发，前后端通调"
                        }
                    ]
                ]
            ]

        },

        handsOnBackground: { // 工作经验
            name: "工作经验",
            push: "",
            arr: [

                [
                    [
                        {
                            tips: "",
                            val: "北京哈彼树科技有限公司 （ 2019年4月 ~  2020年10月 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "前端工程师",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 主导开发多端项目",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 主要负责技术选型、核心开发、性能优化、前端工程化，制定并规范团队协作模式",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 项目技术难点突破，承担核心功能开发",
                        },
                    ],
                ],

                [
                    [
                        {
                            tips: "",
                            val: "北京雀科科技有限公司 （ 2019年10月 ~  2020年2月 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "前端工程师",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 负责公司业务与活动静态页开发及数据交互",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 移动端、PC端各浏览器兼容适配",
                        },
                    ],
                ]
                
            ]
        },

        projectExperience: { //项目经验
            name: "项目经验",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "Quick Loan Pro （ 2020-4 ~  2020-10 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "项目负责人/前端开发",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "一款跨国提供贷款的app,帮您解决急需用钱的需求",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "工作内容：",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 项目基础框架搭建，核心功能开发。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 参与基础包、公共组件库的建设，采用组件化和函数式编程，对公共模块进行抽离封装。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 负责功能：登录流程、首页展示、东游记、作业、我的。",
                        },
                    ],
                    [
                        {
                            tips:"",
                            val:"主要成就：",
                            bold: true,

                        }
                    ],
                    [
                        {
                            tips:"",
                            val:"- 累计注册用户申请总额到 ₹7,000,00"
                        }
                    ]
                ],

                [
                    [
                        {
                            tips: "",
                            val: "东东记单词app （ 2018-10 ~  2020-2 ）",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "项目负责人/前端开发",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "东东记单词是一款专业的学习英语软件，拥有非常丰富的学习主题，用户可以随意使用，一键规划学习方案，针对不同的孩子，提供最合适的学习计划，高效学习，针对薄弱方面进行高效学习。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "工作内容：",
                            bold: true,
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 参与项目需求研讨、项目架构、技术选型",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "- 使用 APICloud + Axios 等技术栈开发 App",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: " - 负责功能：登录流程、首页展示、东游记、作业、我的。",
                        },
                    ],
                    [
                        {
                            tips: "",
                            val: "解决难点：",
                            bold: true,

                        },
                    ],
                    [
                        {
                            tips:"",
                            val:"- 用户权限分级，多层嵌套菜单树热渲染，人物关系可视化图谱，全局数据维护"
                        }
                    ]
                ]
            ]
        },

        selfEvaluation: { // 自我评价
            name: "自我评价",
            push: "",
            arr: [
                [
                    [
                        {
                            tips: "",
                            val: "细节把握细致，性格外向开朗，敢于承担责任。"
                        },
                    ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 团队配合能力:善于沟通,有一定团队协作经验,具备一定的活动策划和组织协调能力。 "
                    //     }
                    // ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 工作态度评价:良好的心态和责任感,吃苦耐劳,擅于管理时间,勇于面对变化和挑战。 "
                    //     }
                    // ],
                    // [
                    //     {
                    //         tips: "",
                    //         val: " 自主学习能力:习惯制定切实可行的学习计划,上岗后能积极主动学习岗位所需知识技能 "
                    //     }
                    // ]
                ]
            ]

        },

    }

};

const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    }
}

const mutations = {
    increment(state) {
        // 变更状态
        state.count++
    }
}

const actions = {
    increment(context) {
        context.commit('increment')
    }
}

const moduleA = {
    state: () => ({}),
    mutations: {},
    actions: {},
    getters: {}
}

const moduleB = {
    state: () => ({}),
    mutations: {},
    actions: {}
}

const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    module: {
        a: moduleA,
        b: moduleB
    }
});