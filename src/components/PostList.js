import React, {Component} from 'react';

import Post from './Post';

class PostList extends Component {
  
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://www.leadsdeconsorcio.com.br/blog/wp-content/uploads/2019/11/04-1.jpg'
        },
        date: '04 jun 2019',
        content: {
          greetings: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
          text: ''
        },
        comments: [
          {
            id: 1,
            author: {
            name: "Diego Fernandes",
            avatar: "https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?w=704"
            },
            content: "A Rocketseat está sempre em busca de novos membros "+
            "para o tema e, geralmente ficamos de olho em quem se destaca "+
            "no Bootcamp."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://s2.glbimg.com/jsaPuF7nO23vRxQkuJ_V3WgouKA=/e.glbimg.com/og/ed/f/original/2014/06/10/461777879.jpg'
        },
        date: '04 jun 2019',
        content: {
          greetings: 'Fala galera, beleza?',
          text: 'Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo '+
          'muito massa! Alguém mais fazendo? Comenta na publicação para trocarmos '+
          'uma ideia.'
        },
        comments: [
          {
            id: 1,
            author: {
            name: "Clara Lisboa",
            avatar: "https://static.quizur.com/i/b/57e0652276ffd2.8177574557e06522684cc8.15647975.jpg"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando. Estou no "+
            'terceiro módulo sobre o Node e já tenho minha APIdocs desafio concluída'
          },
          {
            id: 2,
            author: {
            name: "César Toledo'",
            avatar: "https://rochadvogados.com.br/wp-content/uploads/2019/08/solucoes-pessoas-fisicas.jpg"
            },
            content: "Que maaaaassa! estou pensando em me escrever na próxima turma pra "+
            'ver qual é a desse Bootcamp GoStack. Dizem que os devs saem de lá '+
            'com superpoderes!'
          }
        ]
      }
    ]
  }
  
  
  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => 
        <Post key={post.id} data={post}/>)}
      </div>
    );
  };
  
}

export default PostList;
