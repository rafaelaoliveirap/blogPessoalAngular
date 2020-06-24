import { Router, ActivatedRoute } from '@angular/router';
import { PostagemService } from './../service/postagem.service';
import { Postagem } from './../model/Postagem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  constructor(private postagemService: PostagemService, private router: Router, private route: ActivatedRoute) { }

  postagem: Postagem = new Postagem()
  id:number;

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params["id"];
    this.findById(this.id);
  }

  findById(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem)=>{
      this.postagem=resp
    
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  salvar(){
  this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
    this.postagem= resp;
    this.router.navigate(['/feed'])
    location.assign('/feed') 
  })
}

}
