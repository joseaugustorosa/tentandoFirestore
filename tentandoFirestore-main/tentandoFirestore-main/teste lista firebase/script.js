


const firebaseConfig = {
    apiKey: "AIzaSyCsRE9UQOLS8OtuvEUjL7_SlsmZPV-d-Bg",
    authDomain: "jogatina-2a7a2.firebaseapp.com",
    projectId: "jogatina-2a7a2",
    storageBucket: "jogatina-2a7a2.appspot.com",
    messagingSenderId: "866150906247",
    appId: "1:866150906247:web:7649251def3a0f5417bb22"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





 






/*CRIAÇÃO DE COLLECTION + SUBCOLECTION

  // Crie uma categoria
firebase.firestore().collection('categorias').add({
    nome: 'Bebidas'
  }).then((categoriaRef) => {
    console.log("Categoria criada com o ID: ", categoriaRef.id);
  
    // Crie um item dentro da categoria
    categoriaRef.collection('itens').add({
      nome: 'Coca-Cola',
      descricao: 'Refrigerante de cola',
      preco: 5.00
    }).then((itemRef) => {
      console.log("Item criado com o ID: ", itemRef.id);
    }).catch((error) => {
      console.log("Erro ao criar o item: ", error);
    });
  
  }).catch((error) => {
    console.log("Erro ao criar a categoria: ", error);
  });



  
*/

/*listando colection + Subcolection*/





const categoriasRef = firebase.firestore().collection('numero');

// Obtenha todos os documentos da coleção "categorias"
categoriasRef.get().then(snapshot =>{
    const tasks = snapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id
    }));
    addTask(tasks)
    console.log(tasks);
    
    const userRef = firebase.firestore().collection('numero').doc('305cuhPD12qNCZr86h12');
const petsRef = userRef.collection('informações');

// obtém um QuerySnapshot da subcoleção "pets"
petsRef.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().nome}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao obter documentos da subcoleção:", error);
  });
})

function addTask(tasks){
    const main = document.getElementById('bloco_tarefas_pessoais');
    
   
    tasks.forEach( task =>{

        const container_item = document.createElement('div');
        container_item.classList.add('container_tp');
        main.appendChild(container_item);
        container_item.id = task.uid;
        


        const h2 = document.createElement('h2');
        h2.classList.add('title_tp');
        container_item.appendChild(h2);
        h2.innerHTML = task.nome;

       

      
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

function IR(task){
        localStorage.setItem('product', JSON.stringify(task));
        window.location.href= './list.html';
    }
}
