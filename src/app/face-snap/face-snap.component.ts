import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonLabel!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router){}

  ngOnInit(): void {
    this.buttonLabel = 'Oh Snap';
  }

  onSnap(): void {
    //2. Lorsque l'on clique sur le bouton, le texte du bouton doit étre "Oops, un Snap"-->
    //3. Si l'utilisateur a déja cliqué sur le bouton, retirer le snap donc faire -1-->
    //3. Lorsqu'il passe a -1, le bouton réaffiche Oh Snap
    if (this.faceSnap.snaps === 0) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonLabel = 'Oops, un Snap';
    }
    else if(this.faceSnap.snaps === 1){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonLabel = 'Oh Snap';
    }
  }

  onViewFaceSnap(){
    console.log(this.faceSnap.id);
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}


