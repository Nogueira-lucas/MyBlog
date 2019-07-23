import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList = [
    {postTitle:'How to study angular',
     postContent:'Mussum Ipsum, cacilds vidis litro abertis.'+
     'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.'+
     'Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis!'+
     'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'+
     'Si num tem leite então bota uma pinga aí cumpadi!',
     postDate:'12/06/2019'
    },
    {postTitle:'How to study angular',
    postContent:'Mussum Ipsum, cacilds vidis litro abertis.'+
    'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.'+
    'Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis!'+
    'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'+
    'Si num tem leite então bota uma pinga aí cumpadi!',
    postDate:'12/06/2019'
   },
   {postTitle:'How to study angular',
   postContent:'Mussum Ipsum, cacilds vidis litro abertis.'+
   'Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.'+
   'Aenean sit amet nisi. Quem num gosta di mim que vai caçá sua turmis!'+
   'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.'+
   'Si num tem leite então bota uma pinga aí cumpadi!',
   postDate:'12/06/2019'
  },
   
  ]

  constructor() { }

  ngOnInit() {
  }

}
