function VueTodoList(){
    new Vue({
        el:'#app',
        
        data:{

            'items':[
                     'element 1',
                     'element 2', 
                     'element 3', 
                     'element 4',
                     ],
            'newTodo':''
            

        },
        methods:{
            addTodo:function(){
                if(this.newTodo.length > 0){
                    this.items.push(this.newTodo);
                    return this.newTodo = ''
                }else{
                    alert("Per poter aggiungere un elemento alla lista devi scriverlo nell'apposito campo")
                }
            },

            deleteTodo:function(index){
                this.items.splice(index ,1)
            }
      }
    })
}


function init(){
    VueTodoList()
}
document.addEventListener('DOMContentLoaded', init)