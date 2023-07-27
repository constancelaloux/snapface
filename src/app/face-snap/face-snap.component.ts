import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonLabel!: string;

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap';
  }

  onSnap(): void {
    //2. Lorsque l'on clique sur le bouton, le texte du bouton doit étre "Oops, un Snap"-->
    //3. Si l'utilisateur a déja cliqué sur le bouton, retirer le snap donc faire -1-->
    //3. Lorsqu'il passe a -1, le bouton réaffiche Oh Snap
    if (this.faceSnap.snaps === 0) {
      this.buttonLabel = 'Oops, un Snap';
      this.faceSnap.snaps++;
    }
    else if(this.faceSnap.snaps === 1){
      this.buttonLabel = 'Oh Snap';
      this.faceSnap.snaps--;
    }
  }
}
