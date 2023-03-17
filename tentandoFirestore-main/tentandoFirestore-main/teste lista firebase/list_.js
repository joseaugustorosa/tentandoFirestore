const firebaseConfig = {
    apiKey: "AIzaSyCsRE9UQOLS8OtuvEUjL7_SlsmZPV-d-Bg",
    authDomain: "jogatina-2a7a2.firebaseapp.com",
    projectId: "jogatina-2a7a2",
    storageBucket: "jogatina-2a7a2.appspot.com",
    messagingSenderId: "866150906247",
    appId: "1:866150906247:web:7649251def3a0f5417bb22"
  };
  firebase.initializeApp(firebaseConfig);




  const { createApp } = Vue
  createApp({
    data() {
      return {
       infos : []
      }
    }, mounted(){
      this.achar()
  }, methods: {
     achar(){
      const searchTerm = document.getElementById("searchItem")
      const documento = JSON.parse(localStorage.getItem('product'));
      const userRef = firebase.firestore().collection('numero').doc(documento.uid);
      const petsRef = userRef.collection('informações').where('nome', '>=', searchTerm.value)
      .where('nome', '<=', searchTerm.value + '\uf8ff');
      
      
      petsRef
      .get().then(snapshot =>{
        const info = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }));

        this.infos = info;
        console.log(info);
          
        })
        .catch((error) => {
          console.error("Erro ao obter documentos da subcoleção:", error);
        });
      
      },
      atualizar(){
        this.achar()
      }
      
    }
  
  }).mount('#app')
  
 /* // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  const searchTerm = document.getElementById("searchItem")
  const documento = JSON.parse(localStorage.getItem('product'));

achar()
function achar(){
const userRef = firebase.firestore().collection('numero').doc(documento.uid);
const petsRef = userRef.collection('informações').where('nome', '>=', searchTerm.value)
.where('nome', '<=', searchTerm.value + '\uf8ff');

// obtém um QuerySnapshot da subcoleção "pets"
petsRef
.get().then(snapshot =>{
  const info = snapshot.docs.map(doc => ({
      ...doc.data(),
      uid: doc.id
  }));
  addTask(info)
  console.log(info);
    
  })
  .catch((error) => {
    console.error("Erro ao obter documentos da subcoleção:", error);
  });

}

function addTask(infos){
  const main = document.getElementById('bloco_tarefas_pessoais');
  const prod = JSON.parse(localStorage.getItem('product'));
  console.log(infos)

  
  infos.forEach( info =>{

      const container_item = document.createElement('div');
      container_item.classList.add('container_tp');
      main.appendChild(container_item);
      container_item.id = info.uid;
    


      const h2 = document.createElement('h2');
      h2.classList.add('title_tp');
      container_item.appendChild(h2);
      h2.innerHTML = info.nome;
      const h = document.createElement('h2');
      h.classList.add('title_tp');
      container_item.appendChild(h2);
      h.innerHTML = prod.nome;


     

    
      const div_btn =document.createElement('div');
      div_btn.classList.add('btn_container');
      container_item.appendChild(div_btn);

      const button = document.createElement('button');
      button.classList.add('feito_tp');
      div_btn.appendChild(button);
      button.addEventListener('click', event =>{
          event.stopPropagation();
          IR(task);
         
      })
      button.innerHTML = "feito";

  })
}
atualizar(){

}
*/